import type {
  CloudFrontRequestEvent,
  CloudFrontRequestResult,
  CloudFrontRequest,
} from 'aws-lambda';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';
import * as https from 'https';
import * as crypto from 'crypto';

const REGION = 'us-east-1';
const COOKIE_NAME = 'DevPortalSession';
const SSM_PREFIX = '/dev-portal/cognito';

interface Config {
  userPoolId: string;
  clientId: string;
}

interface JwksKey {
  kid: string;
  kty: string;
  alg: string;
  use: string;
  n: string;
  e: string;
}

const ssm = new SSMClient({ region: REGION });
let cachedConfig: Config | null = null;
let cachedJwks: JwksKey[] | null = null;

async function getConfig(): Promise<Config> {
  if (cachedConfig) return cachedConfig;

  const [userPoolId, clientId] = await Promise.all([
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/user-pool-id` }))
      .then((r) => r.Parameter!.Value!),
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/client-id` }))
      .then((r) => r.Parameter!.Value!),
  ]);

  cachedConfig = { userPoolId, clientId };
  return cachedConfig;
}

function httpsGet(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk: string) => (data += chunk));
        res.on('end', () => resolve(data));
        res.on('error', reject);
      })
      .on('error', reject);
  });
}

async function getJwks(userPoolId: string): Promise<JwksKey[]> {
  if (cachedJwks) return cachedJwks;
  const url = `https://cognito-idp.${REGION}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
  const data = await httpsGet(url);
  cachedJwks = (JSON.parse(data) as { keys: JwksKey[] }).keys;
  return cachedJwks;
}

async function validateToken(token: string, cfg: Config): Promise<boolean> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    const header = JSON.parse(Buffer.from(parts[0], 'base64url').toString()) as {
      kid: string;
      alg: string;
    };
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString()) as {
      exp: number;
      iss: string;
      aud?: string;
      client_id?: string;
      token_use: string;
    };

    if (payload.exp < Math.floor(Date.now() / 1000)) return false;

    const expectedIss = `https://cognito-idp.${REGION}.amazonaws.com/${cfg.userPoolId}`;
    if (payload.iss !== expectedIss) return false;

    if (payload.token_use === 'id' && payload.aud !== cfg.clientId) return false;
    if (payload.token_use === 'access' && payload.client_id !== cfg.clientId) return false;

    const keys = await getJwks(cfg.userPoolId);
    const jwkKey = keys.find((k) => k.kid === header.kid);
    if (!jwkKey) return false;

    const publicKey = crypto.createPublicKey({
      key: jwkKey as unknown as crypto.JsonWebKey,
      format: 'jwk',
    });
    const verifier = crypto.createVerify('RSA-SHA256');
    verifier.update(`${parts[0]}.${parts[1]}`);
    return verifier.verify(publicKey, Buffer.from(parts[2], 'base64url'));
  } catch {
    return false;
  }
}

function getTokenFromCookies(headers: CloudFrontRequest['headers']): string | null {
  const cookieHeaders = headers['cookie'] ?? [];
  for (const { value } of cookieHeaders) {
    for (const cookie of value.split(';')) {
      const [name, ...rest] = cookie.trim().split('=');
      if (name.trim() === COOKIE_NAME) return rest.join('=');
    }
  }
  return null;
}

export const handler = async (
  event: CloudFrontRequestEvent
): Promise<CloudFrontRequestResult> => {
  const request = event.Records[0].cf.request;

  // Pass the login page through without any auth check — it is the auth UI.
  if (request.uri === '/login.html') {
    return request;
  }

  const cfg = await getConfig();
  const token = getTokenFromCookies(request.headers);
  if (token && (await validateToken(token, cfg))) {
    return request;
  }

  // Encode the original URI so the login page can redirect back after sign-in.
  const originalUri =
    request.uri + (request.querystring ? `?${request.querystring}` : '');
  const r = Buffer.from(originalUri).toString('base64url');

  return {
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [{ key: 'Location', value: `/login.html?r=${r}` }],
      'cache-control': [{ key: 'Cache-Control', value: 'no-cache, no-store' }],
    },
  };
};
