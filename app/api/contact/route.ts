import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

const getMailTransport = () => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpUser || !smtpPassword) return null;

  const smtpPort = Number(process.env.SMTP_PORT ?? '465');

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.hostinger.com',
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
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
  const fromEmail = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const transporter = getMailTransport();

  if (!transporter || !fromEmail) {
    console.error('Contact email service is not configured.');
    return NextResponse.json(
      { error: 'The contact service is temporarily unavailable. Please email us directly.' },
      { status: 503 },
    );
  }

  try {
    await transporter.sendMail({
      from: `First Dest Website <${fromEmail}>`,
      to: destinationEmail,
      replyTo: email,
      subject: `Website contact: ${subject}`,
      text: [
        'New website contact submission',
        '',
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Company: ${company}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });
  } catch (error) {
    console.error('Contact email delivery failed.', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again later or email us directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({
    success: true,
    message: 'Thank you. Your message has been sent successfully.',
  });
}
