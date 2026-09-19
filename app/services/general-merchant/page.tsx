import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Package,
  ShoppingCart,
  TrendingUp,
  Warehouse,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'General Merchant Services | First Dest Company Limited',
  description:
    'Learn about First Dest Company Limited’s general merchant support, including commercial trading, supply alignment, and market-ready sourcing support.',
  alternates: {
    canonical: '/services/general-merchant',
  },
};

const merchantAreas = [
  {
    title: 'General Trading',
    icon: ShoppingCart,
    description:
      'Commercial trading activities focused on matching available supply with market demand across a range of product categories.',
  },
  {
    title: 'Supply & Distribution',
    icon: Warehouse,
    description:
      'Support for moving goods through the supply chain with a focus on continuity, availability, and commercial responsiveness.',
  },
  {
    title: 'Commercial Sourcing',
    icon: Package,
    description:
      'Practical sourcing support designed to connect buyers and sellers in ways that improve product access and market opportunity.',
  },
  {
    title: 'Business Commerce',
    icon: BriefcaseBusiness,
    description:
      'Trade support and market coordination that help organisations work more effectively across business-to-business relationships.',
  },
];

export default function GeneralMerchantPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,157,82,0.3),_transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(13,23,43,0.9),_rgba(15,23,42,0.72))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">General Merchant</p>
              <h1 className="text-5xl font-extrabold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Commercial trading support that connects supply with opportunity.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                First Dest Company Limited undertakes general trading and merchant activities focused on enabling product movement, commercial exchange, and responsive market participation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#merchant-areas" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
                  Explore Trading
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="h-[420px] bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-amber-200/30 bg-brand-950/80 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Trade Activity</p>
                <p className="mt-2 text-xl font-extrabold text-white">Supply meets demand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Overview</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              General merchant activity supports the movement of goods and the connection between supply, market opportunity and commercial exchange.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                Our merchant operations are grounded in practical business engagement, product availability and responsive trading support. We help connect supply with demand across a diversity of product categories and commercial needs.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                This includes facilitating access to goods, coordinating supply relationships, and supporting commerce in a way that helps businesses remain productive, responsive and commercially aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="merchant-areas" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Merchant Focus</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Commercial trading support built around goods flow, accessibility and market responsiveness.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {merchantAreas.map(({ title, icon: Icon, description }) => (
              <article key={title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-extrabold text-brand-900">{title}</h3>
                <p className="leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Commercial Value</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Effective trading depends on access, timing, coordination and an understanding of market demand.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Market Readiness</h3>
              </div>
              <p className="leading-8 text-slate-600">
                We support commercial responsiveness by aligning product availability and market opportunity in ways that help businesses act with greater confidence.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Reliable Commerce</h3>
              </div>
              <p className="leading-8 text-slate-600">
                A dependable trading model depends on strong coordination, consistent supply visibility and the ability to respond to commercial needs efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Let’s Trade</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
            Looking for practical support in commercial trading and supply coordination?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We help businesses connect supply, demand and commercial opportunity in a structured and responsive way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
              Request a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
