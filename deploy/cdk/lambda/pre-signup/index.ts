import type { PreSignUpTriggerEvent } from 'aws-lambda';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';

const ssm = new SSMClient({ region: 'us-east-1' });
let cachedDomains: string[] | null = null;

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

export const handler = async (
  event: PreSignUpTriggerEvent
): Promise<PreSignUpTriggerEvent> => {
  const email = (event.request.userAttributes['email'] ?? '').toLowerCase();
  const domain = email.split('@')[1] ?? '';

  const allowedDomains = await getAllowedDomains();

  if (allowedDomains.includes(domain)) {
    // Auto-confirm + auto-verify so the user can sign in immediately.
    // post-confirmation will still fire and set custom:status = approved.
    event.response.autoConfirmUser = true;
    event.response.autoVerifyEmail = true;
  }
  // Non-allowlisted users proceed through the normal email-verification flow.
  // post-confirmation sets custom:status = pending and notifies Slack.

  return event;
};
