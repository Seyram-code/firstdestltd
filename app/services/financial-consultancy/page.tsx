import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Landmark, ShieldCheck, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financial Consultancy in Ghana | First Dest Company Limited',
  description:
    'Explore financial consultancy support from First Dest Company Limited, including planning, advisory, and risk-focused guidance for growing businesses in Ghana.',
  alternates: {
    canonical: '/services/financial-consultancy',
  },
};

const consultationAreas = [
  {
    title: 'Business & Financial Advisory',
    icon: BriefcaseBusiness,
    description:
      'Support for financial planning, business review, and practical decision-making across operational and commercial priorities.',
  },
  {
    title: 'Planning & Strategy',
    icon: TrendingUp,
    description:
      'Structured planning support to help organisations define priorities, align resources, and improve execution.',
  },
  {
    title: 'Risk & Financial Assessment',
    icon: ShieldCheck,
    description:
      'Assessment of financial and operational exposure to help organisations identify key risks and improve resilience.',
  },
];

export default function FinancialConsultancyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,157,82,0.24),_transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Financial Consultancy</p>
            <h1 className="text-5xl font-extrabold tracking-[-0.06em] md:text-7xl">
              Clear financial direction for growth-minded businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              First Dest Company Limited provides professional financial and business advisory support designed to help organisations make informed choices, improve planning, and strengthen long-term performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#consultancy-areas" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
              <Landmark className="h-7 w-7" />
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-amber-500">Overview</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-4xl">
              Practical financial support for organisations seeking better decisions.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Our financial consultancy offering is designed to support individuals and organisations with a structured, practical and forward-looking approach to decision-making. We work with clients to evaluate financial realities, identify opportunities, and strengthen operational and commercial planning.
            </p>
            <p>
              The goal is to create clarity in a changing business environment by aligning financial insight with operational priorities, strategic intent, and long-term value creation.
            </p>
          </div>
        </div>
      </section>

      <section id="consultancy-areas" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Consultancy Areas</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Focused support across key financial and business needs.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {consultationAreas.map(({ title, icon: Icon, description }) => (
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
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Our Approach</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Business and financial advisory built on clarity, accountability and practical execution.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <BriefcaseBusiness className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Business & Financial Advisory</h3>
              </div>
              <p className="leading-8 text-slate-600">
                We support clients with advisory input designed to improve financial understanding, strengthen commercial decision-making, and align business actions with stated objectives. The focus is on realistic, sustainable solutions that can support operational performance and long-term value.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Planning & Strategy</h3>
              </div>
              <p className="leading-8 text-slate-600">
                We assist organisations with structured planning, strategic review, and resource alignment so that priorities are clearer, actions are more measurable, and business initiatives are better positioned for execution.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Risk & Financial Assessment</h3>
              </div>
              <p className="leading-8 text-slate-600">
                Where relevant, we support clients with financial and operational review processes aimed at identifying key exposures, strengthening internal awareness, and improving preparedness in a changing market environment. The emphasis remains on informed, practical and measurable action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Let’s Talk</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
            Need practical financial guidance for your next business decision?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We help businesses and organisations evaluate opportunities, set directions, and move forward with greater clarity.
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
