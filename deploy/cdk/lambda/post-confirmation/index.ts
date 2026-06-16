import type { PostConfirmationTriggerEvent } from 'aws-lambda';
import {
  CognitoIdentityProviderClient,
  AdminUpdateUserAttributesCommand,
} from '@aws-sdk/client-cognito-identity-provider';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import * as https from 'https';

const REGION = 'us-east-1';
const cognito = new CognitoIdentityProviderClient({ region: REGION });
const ssm = new SSMClient({ region: REGION });
const secrets = new SecretsManagerClient({ region: REGION });

interface SlackCredentials {
  botToken: string;
  adminChannelId: string;
}

let cachedDomains: string[] | null = null;
let cachedSlack: SlackCredentials | null = null;

async function getAllowedDomains(): Promise<string[]> {
  if (cachedDomains) return cachedDomains;
  const r = await ssm.send(
    new GetParameterCommand({ Name: '/dev-portal/cognito/allowed-domains' })
  );
  cachedDomains = (r.Parameter!.Value ?? '')
    .split(',')
    .map((d) => d.trim().toLowerCase())
    .filter(Boolean);
  return cachedDomains;
}

async function getSlackCredentials(): Promise<SlackCredentials> {
  if (cachedSlack) return cachedSlack;
  const r = await secrets.send(
    new GetSecretValueCommand({ SecretId: process.env.SLACK_SECRET_ARN! })
  );
  const val = JSON.parse(r.SecretString!) as SlackCredentials & { signingSecret: string };
  cachedSlack = { botToken: val.botToken, adminChannelId: val.adminChannelId };
  return cachedSlack;
}

function slackPost(token: string, body: object): Promise<void> {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = https.request(
      {
        hostname: 'slack.com',
        path: '/api/chat.postMessage',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${token}`,
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

async function setUserStatus(userPoolId: string, username: string, status: string) {
  await cognito.send(
    new AdminUpdateUserAttributesCommand({
      UserPoolId: userPoolId,
      Username: username,
      UserAttributes: [{ Name: 'custom:status', Value: status }],
    })
  );
}

export const handler = async (
  event: PostConfirmationTriggerEvent
): Promise<PostConfirmationTriggerEvent> => {
  const email = (event.request.userAttributes['email'] ?? '').toLowerCase();
  const domain = email.split('@')[1] ?? '';
  // userPoolId is provided by the Cognito trigger event — no env var needed,
  // which avoids a circular CloudFormation dependency (UserPool → trigger fn → UserPool).
  const userPoolId = event.userPoolId;
  const username = event.userName;

  const allowedDomains = await getAllowedDomains();

  if (allowedDomains.includes(domain)) {
    // Domain is on the allowlist — approve immediately
    await setUserStatus(userPoolId, username, 'approved');
    return event;
  }

  // Domain not on the allowlist — queue for admin review
  await setUserStatus(userPoolId, username, 'pending');

  const { botToken, adminChannelId } = await getSlackCredentials();

  // Value embedded in button includes enough context for the interact Lambda
  // to call Cognito without an extra lookup.
  const actionValue = JSON.stringify({ username, userPoolId, email });

  await slackPost(botToken, {
    channel: adminChannelId,
    text: `New dev portal access request from ${email}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text:
            ':key: *New dev portal access request*\n' +
            `*Email:* ${email}\n` +
            `*Domain:* ${domain}\n` +
            `*Status:* Pending approval`,
        },
      },
      {
        type: 'actions',
        block_id: 'access_request_actions',
        elements: [
          {
            type: 'button',
            text: { type: 'plain_text', text: '✅ Approve' },
            style: 'primary',
            action_id: 'approve_user',
            value: actionValue,
          },
          {
            type: 'button',
            text: { type: 'plain_text', text: '❌ Deny' },
            style: 'danger',
            action_id: 'deny_user',
            value: actionValue,
            confirm: {
              title: { type: 'plain_text', text: 'Deny access?' },
              text: {
                type: 'mrkdwn',
                text: `This will disable ${email}'s account. They will not be able to sign in.`,
              },
              confirm: { type: 'plain_text', text: 'Deny' },
              deny: { type: 'plain_text', text: 'Cancel' },
            },
          },
        ],
      },
    ],
  });

  return event;
};
