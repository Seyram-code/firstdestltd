import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 10;
const RATE_LIMITS = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (request: NextRequest) => {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown-client';
};

const getSiteUrl = () => (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const now = Date.now();
  const currentWindow = RATE_LIMITS.get(ip);

  if (currentWindow && now < currentWindow.resetAt) {
    if (currentWindow.count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json({ error: 'Too many URL submissions. Please wait a moment and try again.' }, { status: 429 });
    }
    currentWindow.count += 1;
  } else {
    RATE_LIMITS.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  let payload: { url?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }

  if (typeof payload.url !== 'string' || !payload.url.trim()) {
    return NextResponse.json({ error: 'Please provide a URL.' }, { status: 400 });
  }

  const siteUrl = getSiteUrl();
  let submittedUrl: URL;
  let configuredSiteUrl: URL;
  try {
    submittedUrl = new URL(payload.url.trim());
    configuredSiteUrl = new URL(siteUrl);
  } catch {
    return NextResponse.json({ error: 'Please provide a valid URL.' }, { status: 400 });
  }

  if (!['http:', 'https:'].includes(submittedUrl.protocol) || submittedUrl.origin !== configuredSiteUrl.origin) {
    return NextResponse.json({ error: `URL must belong to ${configuredSiteUrl.origin}.` }, { status: 400 });
  }

  const indexNowKey = process.env.INDEXNOW_KEY;
  if (!indexNowKey) {
    return NextResponse.json({ error: 'URL submission is not configured yet. Add INDEXNOW_KEY to the server environment.' }, { status: 503 });
  }

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: configuredSiteUrl.host,
        key: indexNowKey,
        keyLocation: `${configuredSiteUrl.origin}/${indexNowKey}.txt`,
        urlList: [submittedUrl.toString()],
      }),
    });

    if (!response.ok) {
      console.error('IndexNow URL submission failed.', response.status, await response.text());
      return NextResponse.json({ error: 'Bing could not accept this URL right now. Please try again later.' }, { status: 502 });
    }
  } catch (error) {
    console.error('IndexNow request failed.', error);
    return NextResponse.json({ error: 'Unable to reach the URL submission service right now.' }, { status: 502 });
  }

  return NextResponse.json({ success: true, url: submittedUrl.toString(), submittedAt: new Date().toISOString() });
}
