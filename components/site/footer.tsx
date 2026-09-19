'use client';

import Image from 'next/image';
import { ArrowRight, Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { company } from '@/src/data/company';

const workingHours = 'Monday - Friday, 9:00 AM - 5:00 PM';
const defaultSocial = {
  linkedin: 'https://linkedin.com',
  facebook: 'https://www.facebook.com/share/1FAbPA6J6F/',
  instagram: 'https://instagram.com',
  x: 'https://x.com/FirstDestCoLtd',
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [social, setSocial] = useState(defaultSocial);

  useEffect(() => {
    const storedSettings = window.localStorage.getItem('firstdest-admin-settings');
    if (!storedSettings) return;

    try {
      const parsed = JSON.parse(storedSettings) as { social?: typeof defaultSocial };
      setSocial({ ...defaultSocial, ...parsed.social });
    } catch {
      setSocial(defaultSocial);
    }
  }, []);

  return (
    <footer className="relative isolate overflow-hidden bg-[#021a33] text-slate-200">
      <Image src="/services-cityscape.jpg" alt="City skyline at dusk" fill sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[#021a33]/90" />
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <p className="mb-3 flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300"><span className="h-0.5 w-10 bg-amber-400" />Let&apos;s Work Together</p>
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">Explore Opportunities With <span className="text-amber-300">First Dest</span></h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-100">Whether you need professional consultancy, logistics support, technology solutions, construction services, trading support or real estate opportunities, we are here to help.</p>
          </div>
          <a href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-amber-400 px-8 py-4 text-sm font-extrabold text-brand-900 transition hover:bg-amber-300">Contact Us<ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-9 md:px-10 md:py-10">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.25fr_0.8fr_0.95fr_1.15fr_0.75fr]">
          <div><a href="/" className="inline-flex"><Image src="/footer-logo.png" alt="First Dest Company Limited" width={230} height={149} className="h-28 w-[230px] object-contain object-left" /></a><p className="mt-3 max-w-xs text-xs leading-5 text-slate-300">A diversified company delivering integrated solutions across multiple services for a better tomorrow.</p></div>
          <FooterColumn title="Quick Links"><a href="/">Home</a><a href="/about">About Us</a><a href="/services">Services</a><a href="/industries">Industries</a><a href="/projects">Projects</a><a href="/contact">Contact</a></FooterColumn>
          <FooterColumn title="Our Services">{company.services.map((service) => <a key={service.slug} href={`/services/${service.slug}`}>{service.name}</a>)}</FooterColumn>
          <div><h3 className="mb-4 text-sm font-extrabold text-white">Contact Information</h3><div className="space-y-3 text-xs leading-5 text-slate-300"><a href="https://maps.google.com/?q=Adenta+Taxi+Rank+Near+ECG+Substation+Accra+Ghana" target="_blank" rel="noreferrer" className="flex gap-3 hover:text-amber-300"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" /><span>{company.address}</span></a><a href={`tel:${company.phoneHref}`} className="flex items-center gap-3 hover:text-amber-300"><Phone className="h-4 w-4 shrink-0 text-amber-400" />{company.phone}</a><a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-amber-300"><Mail className="h-4 w-4 shrink-0 text-amber-400" />{company.email}</a><div className="flex gap-3"><Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" /><span>{workingHours}</span></div></div></div>
          <div><h3 className="mb-4 text-sm font-extrabold text-white">Follow Us</h3><div className="flex gap-2"><SocialLink href={social.linkedin || defaultSocial.linkedin} label="LinkedIn"><Linkedin /></SocialLink><SocialLink href={social.facebook || defaultSocial.facebook} label="Facebook"><Facebook /></SocialLink><SocialLink href={social.instagram || defaultSocial.instagram} label="Instagram"><Instagram /></SocialLink><SocialLink href={social.x || defaultSocial.x} label="X"><Twitter /></SocialLink></div></div>
        </div>
        <div className="flex flex-col gap-4 pt-5 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between"><div>© {currentYear} {company.name}. All rights reserved.</div><div className="flex gap-3"><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a><span>|</span><a href="/terms-of-service" className="hover:text-white">Terms of Use</a></div><div className="flex items-center gap-3"><span className="h-0.5 w-10 bg-amber-400" />Building Opportunities. Delivering Solutions.</div></div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return <div><h3 className="mb-4 text-sm font-extrabold text-white">{title}</h3><nav className="flex flex-col gap-2 text-xs leading-4 text-slate-300">{children}</nav></div>;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="flex h-9 w-9 items-center justify-center rounded border border-white/15 text-slate-200 transition hover:border-amber-300 hover:text-amber-300">{children}</a>;
}
