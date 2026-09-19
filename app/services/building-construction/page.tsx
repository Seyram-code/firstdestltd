import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  HardHat,
  Landmark,
  Ruler,
  Wrench,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Building & Construction Support in Ghana | First Dest',
  description:
    'See how First Dest Company Limited supports building, construction, and infrastructure-related initiatives with practical project coordination and execution.',
  alternates: {
    canonical: '/services/building-construction',
  },
};

const constructionAreas = [
  {
    title: 'Building',
    icon: Building2,
    description:
      'Support for residential, commercial, and institutional building projects with attention to execution quality and project discipline.',
  },
  {
    title: 'Construction',
    icon: HardHat,
    description:
      'Construction-related support designed to help projects progress with structure, coordination, and practical oversight.',
  },
  {
    title: 'Project Support',
    icon: Wrench,
    description:
      'Guidance and coordination across project activity to improve planning, workflow, and delivery consistency.',
  },
  {
    title: 'Property Development Support',
    icon: Landmark,
    description:
      'Practical inputs for property-related initiatives, helping align development priorities with market and operational considerations.',
  },
  {
    title: 'Infrastructure-Related Services',
    icon: Ruler,
    description:
      'Support where project demands extend beyond standard construction activities into broader infrastructure and site-related coordination.',
  },
];

export default function BuildingConstructionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,157,82,0.28),_transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(13,23,43,0.9),_rgba(15,23,42,0.7))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Building & Construction</p>
              <h1 className="text-5xl font-extrabold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Durable project execution rooted in quality, planning and disciplined delivery.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                First Dest Company Limited provides support across building, construction and infrastructure-focused initiatives with emphasis on project discipline, practical coordination and long-term value.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#construction-areas" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="h-[420px] bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-amber-200/30 bg-brand-950/80 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Project Delivery</p>
                <p className="mt-2 text-xl font-extrabold text-white">Built for progress.</p>
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
              Construction support that balances quality, efficiency, and practical project execution.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                Our construction involvement is grounded in disciplined execution, reliable planning, and attention to the realities of site work, project management and build quality. We support activities that require structure, coordination and practical problem-solving.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                From buildings and property initiatives to broader infrastructure-oriented work, we aim to support initiatives that contribute to long-term value, functional performance and professional delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="construction-areas" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Core Service Areas</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Building and construction support for structured, quality-led project outcomes.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {constructionAreas.map(({ title, icon: Icon, description }) => (
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
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Project Focus</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              The value of construction work is shaped by coordination, quality and long-term usefulness.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Quality Execution</h3>
              </div>
              <p className="leading-8 text-slate-600">
                We place emphasis on sound execution standards, practical coordination, and careful attention to the details that shape durable outcomes.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <Landmark className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Property & Infrastructure Value</h3>
              </div>
              <p className="leading-8 text-slate-600">
                Construction and development-related initiatives can contribute to lasting value when they are planned with purpose and delivered with discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Let’s Build</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
            Need support for your next building or construction project?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We support businesses and organisations with practical project-oriented construction guidance and execution-minded coordination.
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
