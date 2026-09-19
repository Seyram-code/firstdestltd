'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Diamond, Eye, Lightbulb, MapPin, Target, Users } from 'lucide-react';
import { company } from '@/src/data/company';

const valueIcons = [CheckCircle2, Users, Lightbulb, Target, Building2, Diamond];

const highlights = [
  { icon: Building2, value: '7+', label: 'Business Sectors' },
  { icon: Users, value: 'Client-Focused', label: 'Approach' },
  { icon: Target, value: 'Integrated', label: 'Business Solutions' },
  { icon: MapPin, value: 'Ghana-Based', label: 'Operations' },
  { icon: Building2, value: 'Committed to', label: 'Sustainable Growth' },
];

export function AboutPageClient() {
  return (
    <main className="bg-[#f5f8fc] text-brand-900">
      <section className="relative isolate min-h-[290px] overflow-hidden bg-[#061d3d] text-white md:min-h-[340px]">
        <Image src="/about-building.jpg" alt="First Dest Company Limited building" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061d3d] via-[#061d3d]/90 to-[#061d3d]/20" />
        <div className="mx-auto flex min-h-[290px] max-w-7xl items-center px-6 py-12 md:min-h-[340px] md:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">
              <span className="h-0.5 w-10 bg-amber-400" />
              About Us
            </p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.03] tracking-[-0.05em] md:text-6xl">
              A Diversified Company
              <br />
              Built for <span className="text-amber-300">Opportunity</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-100 md:text-base">
              First Dest Company Limited is a multi-sector company committed to delivering reliable, innovative and value-driven solutions across key industries.
            </p>
          </div>
          <div className="absolute bottom-8 right-8 hidden max-w-[190px] border-l-2 border-amber-300 pl-4 text-sm italic leading-6 text-white md:block">
            &quot;Multiple Sectors. Greater Possibilities.&quot;
          </div>
        </div>
      </section>

      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 text-xs text-slate-600 md:px-10">
          <Link href="/" className="hover:text-brand-700">Home</Link>
          <span className="text-slate-400">&gt;</span>
          <span>About Us</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.55fr_1.05fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <p className="mb-4 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-accent-500">
              <span className="h-0.5 w-10 bg-amber-400" />
              Who We Are
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-900 md:text-4xl">
              First Dest Company Limited
            </h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <p>First Dest Company Limited is a diversified company based in Accra, Ghana, with operations across financial consultancy, import and export, logistics, software development, building and construction, general merchant services, and real estate development.</p>
              <p>We are committed to providing reliable, innovative and efficient solutions that create value for our clients, partners and communities.</p>
              <p>Our approach is built on professionalism, integrity and a long-term vision for sustainable growth across multiple sectors.</p>
            </div>
            <Link href="/services" className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-xs font-extrabold text-brand-900 transition hover:bg-amber-300">
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-md shadow-soft lg:min-h-0">
            <Image src="/about-reception.png" alt="First Dest reception" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
          </div>

          <div className="relative overflow-hidden rounded-md bg-[#07366a] p-6 text-white shadow-soft">
            <Image src="/about-building.jpg" alt="First Dest building detail" fill sizes="(max-width: 1024px) 100vw, 28vw" className="object-cover opacity-20" />
            <div className="relative space-y-5">
              {highlights.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <Icon className="h-6 w-6 shrink-0 text-amber-300" />
                  <div>
                    <div className="text-sm font-bold">{value}</div>
                    <div className="text-xs text-slate-200">{label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-8 border-l-2 border-amber-300 pl-3 text-right text-sm italic text-white">
              &quot;Building a Better Tomorrow.&quot;
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr_1.3fr]">
          <InfoCard icon={Target} title="Our Mission">
            To deliver reliable, innovative and value-driven solutions across the sectors in which we operate while building lasting relationships with our clients and partners.
          </InfoCard>
          <InfoCard icon={Eye} title="Our Vision">
            To grow into a trusted and diversified business group delivering sustainable solutions and creating opportunities across Ghana and beyond.
          </InfoCard>
          <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Diamond className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-extrabold text-brand-900">Our Values</h3>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
                  {company.values.map(({ title }, index) => {
                    const Icon = valueIcons[index];
                    return (
                      <div key={title} className="text-center text-[10px] font-medium text-slate-600">
                        <Icon className="mx-auto mb-2 h-5 w-5 text-amber-500" />
                        {title}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: typeof Target; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-brand-900">{title}</h3>
          <p className="mt-2 text-xs leading-5 text-slate-600">{children}</p>
        </div>
      </div>
    </div>
  );
}
