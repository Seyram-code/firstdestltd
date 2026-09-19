import { ArrowRight } from 'lucide-react';

type CTASectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  dark?: boolean;
};

export function CTASection({
  id,
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  dark = false,
}: CTASectionProps) {
  return (
    <section id={id} className={dark ? 'bg-[#061d3d] py-20 text-white' : 'bg-slate-100 py-20 text-slate-900'}>
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className={`mb-4 text-sm font-extrabold uppercase tracking-[0.22em] ${dark ? 'text-amber-300' : 'text-amber-500'}`}>
          {eyebrow}
        </p>
        <h2 className={`text-4xl font-extrabold tracking-[-0.05em] md:text-5xl ${dark ? 'text-white' : 'text-brand-900'}`}>
          {title}
        </h2>
        <p className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${dark ? 'text-slate-200' : 'text-slate-600'}`}>
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={primaryHref}
            className="mobile-cta premium-button inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-brand-900 transition hover:bg-amber-300"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
          {secondaryHref && secondaryLabel && (
            <a
              href={secondaryHref}
              className="mobile-cta-secondary premium-button inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
