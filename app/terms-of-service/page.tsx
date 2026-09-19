import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | First Dest Company Limited',
  description: 'Terms of service placeholder for First Dest Company Limited.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-300">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">Terms of Service</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="leading-8 text-slate-600">
              This page is a placeholder for First Dest Company Limited’s terms of service. The final legal text should
              be reviewed and approved before being published to ensure it accurately reflects the company’s business
              practices, services, and applicable obligations.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="mb-4 text-2xl font-extrabold text-brand-900">Website Use</h2>
            <p className="leading-8 text-slate-600">
              The website is intended to provide general information about First Dest Company Limited and its business
              interests. Users are expected to use the site responsibly and should not submit unlawful, misleading, or
              abusive content through any form or contact channel.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="mb-4 text-2xl font-extrabold text-brand-900">Service Scope</h2>
            <p className="leading-8 text-slate-600">
              Any discussion or proposal shared through the website does not create an agreement unless confirmed in a
              formal written engagement between the parties.
            </p>
          </div>

          <div className="mt-8">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
