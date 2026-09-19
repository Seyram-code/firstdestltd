import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | First Dest Company Limited',
  description: 'Cookie policy placeholder for First Dest Company Limited.',
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-300">Legal</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">Cookie Policy</h1>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <p className="leading-8 text-slate-600">
              This page is a placeholder for First Dest Company Limited’s cookie policy. The final wording should be
              reviewed before publication to match the company’s actual website configuration, analytics tools, and
              privacy obligations.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="mb-4 text-2xl font-extrabold text-brand-900">Cookie Use</h2>
            <p className="leading-8 text-slate-600">
              Cookies may be used to improve website functionality, support site analytics, and provide a more
              consistent user experience. This may include session information and basic performance instrumentation.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="mb-4 text-2xl font-extrabold text-brand-900">Consent</h2>
            <p className="leading-8 text-slate-600">
              The website should provide clear consent choices where required by applicable privacy laws and regional
              requirements. Users may be able to manage cookie preferences through browser settings or an explicit site
              preference tool if implemented.
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
