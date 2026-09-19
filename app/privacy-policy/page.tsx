import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | First Dest Company Limited',
  description: 'Privacy policy placeholder for First Dest Company Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-300">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="leading-8 text-slate-600">
              This page is a placeholder for First Dest Company Limited’s privacy policy. Content should be reviewed
              and approved before publication to reflect the company’s actual data handling practices, legal
              obligations, and jurisdictional requirements.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="mb-4 text-2xl font-extrabold text-brand-900">General Notice</h2>
            <p className="leading-8 text-slate-600">
              We may collect personal information when visitors contact us, request services, or engage with website
              forms. This information may be used to respond to enquiries, manage business communication, and support
              operational needs.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="mb-4 text-2xl font-extrabold text-brand-900">Data Use</h2>
            <p className="leading-8 text-slate-600">
              Any personal data collected should be kept secure, used only for legitimate business purposes, and not
              retained longer than necessary unless a legal or contractual requirement applies.
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
