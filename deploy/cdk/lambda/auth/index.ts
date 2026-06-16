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
  cognitoDomain: string;
  domain: string;
}

interface JwksKey {
  kid: string;
  kty: string;
  alg: string;
  use: string;
  n: string;
  e: string;
}

// Module-level cache — populated once per Lambda container, persists across
// warm invocations. Cold starts will pay the SSM + JWKS fetch cost (~50ms).
const ssm = new SSMClient({ region: REGION });
let cachedConfig: Config | null = null;
let cachedJwks: JwksKey[] | null = null;

async function getConfig(): Promise<Config> {
  if (cachedConfig) return cachedConfig;

  const [userPoolId, clientId, cognitoDomain, domain] = await Promise.all([
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/user-pool-id` }))
      .then((r) => r.Parameter!.Value!),
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/client-id` }))
      .then((r) => r.Parameter!.Value!),
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/domain` }))
      .then((r) => r.Parameter!.Value!),
    ssm
      .send(new GetParameterCommand({ Name: '/dev-portal/active-domain' }))
      .then((r) => r.Parameter!.Value!),
  ]);

  cachedConfig = { userPoolId, clientId, cognitoDomain, domain };
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

function httpsPost(url: string, body: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const req = https.request(
      {
        hostname: urlObj.hostname,
        path: urlObj.pathname,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (chunk: string) => (data += chunk));
        res.on('end', () => resolve(data));
        res.on('error', reject);
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
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

    // Expiry
    if (payload.exp < Math.floor(Date.now() / 1000)) return false;

    // Issuer
    const expectedIss = `https://cognito-idp.${REGION}.amazonaws.com/${cfg.userPoolId}`;
    if (payload.iss !== expectedIss) return false;

    // Audience — ID tokens use `aud`, access tokens use `client_id`
    if (payload.token_use === 'id' && payload.aud !== cfg.clientId) return false;
    if (payload.token_use === 'access' && payload.client_id !== cfg.clientId)
      return false;

    // Signature — RS256 using Cognito's JWKS public keys
    const keys = await getJwks(cfg.userPoolId);
    const jwkKey = keys.find((k) => k.kid === header.kid);
    if (!jwkKey) return false;

    const publicKey = crypto.createPublicKey({ key: jwkKey as unknown as crypto.JsonWebKey, format: 'jwk' });
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

function redirectToLogin(cfg: Config, originalUri: string): CloudFrontRequestResult {
  const state = Buffer.from(originalUri).toString('base64url');
  const url = new URL(`${cfg.cognitoDomain}/login`);
  url.searchParams.set('client_id', cfg.clientId);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'email openid profile');
  url.searchParams.set('redirect_uri', `https://${cfg.domain}/callback`);
  url.searchParams.set('state', state);

  return {
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [{ key: 'Location', value: url.toString() }],
      'cache-control': [{ key: 'Cache-Control', value: 'no-cache, no-store' }],
    },
  };
}

async function handleCallback(
  request: CloudFrontRequest,
  cfg: Config
): Promise<CloudFrontRequestResult> {
  const params = new URLSearchParams(request.querystring ?? '');
  const code = params.get('code');
  const state = params.get('state');

  if (!code) return redirectToLogin(cfg, '/');

  const tokenBody = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: cfg.clientId,
    code,
    redirect_uri: `https://${cfg.domain}/callback`,
  }).toString();

  let tokens: { id_token?: string };
  try {
    const raw = await httpsPost(`${cfg.cognitoDomain}/oauth2/token`, tokenBody);
    tokens = JSON.parse(raw) as { id_token?: string };
  } catch {
    return redirectToLogin(cfg, '/');
  }

  if (!tokens.id_token) return redirectToLogin(cfg, '/');

  // Decode state to get the original destination; default to root
  let redirectTo = '/';
  if (state) {
    try {
      const decoded = Buffer.from(state, 'base64url').toString();
      // Ensure it's a relative path to prevent open-redirect attacks
      if (decoded.startsWith('/') && !decoded.startsWith('//')) {
        redirectTo = decoded;
      }
    } catch {
      // fall through to '/'
    }
  }

  return {
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [{ key: 'Location', value: redirectTo }],
      'set-cookie': [
        {
          key: 'Set-Cookie',
          value: `${COOKIE_NAME}=${tokens.id_token}; Domain=${cfg.domain}; Path=/; HttpOnly; Secure; SameSite=Lax`,
        },
      ],
      'cache-control': [{ key: 'Cache-Control', value: 'no-cache, no-store' }],
    },
  };
}

export const handler = async (
  event: CloudFrontRequestEvent
): Promise<CloudFrontRequestResult> => {
  const request = event.Records[0].cf.request;
  const cfg = await getConfig();

  if (request.uri === '/callback') {
    return handleCallback(request, cfg);
  }

  const token = getTokenFromCookies(request.headers);
  if (token && (await validateToken(token, cfg))) {
    return request; // authenticated — pass through to origin
  }

  return redirectToLogin(cfg, request.uri);
};
