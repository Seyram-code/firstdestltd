import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Package,
  Route,
  Truck,
  Warehouse,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Logistics & Supply Services | First Dest Company Limited',
  description:
    'Discover First Dest Company Limited’s logistics and supply support, including procurement, distribution, delivery coordination, and supply chain continuity.',
  alternates: {
    canonical: '/services/logistics-supply',
  },
};

const logisticsAreas = [
  {
    title: 'Procurement',
    icon: ClipboardList,
    description:
      'Support for sourcing materials, goods, and inputs required to meet operational and commercial needs on time.',
  },
  {
    title: 'Supply Coordination',
    icon: Boxes,
    description:
      'Practical coordination across supply channels to maintain continuity and improve the flow of goods to key stakeholders.',
  },
  {
    title: 'Logistics Support',
    icon: Truck,
    description:
      'Assistance with planning and managing movement of goods to keep operations responsive and efficient across delivery points.',
  },
  {
    title: 'Distribution',
    icon: Route,
    description:
      'Structured support for moving goods efficiently from source to destination, with attention to timing and operational flow.',
  },
  {
    title: 'Sourcing',
    icon: Warehouse,
    description:
      'Identification of dependable supply sources and partners to help clients secure needed materials and merchandise.',
  },
  {
    title: 'Delivery Coordination',
    icon: Package,
    description:
      'Support in synchronising schedules, transport arrangements, and communication to keep deliveries aligned with client expectations.',
  },
];

export default function LogisticsSupplyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,157,82,0.3),_transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(13,23,43,0.9),_rgba(15,23,42,0.7))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Logistics & Supply</p>
              <h1 className="text-5xl font-extrabold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Reliable supply flow for businesses that need movement, timing and consistency.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                First Dest Company Limited supports clients with practical procurement, supply coordination, logistics planning and distribution services designed to improve flow and reduce operational friction.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#logistics-areas" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
                  Explore Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="h-[420px] bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-amber-200/30 bg-brand-950/80 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Supply Chain</p>
                <p className="mt-2 text-xl font-extrabold text-white">Moving goods with purpose.</p>
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
              Supply and logistics support that strengthens continuity, delivery confidence and operational execution.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                Our logistics and supply support is built around practical coordination, reliable communication, and efficient movement of goods. We work to help businesses maintain continuity in procurement and delivery while supporting broader commercial objectives.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                Whether the need is sourcing, distribution, delivery planning or supply oversight, our approach aims to simplify the operational process and help clients respond with greater clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="logistics-areas" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Core Support</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Coordinated services that keep goods moving and operations on track.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {logisticsAreas.map(({ title, icon: Icon, description }) => (
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
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Operational Value</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Efficient logistics is about better timing, stronger coordination, and dependable execution.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Supply Reliability</h3>
              </div>
              <p className="leading-8 text-slate-600">
                Strong sourcing and procurement coordination help reduce uncertainty and improve continuity for organisations that depend on timely access to goods and materials.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <Route className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Delivery Discipline</h3>
              </div>
              <p className="leading-8 text-slate-600">
                Delivery coordination ensures schedules, movement of goods, and communication remain aligned with operational priorities and client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Let’s Talk Logistics</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
            Need dependable support for supply and movement of goods?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We help clients streamline procurement, distribution, and delivery planning to support better operational efficiency.
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
