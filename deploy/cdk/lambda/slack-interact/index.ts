import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import {
  CognitoIdentityProviderClient,
  AdminUpdateUserAttributesCommand,
  AdminDisableUserCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import * as crypto from 'crypto';
import * as https from 'https';

const REGION = 'us-east-1';
const cognito = new CognitoIdentityProviderClient({ region: REGION });
const secrets = new SecretsManagerClient({ region: REGION });

interface SlackCredentials {
  signingSecret: string;
  botToken: string;
}
interface ActionValue {
  username: string;
  userPoolId: string;
  email: string;
}
interface SlackAction {
  action_id: string;
  value: string;
}
interface SlackPayload {
  actions: SlackAction[];
  response_url: string;
  user: { name: string };
}

let cachedCreds: SlackCredentials | null = null;

async function getCredentials(): Promise<SlackCredentials> {
  if (cachedCreds) return cachedCreds;
  const r = await secrets.send(
    new GetSecretValueCommand({ SecretId: process.env.SLACK_SECRET_ARN! })
  );
  const val = JSON.parse(r.SecretString!) as SlackCredentials;
  cachedCreds = { signingSecret: val.signingSecret, botToken: val.botToken };
  return cachedCreds;
}

function verifySlackSignature(
  signingSecret: string,
  signature: string,
  timestamp: string,
  rawBody: string
): boolean {
  const fiveMinutes = 5 * 60;
  if (Math.abs(Date.now() / 1000 - Number(timestamp)) > fiveMinutes) return false;

  const base = `v0:${timestamp}:${rawBody}`;
  const computed = `v0=${crypto.createHmac('sha256', signingSecret).update(base).digest('hex')}`;
  try {
    return crypto.timingSafeEqual(Buffer.from(computed), Buffer.from(signature));
  } catch {
    return false;
  }
}

function respondToSlack(responseUrl: string, body: object): Promise<void> {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const url = new URL(responseUrl);
    const req = https.request(
      {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (res) => {
        res.resume();
        res.on('end', resolve);
      }
    );
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const rawBody = event.body ?? '';
  const timestamp = event.headers['x-slack-request-timestamp'] ?? '';
  const signature = event.headers['x-slack-signature'] ?? '';

  const { signingSecret } = await getCredentials();
  if (!verifySlackSignature(signingSecret, signature, timestamp, rawBody)) {
    return { statusCode: 401, body: 'Invalid signature' };
  }

  // Slack sends interaction payloads as URL-encoded `payload=<json>`
  const encoded = rawBody.replace(/^payload=/, '');
  const payload = JSON.parse(decodeURIComponent(encoded)) as SlackPayload;

  const action = payload.actions[0];
  const { username, userPoolId, email } = JSON.parse(action.value) as ActionValue;
  const adminName = payload.user.name;
  const responseUrl = payload.response_url;

  let resultText: string;

  if (action.action_id === 'approve_user') {
    await cognito.send(
      new AdminUpdateUserAttributesCommand({
        UserPoolId: userPoolId,
        Username: username,
        UserAttributes: [{ Name: 'custom:status', Value: 'approved' }],
      })
    );
    resultText = `✅ *${email}* approved by @${adminName}. They can now sign in to the dev portal.`;
  } else if (action.action_id === 'deny_user') {
    await cognito.send(
      new AdminDisableUserCommand({ UserPoolId: userPoolId, Username: username })
    );
    resultText = `❌ *${email}* denied by @${adminName}. Their account has been disabled.`;
  } else {
    return { statusCode: 400, body: 'Unknown action' };
  }

  // Replace the original Slack message with the outcome so the channel shows
  // a clear audit trail of who approved/denied each request.
  await respondToSlack(responseUrl, {
    replace_original: true,
    text: resultText,
    blocks: [
      {
        type: 'section',
        text: { type: 'mrkdwn', text: resultText },
      },
    ],
  });

  return { statusCode: 200, body: '' };
};
