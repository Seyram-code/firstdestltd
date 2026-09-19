import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | First Dest Company Limited',
  description: 'The page you are looking for could not be found on the First Dest Company Limited website.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16 text-slate-900">
      <div className="mx-auto max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 text-center shadow-soft">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-amber-500">404</p>
        <h1 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page you are looking for may have moved, been removed, or may not exist.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-900">
            Return home
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 font-bold text-brand-900 transition hover:bg-slate-100">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
