'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Building2, Code2, Coins, Globe2, HardHat, Home, ShoppingCart, Truck, Users, Workflow } from 'lucide-react';

const sectors = [
  { title: 'Financial Consultancy', slug: 'financial-consultancy', description: 'Professional financial advisory and consultancy services to help individuals and organizations make informed decisions and achieve their goals.', image: '/service-finance.jpg', icon: Coins },
  { title: 'Import & Export', slug: 'import-export', description: 'Global sourcing, international trade and efficient supply chain solutions for businesses of all sizes.', image: '/service-import-export.jpg', icon: Globe2 },
  { title: 'Logistics & Supply', slug: 'logistics-supply', description: 'Reliable logistics, procurement and distribution support for individuals, businesses and organizations.', image: '/service-logistics.jpg', icon: Truck },
  { title: 'Software Development', slug: 'software-development', description: 'Modern software solutions, web and mobile applications to help you digitize and grow your business.', image: '/service-software.jpg', icon: Code2 },
  { title: 'Building & Construction', slug: 'building-construction', description: 'Quality building, construction and project management services for commercial, residential and industrial projects.', image: '/service-construction.jpg', icon: HardHat },
  { title: 'Real Estate Development', slug: 'real-estate-development', description: 'Development and management of residential, commercial and mixed-use properties for lasting value.', image: '/project-real-estate.jpg', icon: Home },
  { title: 'General Merchant', slug: 'general-merchant', description: 'Supply and distribution of a wide range of goods and products to meet market demands.', image: '/service-merchant.jpg', icon: ShoppingCart },
  { title: 'Trade & Commerce', slug: 'import-export', description: 'Facilitating trade opportunities and delivering innovative commercial solutions locally and internationally.', image: '/project-trade.jpg', icon: BarChart3 },
];

export function IndustriesPageReference() {
  return (
    <main className="bg-white text-brand-900">
      <section className="relative isolate min-h-[285px] overflow-hidden bg-[#061d3d] text-white md:min-h-[340px]">
        <Image src="/about-building.jpg" alt="First Dest Company Limited building" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061d3d] via-[#061d3d]/85 to-[#061d3d]/20" />
        <div className="mx-auto flex min-h-[285px] max-w-7xl items-center px-6 py-12 md:min-h-[340px] md:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300"><span className="h-0.5 w-10 bg-amber-400" />Our Industries</p>
            <h1 className="text-4xl font-extrabold leading-[1.03] tracking-[-0.05em] md:text-6xl">Diverse Sectors.<br /><span className="text-amber-300">Real Impact.</span></h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-100 md:text-base">We operate across multiple industries, providing innovative solutions to create value, drive growth and build a better tomorrow.</p>
          </div>
          <div className="absolute bottom-10 right-8 hidden max-w-[175px] border-l-2 border-amber-300 pl-4 text-sm italic leading-6 text-white">&quot;Multiple Industries.<br />One Commitment<br />to Excellence.&quot;</div>
        </div>
      </section>

      <div className="border-b border-slate-200 bg-[#f5f8fc]"><div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-3 text-xs text-slate-600 md:px-10"><Link href="/" className="hover:text-brand-700">Home</Link><span className="text-slate-400">&gt;</span><span>Industries</span></div></div>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div><p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-500"><span className="h-0.5 w-10 bg-amber-400" />Industries</p><h2 className="mt-1 text-3xl font-extrabold tracking-[-0.04em] md:text-4xl">Sectors We Serve</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Our diverse portfolio allows us to deliver integrated solutions across key industries. We combine expertise, innovation and commitment to create sustainable value for our clients, partners and communities.</p></div>
          <div className="grid grid-cols-3 gap-3 rounded-md border border-slate-200 bg-[#f4f8fc] p-4"><Highlight icon={Workflow} label="Integrated" detail="Solutions" /><Highlight icon={Users} label="Expert Team" detail="" /><Highlight icon={BarChart3} label="Sustainable" detail="Growth" /></div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sectors.map((sector) => <SectorCard key={sector.title} sector={sector} />)}</div>
      </section>
    </main>
  );
}

function Highlight({ icon: Icon, label, detail }: { icon: typeof Workflow; label: string; detail: string }) { return <div className="text-center"><span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-brand-900"><Icon className="h-5 w-5" /></span><p className="mt-2 text-xs font-extrabold text-brand-900">{label}</p>{detail && <p className="text-xs font-extrabold text-brand-900">{detail}</p>}</div>; }

function SectorCard({ sector }: { sector: (typeof sectors)[number] }) { const Icon = sector.icon; return <Link href={`/services/${sector.slug}`} className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium"><div className="relative h-36 overflow-hidden"><Image src={sector.image} alt={sector.title} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent" /></div><div className="relative px-4 pb-4 pt-7"><span className="absolute -top-6 left-4 flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-white text-amber-600 shadow-sm"><Icon className="h-5 w-5" /></span><h3 className="text-base font-extrabold text-brand-900">{sector.title}</h3><p className="mt-2 min-h-[76px] text-xs leading-5 text-slate-600">{sector.description}</p><span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-brand-900">Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></div></Link>; }
