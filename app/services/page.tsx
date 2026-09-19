import type { Metadata } from 'next';
import { ServicesPageReference } from '@/components/services-page-reference';

export const metadata: Metadata = {
  title: 'Our Business Services | First Dest Company Limited',
  description:
    'Explore the diversified services of First Dest Company Limited in Ghana, including financial consultancy, import and export, logistics and supply, software development, construction, commerce, and real estate.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageReference />;
}
