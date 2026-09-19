import { NextRequest, NextResponse } from 'next/server';
import { company } from '@/src/data/company';

const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 20;
const RATE_LIMITS = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (request: NextRequest) => {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown-client';
};

const cleanText = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') return '';
  return value.replace(/[\u0000-\u001F\u007F]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, maxLength);
};

const knowledgeBase = [
  `Company: ${company.name}. ${company.companyOverview}`,
  `Mission: ${company.mission}`,
  `Vision: ${company.vision}`,
  `Location: ${company.address}. Phone: ${company.phone}. Email: ${company.email}.`,
  `Services: ${company.services.map((service) => `${service.name}: ${service.description} URL: /services/${service.slug}`).join(' | ')}`,
  `Website pages: Home /, About /about, Services /services, Industries /industries, Projects /projects, Contact /contact.`,
].join('\n');

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const now = Date.now();
  const currentWindow = RATE_LIMITS.get(ip);

  if (currentWindow && now < currentWindow.resetAt) {
    if (currentWindow.count >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json({ error: 'Please wait a moment before sending another message.' }, { status: 429 });
    }
    currentWindow.count += 1;
  } else {
    RATE_LIMITS.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
  }

  let payload: { messages?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
  }

  const messages = Array.isArray(payload.messages)
    ? payload.messages
        .filter((message): message is { role: string; content: string } => {
          if (!message || typeof message !== 'object') return false;
          const candidate = message as { role?: unknown; content?: unknown };
          return ['user', 'assistant'].includes(String(candidate.role)) && typeof candidate.content === 'string';
        })
        .slice(-12)
        .map((message) => ({ role: message.role, content: cleanText(message.content, 1200) }))
    : [];

  if (!messages.length || !messages.some((message) => message.role === 'user' && message.content)) {
    return NextResponse.json({ error: 'Please send a message.' }, { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      message: `I am ready to help with First Dest services, projects, and enquiries. Please email ${company.email} or call ${company.phone} while the AI assistant is being connected.`,
      configured: false,
    });
  }

  const model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini';
  const baseUrl = (process.env.OPENAI_BASE_URL ?? 'https://api.openai.com/v1').replace(/\/$/, '');
  const systemPrompt = `You are First Dest Assistant, the helpful website assistant for ${company.name} in Ghana.
Answer only using the trusted company information below and general conversational knowledge that does not invent company facts.
Be concise, warm, and professional. Recommend the most relevant service when the visitor describes a need.
Never promise pricing, availability, timelines, approvals, legal advice, financial advice, or project outcomes.
When you do not know something, say so and offer the contact page, email, or phone number.
If the visitor wants human help, invite them to share their name, email, phone, company, and enquiry. Do not ask for passwords, payment details, or sensitive personal information.
Use plain text. You may include a single relevant website path such as /contact or /services, but do not use markdown tables.

Trusted company information:
${knowledgeBase}`;

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model, temperature: 0.2, max_tokens: 350, messages: [{ role: 'system', content: systemPrompt }, ...messages] }),
    });

    if (!response.ok) {
      console.error('AI provider request failed.', response.status, await response.text());
      return NextResponse.json({ error: 'The assistant is temporarily unavailable. Please contact our team directly.' }, { status: 502 });
    }

    const result = (await response.json()) as { choices?: Array<{ message?: { content?: unknown } }> };
    const message = cleanText(result.choices?.[0]?.message?.content, 2000);
    if (!message) throw new Error('AI provider returned an empty response.');

    return NextResponse.json({ message, configured: true });
  } catch (error) {
    console.error('AI assistant request failed.', error);
    return NextResponse.json({ error: 'The assistant is temporarily unavailable. Please contact our team directly.' }, { status: 502 });
  }
}
