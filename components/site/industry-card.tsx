import type { LucideIcon } from 'lucide-react';

type IndustryCardProps = {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export function IndustryCard({ number, title, description, icon: Icon }: IndustryCardProps) {
  return (
    <article className="premium-card rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="text-sm font-extrabold uppercase tracking-[0.22em] text-amber-500">{number}</div>
        {Icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-brand-700">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
      </div>
      <h3 className="mb-3 text-2xl font-extrabold text-brand-900">{title}</h3>
      <p className="leading-7 text-slate-600">{description}</p>
    </article>
  );
}
