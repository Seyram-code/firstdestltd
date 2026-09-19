import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  Computer,
  Layers3,
  MonitorSmartphone,
  Palette,
  Workflow,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Software Development Services | First Dest Company Limited',
  description:
    'Explore custom web, software, and digital solution services from First Dest Company Limited built to improve business operations and customer experience.',
  alternates: {
    canonical: '/services/software-development',
  },
};

const softwareAreas = [
  {
    title: 'Business Websites',
    icon: MonitorSmartphone,
    description:
      'Professional websites that present your brand clearly, communicate value effectively, and support digital growth.',
  },
  {
    title: 'Web Applications',
    icon: Computer,
    description:
      'Custom web experiences designed to streamline tasks, improve access to data, and support day-to-day operations.',
  },
  {
    title: 'Business Management Systems',
    icon: Workflow,
    description:
      'Digital tools tailored to business workflows, reporting, process visibility, and operational efficiency.',
  },
  {
    title: 'Custom Software',
    icon: Code2,
    description:
      'Bespoke software solutions built around your specific business needs, processes, and growth priorities.',
  },
  {
    title: 'Digital Solutions',
    icon: Layers3,
    description:
      'Technology-driven systems that help businesses modernise operations, improve productivity, and reduce inefficiencies.',
  },
  {
    title: 'UI/UX',
    icon: Palette,
    description:
      'Thoughtful interface and experience design that makes software easier to use, more engaging, and more effective.',
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,157,82,0.28),_transparent_25%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(13,23,43,0.9),_rgba(15,23,42,0.7))]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Software Development</p>
              <h1 className="text-5xl font-extrabold tracking-[-0.06em] md:text-6xl lg:text-7xl">
                Digital solutions that simplify operations and strengthen business performance.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                First Dest Company Limited builds practical software and digital solutions that help businesses modernise processes, improve visibility, and create more engaging customer and internal experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#software-areas" className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-bold text-white transition hover:bg-brand-800">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
                <div className="h-[420px] bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl border border-amber-200/30 bg-brand-950/80 p-4 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Digital Growth</p>
                <p className="mt-2 text-xl font-extrabold text-white">Technology built for business.</p>
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
              Technology services designed to improve customer experiences, process efficiency and long-term business value.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                We create digital products and systems that help businesses operate more efficiently and present themselves more effectively in the market. Our work spans websites, web applications, internal systems, and custom digital tools.
              </p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="leading-8 text-slate-600">
                By combining thoughtful design with practical functionality, we help organisations build digital experiences that are easy to use, aligned with business goals, and capable of supporting sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="software-areas" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-amber-500">Key Offerings</p>
            <h2 className="text-4xl font-extrabold tracking-[-0.05em] text-brand-900 md:text-5xl">
              Business-ready digital solutions tailored to operational and customer needs.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {softwareAreas.map(({ title, icon: Icon, description }) => (
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
              The right digital tools help businesses operate smarter, respond faster, and serve better.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Operational Efficiency</h3>
              </div>
              <p className="leading-8 text-slate-600">
                Software and digital systems reduce manual friction, improve visibility, and help teams focus on higher-value business actions.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                  <Palette className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-brand-900">Better User Experience</h3>
              </div>
              <p className="leading-8 text-slate-600">
                Thoughtful UI/UX makes digital products easier to understand, more engaging to use, and better aligned with real business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">Let’s Build</p>
          <h2 className="text-4xl font-extrabold tracking-[-0.05em] md:text-5xl">
            Need a digital solution that supports your next business move?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            We help organisations turn ideas into practical, functional, and growth-supporting digital products and systems.
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
