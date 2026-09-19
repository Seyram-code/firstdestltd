import { NextRequest, NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const RATE_LIMITS = new Map<string, { count: number; resetAt: number }>();

const sanitizeText = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') return '';

  const normalized = value
    .replace(/[\u0000-\u001F\u007F]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return normalized.slice(0, maxLength);
};

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const getClientIp = (request: NextRequest) => {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip') ?? 'unknown-client';
};

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const now = Date.now();
  const currentWindow = RATE_LIMITS.get(ip);

  if (currentWindow && now < currentWindow.resetAt) {
    if (currentWindow.count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a moment before sending another message.' },
        { status: 429 },
      );
    }

    currentWindow.count += 1;
  } else {
    RATE_LIMITS.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }

  const fullName = sanitizeText(payload.fullName, 120);
  const email = sanitizeText(payload.email, 160).toLowerCase();
  const phone = sanitizeText(payload.phone, 40);
  const company = sanitizeText(payload.company, 120);
  const subject = sanitizeText(payload.subject, 200);
  const message = sanitizeText(payload.message, 2000);

  const requiredFields = { fullName, email, phone, company, subject, message };
  const missingField = Object.entries(requiredFields).find(([, value]) => !value);

  if (missingField) {
    return NextResponse.json({ error: `Please provide a valid ${missingField[0]}.` }, { status: 400 });
  }

  if (fullName.length < 2) {
    return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  if (phone.length < 7) {
    return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
  }

  if (company.length < 2) {
    return NextResponse.json({ error: 'Please enter your company or organization.' }, { status: 400 });
  }

  if (subject.length < 3) {
    return NextResponse.json({ error: 'Please enter a subject.' }, { status: 400 });
  }

  if (message.length < 20) {
    return NextResponse.json({ error: 'Please share a message with at least 20 characters.' }, { status: 400 });
  }

  const destinationEmail = process.env.CONTACT_EMAIL_TO ?? 'info@firstdestltd.com';

  console.info('Contact form submission received', {
    ip,
    fullName,
    email,
    phone,
    company,
    subject,
    message,
    destinationEmail,
  });

  return NextResponse.json({
    success: true,
    message: 'Your message has been received and is ready for processing.',
  });
}
