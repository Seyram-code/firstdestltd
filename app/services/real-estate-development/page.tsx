import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Landmark, MapPinned, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real Estate Development | First Dest Company Limited',
  description:
    'Explore First Dest Company Limited’s real estate development perspective, including property opportunities, strategic growth thinking, and partnership potential.',
  alternates: {
    canonical: '/services/real-estate-development',
  },
};

const realEstateAreas = [
  {
    title: 'Property Development',
    icon: Building2,
    description:
      'Support for property-focused initiatives that consider long-term value, market potential, planning discipline, and practical execution.',
  },
  {
    title: 'Real Estate Opportunities',
    icon: Landmark,
    description:
      'A strategic perspective on opportunities within the property and development space, aligned with careful market evaluation and long-term thinking.',
  },
  {
    title: 'Property Projects',
    icon: MapPinned,
    description:
      'Opportunities and initiatives considered with respect to site relevance, development planning, and sustainable value creation.',
  },
  {
    title: 'Development Partnerships',
    icon: Users,
    description:
      'Collaborative engagement with partners and stakeholders to assess development potential and support practical project progression.',
  },
];

export default function RealEstateDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,157,82,0.28),_transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(13,23,43,0.9),_rgba(15,23,42,0.7))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Real Estate Development</p>
              <h1 className="text-5xl font-extrabold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Strategic property growth built on planning, value and long-term opportunity.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                First Dest Company Limited supports property-related opportunities with a disciplined approach to development thinking, strategic evaluation, and growth-oriented partnership.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#real-estate-areas" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
                  Explore Opportunities
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="h-[420px] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-amber-200/30 bg-brand-950/80 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Property Growth</p>
                <p className="mt-2 text-xl font-extrabold text-white">Value through planning.</p>
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
              Real estate activity is approached with a focus on sustainable value, strategic opportunity and disciplined development thinking.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                Our property development perspective is centred on identifying opportunities with long-term potential, assessing viability thoughtfully, and aligning projects with practical commercial and urban realities.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                Where specific projects are not yet publicly disclosed, we present the opportunity in a general, professional format that remains honest, clear, and future-oriented.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="real-estate-areas" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Key Focus Areas</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Property and development support aligned with strategic growth and partnership potential.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {realEstateAreas.map(({ title, icon: Icon, description }) => (
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
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Projects</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Projects coming soon.
            </h2>
          </div>

          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-10 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Current Status</p>
                <h3 className="mt-1 text-2xl font-extrabold text-brand-900">Property project updates will be announced when available.</h3>
              </div>
            </div>
            <p className="mt-6 max-w-3xl leading-8 text-slate-600">
              At this stage, the company is presenting a professional real estate development profile without inventing project names, locations, or delivery timelines. The focus remains clear positioning, strategic opportunity assessment, and future partnership readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Let’s Discuss Property</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
            Interested in property development or partnership opportunities?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We welcome discussions around strategic property opportunities, development partnership and long-term real estate value creation.
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
