import type { PreTokenGenerationTriggerEvent } from 'aws-lambda';

// Messages shown directly to the user in the Cognito Hosted UI.
const MESSAGES: Record<string, string> = {
  pending:
    'Your access request is pending admin approval. ' +
    'You will receive an email once your account has been reviewed.',
  default:
    'Your account is not authorized to access this resource. ' +
    'Please contact support if you believe this is an error.',
};

export const handler = async (
  event: PreTokenGenerationTriggerEvent
): Promise<PreTokenGenerationTriggerEvent> => {
  const status = event.request.userAttributes['custom:status'] ?? '';

  if (status === 'approved') {
    // Allow token issuance — user is cleared to access the portal
    return event;
  }

  const message = status === 'pending' ? MESSAGES.pending : MESSAGES.default;
  throw new Error(message);
};
