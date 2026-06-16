import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { SSMClient, GetParameterCommand, PutParameterCommand } from '@aws-sdk/client-ssm';
import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager';
import * as crypto from 'crypto';

const REGION = 'us-east-1';
const SSM_PARAM = '/dev-portal/cognito/allowed-domains';
const ssm = new SSMClient({ region: REGION });
const secrets = new SecretsManagerClient({ region: REGION });

let cachedSigningSecret: string | null = null;

async function getSigningSecret(): Promise<string> {
  if (cachedSigningSecret) return cachedSigningSecret;
  const r = await secrets.send(
    new GetSecretValueCommand({ SecretId: process.env.SLACK_SECRET_ARN! })
  );
  const val = JSON.parse(r.SecretString!) as { signingSecret: string };
  cachedSigningSecret = val.signingSecret;
  return cachedSigningSecret;
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

function parseSlashCommand(body: string): Record<string, string> {
  return Object.fromEntries(
    body.split('&').map((pair) => pair.split('=').map(decodeURIComponent))
  );
}

function isValidDomain(domain: string): boolean {
  return /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?(\.[a-z]{2,})+$/.test(domain);
}

function slackResponse(text: string): APIGatewayProxyResult {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ response_type: 'ephemeral', text }),
  };
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = event.body ?? '';
  const timestamp = event.headers['x-slack-request-timestamp'] ?? '';
  const signature = event.headers['x-slack-signature'] ?? '';

  const signingSecret = await getSigningSecret();
  if (!verifySlackSignature(signingSecret, signature, timestamp, body)) {
    return { statusCode: 401, body: 'Invalid signature' };
  }

  const params = parseSlashCommand(body);
  const rawInput = (params['text'] ?? '').trim().toLowerCase();

  if (!rawInput) {
    return slackResponse('Usage: `/add-domain acmecorp.com`');
  }

  if (!isValidDomain(rawInput)) {
    return slackResponse(
      `❌ \`${rawInput}\` doesn't look like a valid domain. Example: \`acmecorp.com\``
    );
  }

  // Read current list, deduplicate, append, write back
  const current = await ssm.send(new GetParameterCommand({ Name: SSM_PARAM }));
  const existing = (current.Parameter!.Value ?? '')
    .split(',')
    .map((d) => d.trim().toLowerCase())
    .filter(Boolean);

  if (existing.includes(rawInput)) {
    return slackResponse(`ℹ️ \`${rawInput}\` is already on the allowlist.`);
  }

  const updated = [...existing, rawInput].join(',');
  await ssm.send(
    new PutParameterCommand({ Name: SSM_PARAM, Value: updated, Type: 'StringList', Overwrite: true })
  );

  return slackResponse(
    `✅ \`${rawInput}\` added to the dev portal allowlist. ` +
      `New signups from this domain will be auto-approved.`
  );
};
