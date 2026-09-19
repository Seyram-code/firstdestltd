'use client';

import { AlertCircle, ArrowRight, CheckCircle2, Mail, MapPin, Navigation, Phone, Send } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { company } from '@/src/data/company';

const mapsQuery = 'Adenta+Taxi+Rank+Near+ECG+Substation+Accra+Ghana';
const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const emptyForm: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: '',
};

export function ContactPageClient() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const validateField = (name: keyof ContactFormData, value: string): string => {
    const trimmedValue = value.trim();

    switch (name) {
      case 'fullName':
        return trimmedValue.length >= 2 ? '' : 'Please enter your full name.';
      case 'email': {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(trimmedValue) ? '' : 'Please enter a valid email address.';
      }
      case 'phone':
        return trimmedValue.length >= 7 ? '' : 'Please enter a valid phone number.';
      case 'company':
        return trimmedValue.length >= 2 ? '' : 'Please enter your company or organization name.';
      case 'subject':
        return trimmedValue.length >= 3 ? '' : 'Please enter a subject.';
      case 'message':
        return trimmedValue.length >= 20 ? '' : 'Please share a message with at least 20 characters.';
      default:
        return '';
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const fieldName = name as keyof ContactFormData;

    setFormData((previous) => ({ ...previous, [fieldName]: value }));
    setErrors((previous) => ({ ...previous, [fieldName]: validateField(fieldName, value) }));

    if (isSubmitted) {
      setIsSubmitted(false);
      setStatusMessage('');
    }
  };

  const validateForm = () => {
    const nextErrors: Partial<Record<keyof ContactFormData, string>> = {};

    (Object.keys(emptyForm) as Array<keyof ContactFormData>).forEach((field) => {
      const message = validateField(field, formData[field]);
      if (message) {
        nextErrors[field] = message;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setIsSubmitted(true);
      setStatusMessage('Please complete all required fields before sending your message.');
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.error ?? 'Unable to send your message right now.');
      }

      setFormData(emptyForm);
      setErrors({});
      setIsSubmitted(true);
      setStatusMessage(result.message ?? 'Thank you for reaching out. Your message has been received.');
    } catch (error) {
      setIsSubmitted(true);
      setStatusMessage(error instanceof Error ? error.message : 'Your message could not be sent right now. Please try again shortly or contact us directly by phone or email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-[#061d3d] py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Contact</p>
              <h1 className="text-4xl font-extrabold tracking-[-0.05em] md:text-6xl">Get in Touch</h1>
            </div>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-200 transition hover:text-amber-300">
              Back Home
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-900">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-500">Office</div>
                <div className="mt-1 text-xl font-extrabold text-brand-900">Adenta Taxi Rank</div>
              </div>
            </div>

            <div className="space-y-7 text-lg text-slate-700">
              <div>
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">Office</div>
                <p className="mt-2 font-medium">{company.address}</p>
              </div>

              <div>
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">Phone</div>
                <a href={`tel:${company.phoneHref}`} className="mt-2 inline-block font-medium text-brand-700 transition hover:text-brand-900">
                  {company.phone}
                </a>
              </div>

              <div>
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">Email</div>
                <a href={`mailto:${company.email}`} className="mt-2 inline-block font-medium text-brand-700 transition hover:text-brand-900">
                  {company.email}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-6 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Reach Us</div>
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-4xl">
              We are ready to discuss your business needs.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Whether you are looking for consultancy support, logistics coordination, technology solutions,
              construction services, trading partnerships, or real estate opportunities, we welcome the conversation.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {isSubmitted && (
                <div
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                    statusMessage.includes('Thank you') || statusMessage.includes('received')
                      ? 'status-success'
                      : 'status-error'
                  }`}
                >
                  {statusMessage.includes('Thank you') || statusMessage.includes('received') ? <CheckCircle2 className="mt-0.5 h-4 w-4" /> : <AlertCircle className="mt-0.5 h-4 w-4" />}
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-700 md:col-span-1">
                  Full Name
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 ${
                      errors.fullName ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-brand-500'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && <span id="fullName-error" className="mt-2 block text-xs text-red-600">{errors.fullName}</span>}
                </label>

                <label className="block text-sm font-semibold text-slate-700 md:col-span-1">
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 ${
                      errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-brand-500'
                    }`}
                    placeholder="name@email.com"
                  />
                  {errors.email && <span id="email-error" className="mt-2 block text-xs text-red-600">{errors.email}</span>}
                </label>

                <label className="block text-sm font-semibold text-slate-700 md:col-span-1">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 ${
                      errors.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-brand-500'
                    }`}
                    placeholder="024 000 0000"
                  />
                  {errors.phone && <span id="phone-error" className="mt-2 block text-xs text-red-600">{errors.phone}</span>}
                </label>

                <label className="block text-sm font-semibold text-slate-700 md:col-span-1">
                  Company/Organization
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                    className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 ${
                      errors.company ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-brand-500'
                    }`}
                    placeholder="Your company or organization"
                  />
                  {errors.company && <span id="company-error" className="mt-2 block text-xs text-red-600">{errors.company}</span>}
                </label>

                <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
                  Subject
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 ${
                      errors.subject ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-brand-500'
                    }`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && <span id="subject-error" className="mt-2 block text-xs text-red-600">{errors.subject}</span>}
                </label>

                <label className="block text-sm font-semibold text-slate-700 md:col-span-2">
                  Message
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    rows={6}
                    className={`mt-2 w-full rounded-2xl border bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 ${
                      errors.message ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-brand-500'
                    }`}
                    placeholder="Tell us about your project, inquiry, or partnership opportunity..."
                  />
                  {errors.message && <span id="message-error" className="mt-2 block text-xs text-red-600">{errors.message}</span>}
                </label>
              </div>

              <div className="flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">This form is ready to connect to your preferred email service when you are ready.</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-900 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-amber-300 disabled:cursor-not-allowed disabled:bg-brand-500"
                >
                  <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+233598925563" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-900">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a href={`mailto:${company.email}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-6 py-3.5 font-bold text-slate-800 transition hover:border-brand-300 hover:text-brand-700">
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <a href="https://maps.google.com/?q=Adenta+Taxi+Rank+Near+ECG+Substation+Accra+Ghana" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-6 py-3.5 font-bold text-brand-900 transition hover:bg-amber-100">
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
