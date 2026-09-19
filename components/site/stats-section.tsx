import type { LucideIcon } from 'lucide-react';

type StatItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type StatsSectionProps = {
  stats: StatItem[];
};

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-slate-100 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="premium-card rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-soft">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-brand-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-3xl font-extrabold tracking-[-0.05em] text-brand-900">{value}</div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
