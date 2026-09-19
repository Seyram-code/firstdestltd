import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type HeroSectionProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  imageSrc: string;
  imageAlt: string;
  overlays?: ReactNode;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageSrc,
  imageAlt,
  overlays,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#061d3d] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="premium-fade flex flex-col justify-center py-4 lg:py-8">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-brand-300">{eyebrow}</p>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.96] tracking-[-0.06em] text-white md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={primaryHref} className="mobile-cta premium-button inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-brand-900 shadow-premium transition hover:bg-amber-300">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={secondaryHref} className="mobile-cta-secondary premium-button inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                {secondaryLabel}
              </a>
            </div>
          </div>

          <div className="premium-fade relative pt-2" style={{ animationDelay: '120ms' }}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="premium-card premium-image relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-200 shadow-premium sm:col-span-2">
                <div className="relative h-[220px] w-full md:h-[300px]">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/35 via-slate-900/15 to-slate-900/20" />
                </div>
              </div>
              {overlays}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
