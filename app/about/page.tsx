import type { Metadata } from 'next';
import { AboutPageClient } from '@/components/about-page-client';

export const metadata: Metadata = {
  title: 'About First Dest Company Limited | Business Overview',
  description:
    'Learn about First Dest Company Limited, a business focused on practical service delivery across financial consultancy, trade, logistics, technology, construction, commercial activities, and real estate.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
