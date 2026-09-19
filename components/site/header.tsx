import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { company } from '@/src/data/company';

type HeaderProps = {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onCloseMobileMenu: () => void;
};

const desktopLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Projects', '/projects'],
  ['Why First Dest', '/about'],
  ['Contact', '/contact'],
];

export function Header({ mobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }: HeaderProps) {
  return (
    <>
      <header className="bg-[#061d3d] text-slate-200">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-3 py-2.5 text-xs sm:gap-4 sm:px-4 sm:py-3 sm:text-sm md:justify-between">
          <div className="flex items-center justify-center gap-2 text-center sm:justify-start">
            <MapPin className="h-4 w-4 shrink-0 text-amber-400" />
            <span className="leading-relaxed">{company.address}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-amber-400" />
              <span>{company.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-amber-400" />
              <span>{company.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">f</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">in</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white">◎</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl shadow-none transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 md:px-6 md:py-3">
          <a href="/" className="flex items-center gap-2 transition-transform duration-300 hover:scale-[1.01]">
            <Image
              src="/site-symbol.png"
              alt="First Dest symbol"
              width={64}
              height={44}
              priority
              className="h-12 w-16 object-contain"
            />
            <span className="leading-none">
              <span className="block text-[24px] font-black uppercase tracking-[-0.055em] text-brand-900">FIRST DEST</span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.23em] text-brand-700">- Company Limited -</span>
              <span className="mt-1 block text-[6px] font-semibold uppercase tracking-[0.14em] text-slate-500">Building opportunities. Delivering solutions.</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 text-base font-semibold text-slate-700 lg:flex">
            {desktopLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition duration-300 hover:-translate-y-0.5 hover:text-brand-500">
                {label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="/contact" className="premium-button inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-900">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            onClick={onToggleMobileMenu}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-brand-900 shadow-sm transition hover:border-brand-300 hover:text-brand-700 lg:hidden"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </>
  );
}
