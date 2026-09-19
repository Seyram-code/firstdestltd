import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
  return (
    <a
      href={href}
      className="premium-card group rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-premium"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-2xl font-extrabold text-brand-900">{title}</h3>
      <p className="leading-7 text-slate-600">{description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </a>
  );
}
