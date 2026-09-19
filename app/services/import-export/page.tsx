import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  FileText,
  Globe2,
  Handshake,
  PackageCheck,
  ShipWheel,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Import & Export Services in Ghana | First Dest Company Limited',
  description:
    'Learn how First Dest Company Limited supports import and export coordination, sourcing, trade documentation, and supplier alignment in Ghana.',
  alternates: {
    canonical: '/services/import-export',
  },
};

const tradeSupport = [
  {
    title: 'Import Support',
    icon: PackageCheck,
    description:
      'Support for sourcing, product selection, and coordination of inbound trade activities aimed at meeting supply needs efficiently.',
  },
  {
    title: 'Export Support',
    icon: ShipWheel,
    description:
      'Structured support for outbound trade activities, market outreach, and coordination across international opportunities.',
  },
  {
    title: 'Sourcing',
    icon: Boxes,
    description:
      'Identification and coordination of reliable supply options to help clients access suitable products and partners.',
  },
  {
    title: 'Trade Coordination',
    icon: Globe2,
    description:
      'Practical coordination between buyers, suppliers, transporters, and stakeholders to keep trade operations moving smoothly.',
  },
  {
    title: 'Supplier Coordination',
    icon: Handshake,
    description:
      'Facilitating communication and alignment with suppliers to improve reliability, responsiveness, and commercial continuity.',
  },
  {
    title: 'Documentation Support',
    icon: FileText,
    description:
      'Assistance with trade documentation and information flow where relevant, helping clients manage paperwork and compliance-related processes more effectively.',
  },
];

export default function ImportExportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,157,82,0.28),_transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(13,23,43,0.92),_rgba(15,23,42,0.72))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Import & Export</p>
              <h1 className="text-5xl font-extrabold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Connecting supply, planning, and trade coordination.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                First Dest Company Limited supports trade-focused businesses with practical import and export coordination, sourcing, supplier engagement, and market opportunity review.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#trade-support" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
                  Explore Trade Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="h-[420px] bg-[url('https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-amber-200/30 bg-brand-950/80 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Trade Support</p>
                <p className="mt-2 text-xl font-extrabold text-white">Practical coordination. Clear trade support.</p>
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
              Practical trade support for businesses seeking smarter movement of goods and clearer market access.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                We support clients with import and export coordination built around reliability, responsiveness and commercial practicality. The objective is to help businesses source products, connect with suitable partners, and navigate trade opportunities with greater clarity.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                From supplier coordination and documentation support to trade planning and market opportunity review, our work is designed to improve operational flow and strengthen the practical value of trade activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trade-support" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">What We Support</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Import and export support designed around practical business needs.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tradeSupport.map(({ title, icon: Icon, description }) => (
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
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Why It Matters</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Trade efficiency depends on clear planning, trusted coordination and dependable access to opportunity.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Market Opportunities</h3>
              </div>
              <p className="leading-8 text-slate-600">
                We help clients identify commercial opportunities, align supply with demand, and support informed decisions around trading relationships and market participation.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Operational Clarity</h3>
              </div>
              <p className="leading-8 text-slate-600">
                Strong coordination reduces uncertainty in sourcing, shipment movement, and stakeholder communication—resulting in smoother trade execution and stronger decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Let’s Talk Trade</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
            Need support for your next import or export opportunity?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We work with clients to align sourcing, coordination, and trade planning around practical business needs and market opportunities.
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
