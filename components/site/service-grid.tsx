import { ServiceCard } from './service-card';
import type { LucideIcon } from 'lucide-react';

type ServiceGridItem = {
  icon: LucideIcon;
  title: string;
  href: string;
  description: string;
};

type ServiceGridProps = {
  items: ServiceGridItem[];
};

export function ServiceGrid({ items }: ServiceGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map(({ icon, title, href, description }) => (
        <ServiceCard key={title} icon={icon} title={title} href={href} description={description} />
      ))}
    </div>
  );
}
