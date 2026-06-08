import crypto from 'crypto';

const COOKIE_NAME = 'wedding_admin_session';

export function getCookieName() {
  return COOKIE_NAME;
}

function secret() {
  return process.env.AUTH_SECRET || 'dev-secret-change-me';
}

export function createSessionToken(username: string) {
  const payload = Buffer.from(JSON.stringify({ username, exp: Date.now() + 1000 * 60 * 60 * 8 })).toString('base64url');
  const sig = crypto.createHmac('sha256', secret()).update(payload).digest('base64url');
  return `${payload}.${sig}`;
}

export function verifySessionToken(token?: string) {
  if (!token || !token.includes('.')) return false;
  const [payload, sig] = token.split('.');
  const expected = crypto.createHmac('sha256', secret()).update(payload).digest('base64url');
  if (sig !== expected) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return typeof data.exp === 'number' && Date.now() < data.exp;
  } catch {
    return false;
  }
}
