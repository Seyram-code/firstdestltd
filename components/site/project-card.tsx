type ProjectCardProps = {
  name: string;
  sector: string;
  location: string;
  status: string;
  description: string;
};

export function ProjectCard({ name, sector, location, status, description }: ProjectCardProps) {
  return (
    <article className="premium-card min-w-0 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-3">
        <h3 className="min-w-0 text-2xl font-extrabold text-brand-900">{name}</h3>
        <span className="status-badge rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand-900">
          {status}
        </span>
      </div>
      <div className="space-y-2 text-sm text-slate-600">
        <p className="break-words">
          <span className="font-bold text-slate-800">Sector:</span> {sector}
        </p>
        <p className="break-words">
          <span className="font-bold text-slate-800">Location:</span> {location}
        </p>
      </div>
      <p className="mt-4 break-words leading-7 text-slate-600">{description}</p>
    </article>
  );
}
