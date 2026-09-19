import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Building2, FileText, Globe2, HardHat, Package, ShoppingCart, Truck, Users, Workflow } from 'lucide-react';
import { services } from '@/src/data/services';

const imageMap: Record<string, string> = {
  'financial-consultancy': '/service-finance.jpg',
  'import-export': '/service-import-export.jpg',
  'logistics-supply': '/service-logistics.jpg',
  'software-development': '/service-software.jpg',
  'building-construction': '/service-construction.jpg',
  'general-merchant': '/service-merchant.jpg',
  'real-estate-development': '/service-real-estate.jpg',
};

const iconMap: Record<string, typeof BarChart3> = {
  'financial-consultancy': BarChart3,
  'import-export': Globe2,
  'logistics-supply': Truck,
  'software-development': Workflow,
  'building-construction': HardHat,
  'general-merchant': ShoppingCart,
  'real-estate-development': Building2,
};

const process = [
  { icon: Users, number: '1. Understand', text: 'We understand your needs and objectives.', dark: true },
  { icon: FileText, number: '2. Plan', text: 'We develop an appropriate approach.', dark: false },
  { icon: Package, number: '3. Deliver', text: 'We execute the agreed solution professionally.', dark: true },
  { icon: BarChart3, number: '4. Grow', text: 'We build relationships that create long-term value.', dark: false },
];

export function ServicesPageReference() {
  return (
    <main className="bg-white text-brand-900">
      <section className="relative isolate min-h-[285px] overflow-hidden bg-[#061d3d] text-white md:min-h-[340px]">
        <Image src="/service-finance.jpg" alt="Financial consultancy meeting" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061d3d] via-[#061d3d]/85 to-[#061d3d]/25" />
        <div className="mx-auto flex min-h-[285px] max-w-7xl items-center px-6 py-12 md:min-h-[340px] md:px-10">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-4 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300"><span className="h-0.5 w-10 bg-amber-400" />Our Services</p>
            <h1 className="text-4xl font-extrabold leading-[1.03] tracking-[-0.05em] md:text-6xl">Comprehensive Solutions<br /><span className="text-amber-300">for a Better Tomorrow.</span></h1>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-100 md:text-base">We provide integrated solutions across multiple sectors, combining expertise, innovation and a commitment to delivering value for our clients and partners.</p>
          </div>
          <div className="absolute bottom-10 right-8 hidden max-w-[170px] border-l-2 border-amber-300 pl-4 text-sm italic leading-6 text-white md:block">&quot;Diverse Expertise.<br />Real Solutions.&quot;</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <div className="mb-5"><h2 className="text-3xl font-extrabold tracking-[-0.04em] text-brand-900 md:text-4xl">What We Do</h2><p className="mt-1 text-sm text-slate-600">We provide a wide range of professional services across multiple sectors to meet the needs of individuals, businesses and organizations.</p></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(4).map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </section>

      <section className="bg-[#eff6fc] px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.8fr] lg:items-center">
          <div><p className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-accent-500"><span className="h-0.5 w-10 bg-amber-400" />Our Process</p><h2 className="mt-1 text-3xl font-extrabold tracking-[-0.04em] text-brand-900 md:text-4xl">How We Work</h2><p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">We follow a simple and effective process to deliver value to our clients and partners.</p></div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ icon: Icon, number, text, dark }, index) => <div key={number} className="relative text-center"><div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${dark ? 'bg-[#06234a] text-white' : 'bg-amber-500 text-white'}`}><Icon className="h-6 w-6" /></div>{index < process.length - 1 && <span className="absolute right-[-16px] top-6 hidden text-2xl text-brand-900 lg:block">→</span>}<h3 className="mt-3 text-sm font-extrabold text-brand-900">{number}</h3><p className="mx-auto mt-1 max-w-[145px] text-xs leading-5 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>

    </main>
  );
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = iconMap[service.slug] ?? Package;
  return <Link href={`/services/${service.slug}`} className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium"><div className="relative h-32 overflow-hidden"><Image src={imageMap[service.slug]} alt={service.name} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-brand-900/35 to-transparent" /></div><div className="relative px-4 pb-4 pt-7"><div className="absolute -top-7 left-4 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-white text-amber-600 shadow-sm"><Icon className="h-6 w-6" /></div><h3 className="text-base font-extrabold text-brand-900">{service.name}</h3><p className="mt-2 min-h-[50px] text-xs leading-5 text-slate-600">{service.shortDescription}</p><span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-brand-900">Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></div></Link>;
}
