'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AlertCircle, ArrowRight, CheckCircle2, Clock3, Mail, MapPin, Navigation, Phone, Send } from 'lucide-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { company } from '@/src/data/company';

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const emptyForm: ContactFormData = { fullName: '', email: '', phone: '', company: '', subject: '', message: '' };
const workingHours = 'Monday - Friday, 9:00 AM - 5:00 PM';

export function ContactPageReference() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setStatus('idle');
    setStatusMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? 'Unable to send your message right now.');
      setFormData(emptyForm);
      setStatus('success');
      setStatusMessage(result.message ?? 'Thank you for reaching out. Your message has been received.');
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Your message could not be sent right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#f5f8fc] text-brand-900">
      <section className="relative isolate min-h-[285px] overflow-hidden bg-[#061d3d] text-white md:min-h-[340px]">
        <Image src="/about-reception.png" alt="First Dest office reception" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061d3d] via-[#061d3d]/85 to-[#061d3d]/20" />
        <div className="mx-auto flex min-h-[285px] max-w-7xl items-center px-6 py-12 md:min-h-[340px] md:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300"><span className="h-0.5 w-10 bg-amber-400" />Contact Us</p>
            <h1 className="text-4xl font-extrabold leading-[1.03] tracking-[-0.05em] md:text-6xl">Let&apos;s Build Something<br />Valuable <span className="text-amber-300">Together.</span></h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-100 md:text-base">We are ready to discuss your needs and explore how we can support your goals across our diverse business sectors.</p>
          </div>
          <div className="absolute bottom-10 right-8 hidden max-w-[170px] border-l-2 border-amber-300 pl-4 text-sm italic leading-6 text-white md:block">&quot;Your Goals.<br />Our Commitment.&quot;</div>
        </div>
      </section>

      <div className="border-b border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 text-xs text-slate-600 md:px-10"><Link href="/" className="hover:text-brand-700">Home</Link><span className="text-slate-400">&gt;</span><span>Contact Us</span></div></div>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard icon={MapPin} title="Our Office"><p>Adenta Taxi Rank, Near ECG<br />Substation, Accra, Ghana</p></ContactCard>
          <ContactCard icon={Phone} title="Call Us"><a href={`tel:${company.phoneHref}`}>{company.phone}</a></ContactCard>
          <ContactCard icon={Mail} title="Email Us"><a href={`mailto:${company.email}`}>{company.email}</a></ContactCard>
          <ContactCard icon={Clock3} title="Working Hours"><p>Monday - Friday<br />9:00 AM - 5:00 PM</p></ContactCard>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.25fr]">
          <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-500"><span className="h-0.5 w-10 bg-amber-400" />Send Us a Message</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-brand-900">Get In Touch</h2>
            <p className="mt-1 text-sm text-slate-600">Fill out the form below and our team will get back to you as soon as possible.</p>
            {status !== 'idle' && <div aria-live="polite" className={`mt-4 flex gap-2 rounded-md border px-3 py-2 text-xs ${status === 'success' ? 'status-success' : 'status-error'}`}>{status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}<span>{statusMessage}</span></div>}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" />
                <Field label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email address" />
                <Field label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="Enter your phone number" />
                <Field label="Company / Organization" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" />
              </div>
              <label className="block text-xs font-bold text-brand-900">Subject *<select name="subject" value={formData.subject} onChange={handleChange} required className="mt-2 h-10 w-full rounded border border-slate-200 bg-white px-3 text-sm font-normal text-slate-700 outline-none focus:border-brand-700"><option value="">Select a subject</option><option value="General enquiry">General enquiry</option><option value="Services">Services</option><option value="Partnership">Partnership</option><option value="Project opportunity">Project opportunity</option></select></label>
              <label className="block text-xs font-bold text-brand-900">Message *<textarea name="message" value={formData.message} onChange={handleChange} required minLength={20} rows={5} placeholder="Write your message here..." className="mt-2 w-full rounded border border-slate-200 bg-white px-3 py-3 text-sm font-normal text-slate-700 outline-none placeholder:text-slate-400 focus:border-brand-700" /></label>
              <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded bg-amber-400 px-6 py-3 text-sm font-extrabold text-brand-900 hover:bg-amber-300 disabled:opacity-60"><Send className="h-4 w-4" />{isSubmitting ? 'Sending...' : 'Send Message'}<ArrowRight className="h-4 w-4" /></button>
            </form>
          </section>

          <section className="space-y-5">
            <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-500"><span className="h-0.5 w-10 bg-amber-400" />Our Location</p>
              <h2 className="mt-2 text-xl font-extrabold text-brand-900">Visit our office</h2>
              <p className="mt-1 text-sm text-slate-600">Adenta Taxi Rank, Near ECG Substation in Accra, Ghana.</p>
              <div className="mt-4 h-[260px] overflow-hidden rounded border border-slate-200 bg-slate-100"><iframe title="Map showing First Dest office location" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.180%2C5.680%2C-0.140%2C5.730&layer=mapnik&marker=5.705%2C-0.160" className="h-full w-full border-0" loading="lazy" /></div>
              <a href="https://maps.google.com/?q=Adenta+Taxi+Rank+Near+ECG+Substation+Accra+Ghana" target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 rounded bg-brand-900 px-4 py-2 text-xs font-bold text-white hover:bg-brand-700"><Navigation className="h-4 w-4" />Get Directions</a>
            </div>
            <div className="grid gap-5 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[190px] overflow-hidden rounded-md"><Image src="/about-reception.png" alt="First Dest office reception" fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" /></div>
              <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm"><p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-500"><span className="h-0.5 w-10 bg-amber-400" />Our Office</p><p className="mt-3 text-sm leading-5 text-slate-700">Adenta Taxi Rank,<br />Near ECG Substation<br />Accra, Ghana.</p><div className="mt-4 space-y-2 text-xs text-slate-700"><a className="flex items-center gap-2" href={`tel:${company.phoneHref}`}><Phone className="h-4 w-4 text-brand-900" />{company.phone}</a><a className="flex items-center gap-2" href={`mailto:${company.email}`}><Mail className="h-4 w-4 text-brand-900" />{company.email}</a><span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-brand-900" />{workingHours}</span></div></div>
            </div>
          </section>
        </div>
      </section>

    </main>
  );
}

function ContactCard({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return <div className="flex min-h-[104px] items-center gap-4 rounded-md border border-slate-200 bg-white px-5 py-4 shadow-sm"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-brand-900"><Icon className="h-6 w-6" /></div><div className="min-w-0"><h3 className="text-sm font-extrabold text-brand-900">{title}</h3><div className="mt-2 text-sm leading-5 text-slate-700">{children}</div></div></div>;
}

function Field({ label, name, value, onChange, required = false, type = 'text', placeholder }: { label: string; name: keyof ContactFormData; value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; required?: boolean; type?: string; placeholder: string }) {
  return <label className="block text-xs font-bold text-brand-900">{label}{required && ' *'}<input name={name} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} className="mt-2 h-10 w-full rounded border border-slate-200 bg-white px-3 text-sm font-normal text-slate-700 outline-none placeholder:text-slate-400 focus:border-brand-700" /></label>;
}
