import type {
  CloudFrontRequestEvent,
  CloudFrontRequestResult,
  CloudFrontRequest,
} from 'aws-lambda';
import { SSMClient, GetParameterCommand } from '@aws-sdk/client-ssm';
import * as https from 'https';
import * as crypto from 'crypto';

// Lambda@Edge must run in us-east-1; SSM params live there too.
const SSM_REGION = 'us-east-1';
const COOKIE_NAME = 'DevPortalSession';
const SSM_PREFIX = '/dev-portal/cognito';

interface Config {
  userPoolId: string;
  clientId: string;
  cognitoDomain: string; // e.g. https://vertex-dev-default.auth.us-west-2.amazoncognito.com
}

interface JwksKey {
  kid: string;
  kty: string;
  alg: string;
  use: string;
  n: string;
  e: string;
}

const ssm = new SSMClient({ region: SSM_REGION });
let cachedConfig: Config | null = null;
let cachedJwks: JwksKey[] | null = null;

async function getConfig(): Promise<Config> {
  if (cachedConfig) return cachedConfig;

  const [userPoolId, clientId, cognitoDomain] = await Promise.all([
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/user-pool-id` }))
      .then((r) => r.Parameter!.Value!),
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/client-id` }))
      .then((r) => r.Parameter!.Value!),
    ssm
      .send(new GetParameterCommand({ Name: `${SSM_PREFIX}/domain` }))
      .then((r) => r.Parameter!.Value!),
  ]);

  cachedConfig = { userPoolId, clientId, cognitoDomain };
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
    const u = new URL(url);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname,
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
  // Region is encoded in the pool ID: "us-west-2_Uv70W2uhX" → "us-west-2"
  const region = userPoolId.split('_')[0];
  const url = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
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

    const region = cfg.userPoolId.split('_')[0];
    const expectedIss = `https://cognito-idp.${region}.amazonaws.com/${cfg.userPoolId}`;
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

function getCookieValue(
  headers: CloudFrontRequest['headers'],
  name: string
): string | null {
  const cookieHeaders = headers['cookie'] ?? [];
  for (const { value } of cookieHeaders) {
    for (const cookie of value.split(';')) {
      const [n, ...rest] = cookie.trim().split('=');
      if (n.trim() === name) return rest.join('=');
    }
  }
  return null;
}

function redirectToLogin(
  request: CloudFrontRequest,
  cfg: Config
): CloudFrontRequestResult {
  const originalUri =
    request.uri + (request.querystring ? `?${request.querystring}` : '');

  const codeVerifier = crypto.randomBytes(32).toString('base64url');
  const codeChallenge = crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64url');

  // Embed both the original URI and the PKCE verifier in state so we don't
  // need to rely on a cookie surviving the cross-site redirect from Cognito.
  const state = Buffer.from(
    JSON.stringify({ uri: originalUri, cv: codeVerifier })
  ).toString('base64url');

  const host = request.headers['host'][0].value;
  const redirectUri = `https://${host}/callback`;

  const params = new URLSearchParams({
    client_id: cfg.clientId,
    response_type: 'code',
    scope: 'openid email',
    redirect_uri: redirectUri,
    state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
  });

  return {
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [
        {
          key: 'Location',
          value: `${cfg.cognitoDomain}/oauth2/authorize?${params.toString()}`,
        },
      ],
      'cache-control': [{ key: 'Cache-Control', value: 'no-cache, no-store' }],
    },
  };
}

function errorPage(title: string, detail: string): CloudFrontRequestResult {
  return {
    status: '200',
    statusDescription: 'OK',
    headers: {
      'content-type': [{ key: 'Content-Type', value: 'text/html' }],
      'cache-control': [{ key: 'Cache-Control', value: 'no-cache, no-store' }],
    },
    body: `<!DOCTYPE html><html><head><title>Auth error</title></head><body>
<h2>${title}</h2><pre>${detail}</pre>
<p><a href="/">Try again</a></p></body></html>`,
  };
}

async function handleCallback(
  request: CloudFrontRequest,
  cfg: Config
): Promise<CloudFrontRequestResult> {
  const qs = new URLSearchParams(request.querystring || '');
  const code = qs.get('code');
  const state = qs.get('state');

  if (!code || !state) {
    return errorPage('Missing callback params', `code=${code} state=${state}`);
  }

  // Decode state to recover the original URI and PKCE verifier
  let codeVerifier: string;
  let destination: string;
  try {
    const stateObj = JSON.parse(Buffer.from(state, 'base64url').toString()) as {
      uri: string;
      cv: string;
    };
    codeVerifier = stateObj.cv;
    destination = stateObj.uri || '/';
  } catch (e) {
    return errorPage('State decode failed', `state=${state} error=${e}`);
  }

  const host = request.headers['host'][0].value;
  const redirectUri = `https://${host}/callback`;

  const tokenBody = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: cfg.clientId,
    code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
  }).toString();

  let raw: string;
  try {
    raw = await httpsPost(`${cfg.cognitoDomain}/oauth2/token`, tokenBody);
  } catch (e) {
    return errorPage('Token request failed', `${e}`);
  }

  const tokens = JSON.parse(raw) as { id_token?: string; error?: string; error_description?: string };

  if (tokens.error || !tokens.id_token) {
    return errorPage('Token exchange failed', `error=${tokens.error} description=${tokens.error_description} redirect_uri=${redirectUri}`);
  }

  return {
    status: '302',
    statusDescription: 'Found',
    headers: {
      location: [{ key: 'Location', value: destination }],
      'set-cookie': [
        {
          key: 'Set-Cookie',
          value: `${COOKIE_NAME}=${tokens.id_token}; Path=/; Secure; HttpOnly; SameSite=Lax`,
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

  // Handle OAuth callback — must bypass auth check or we get an infinite redirect
  if (request.uri === '/callback') {
    return handleCallback(request, cfg);
  }

  // Pass through if a valid session cookie is present
  const token = getCookieValue(request.headers, COOKIE_NAME);
  if (token && (await validateToken(token, cfg))) {
    return request;
  }

  return redirectToLogin(request, cfg);
};
