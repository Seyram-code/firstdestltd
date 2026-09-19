'use client';

import { ArrowRight, BarChart3, Building2, Code2, Globe2, Handshake, HardHat, Home, Landmark, Lightbulb, Package, ShoppingCart, Truck, Users, Workflow } from 'lucide-react';
import { company } from '@/src/data/company';
import { CTASection } from './site/cta-section';
import { HeroSection } from './site/hero-section';

const process = [
  ['Step 1', 'Understand', 'We understand your needs and objectives.'],
  ['Step 2', 'Plan', 'We develop an appropriate approach.'],
  ['Step 3', 'Deliver', 'We execute the agreed solution professionally.'],
  ['Step 4', 'Grow', 'We build relationships that create long-term value.'],
];

const homeServices = [
  ['Financial Consultancy', Landmark],
  ['Import & Export', Globe2],
  ['Logistics & Supply', Truck],
  ['Software Development', Code2],
  ['Building & Construction', HardHat],
  ['General Merchant', ShoppingCart],
  ['Real Estate Development', Home],
] as const;

const strengths = [
  ['Diversified Expertise', 'Our operations span multiple sectors, allowing us to support different business needs.', Users],
  ['Professional Approach', 'We handle every engagement with professionalism and attention to detail.', Handshake],
  ['Innovation', 'We embrace technology and modern approaches to solving business challenges.', Lightbulb],
  ['Partnership', 'We seek long-term relationships with clients, suppliers and strategic partners.', BarChart3],
] as const;

export function HomePageSimple() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <HeroSection
        eyebrow={`Welcome to ${company.name}`}
        title={<>Integrated Business<br />Solutions for Growth.<br /><span className="text-amber-300">Across Ghana&apos;s Business Landscape.</span></>}
        description="First Dest Company Limited brings together practical expertise in finance, trade, logistics, technology, construction, commerce, and real estate to support dependable growth and long-term value creation."
        primaryHref="/services"
        primaryLabel="Explore Services"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
        imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
        imageAlt="Professional business team in a corporate meeting"
        overlays={<><Capability icon={Landmark} label="Strategic" title="Advisory" /><Capability icon={Globe2} label="Trade" title="Access" /><Capability icon={Truck} label="Operations" title="Delivery" /><Capability icon={Workflow} label="Technology" title="Innovation" /></>}
      />

      <section className="border-y border-slate-200 bg-[#f5f8fc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 py-6 sm:grid-cols-4 lg:grid-cols-7 md:px-6">
          {homeServices.map(([name, Icon]) => <a key={name} href="/services" className="flex min-h-[94px] items-center justify-center border-slate-200 px-3 text-center transition hover:bg-white sm:border-r last:border-0"><span><Icon className="mx-auto h-8 w-8 text-brand-900" /><span className="mt-3 block text-xs font-extrabold leading-4 text-brand-900">{name}</span></span></a>)}
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[0.85fr_0.85fr_1.3fr] md:px-6">
          <div className="flex flex-col justify-center">
            <p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-500"><span className="h-0.5 w-10 bg-amber-400" />About First Dest</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-900 md:text-4xl">A Diversified Company Built for Opportunity</h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">First Dest Company Limited is a multi-sector company committed to providing reliable, innovative and value-driven solutions. Our diverse operations allow us to support individuals, businesses and organizations across key industries.</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">We combine expertise, operational capability and strategic partnerships to create opportunities and deliver sustainable growth.</p>
            <a href="/about" className="mt-6 inline-flex w-fit items-center gap-2 rounded bg-amber-400 px-5 py-3 text-sm font-extrabold text-brand-900 hover:bg-amber-300">Learn More About Us<ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-md shadow-soft"><img src="/about-building.jpg" alt="First Dest Company Limited building" className="h-full w-full object-cover" /><div className="absolute inset-x-4 bottom-4 rounded bg-brand-900/90 px-5 py-4 text-sm italic leading-6 text-white">&quot;Creating opportunities today for a better tomorrow.&quot;</div></div>
          <div className="rounded-md bg-brand-900 p-6 text-white md:p-8"><p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300"><span className="h-0.5 w-10 bg-amber-300" />Why Work With First Dest?</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em]">Your Trusted Partner Across Sectors</h2><div className="mt-7 grid gap-5 sm:grid-cols-2">{strengths.map(([title, description, Icon]) => <div key={title} className="flex gap-3"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300"><Icon className="h-5 w-5" /></span><div><h3 className="font-extrabold">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-300">{description}</p></div></div>)}</div><p className="mt-7 border-t border-white/10 pt-5 text-sm italic text-slate-300">&quot;Building sustainable businesses and stronger communities.&quot;</p></div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-6">
          <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-soft md:p-8">
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-slate-500"><span className="h-0.5 w-10 bg-amber-400" />Innovation</p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-900">Practical thinking for lasting growth.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">We connect ideas, people, and capabilities across sectors to turn opportunities into dependable results.</p>
            <div className="mt-6 space-y-4 text-base font-medium text-slate-800">{['Practical Execution', 'Cross-Sector Capability', 'Reliable Partnership', 'Growth Focus'].map((item) => <div key={item} className="flex items-center gap-3"><span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-800 text-[10px]">✓</span>{item}</div>)}</div>
            <a href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900">Learn more about us<ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[28px] border border-slate-200 shadow-soft md:min-h-[390px]"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80" alt="Professional business meeting" className="h-full w-full object-cover" /></div>
        </div>
      </section>

      <section className="bg-brand-900 py-14 text-white md:py-20"><div className="mx-auto max-w-7xl px-4 md:px-6"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-amber-300">How We Work</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em]">A simple, effective process.</h2></div><div className="mt-10 grid gap-4 md:grid-cols-4">{process.map(([step, title, description]) => <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300">{step}</p><h3 className="mt-3 text-xl font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-200">{description}</p></div>)}</div></div></section>

      <CTASection id="cta" eyebrow="Contact Us" title="Ready to do business with a company that brings broad capability and practical focus?" description="Whether you are looking for consultancy, trade support, logistics coordination, technology solutions, construction support, or real estate collaboration, we welcome the conversation." primaryHref="/contact" primaryLabel="Request a Consultation" secondaryHref={`mailto:${company.email}`} secondaryLabel="Email Us" dark />

      <section className="bg-white py-14 md:py-20"><div className="mx-auto max-w-7xl px-4 md:px-6"><div className="grid gap-5 md:grid-cols-3"><ContactItem label="Phone" value={company.phone} href={`tel:${company.phoneHref}`} /><ContactItem label="Email" value={company.email} href={`mailto:${company.email}`} /><ContactItem label="Office" value={company.address} /></div></div></section>
    </main>
  );
}

function Capability({ icon: Icon, label, title }: { icon: typeof Landmark; label: string; title: string }) { return <div className="rounded-[20px] border border-white/10 bg-[#0d214a] p-4 text-center"><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">{label}</div><div className="mt-4 flex justify-center text-white"><Icon className="h-10 w-10" /></div><div className="mt-3 text-sm font-bold text-white">{title}</div></div>; }
function ContactItem({ label, value, href }: { label: string; value: string; href?: string }) { const content = <><p className="text-xs font-extrabold uppercase tracking-[0.15em] text-slate-500">{label}</p><p className="mt-2 text-sm font-bold text-brand-900">{value}</p></>; return <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">{href ? <a href={href}>{content}</a> : content}</div>; }
