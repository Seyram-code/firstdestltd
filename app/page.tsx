import type { Metadata } from 'next';
import { HomePageSimple } from '@/components/home-page-simple';

export const metadata: Metadata = {
  title: 'First Dest Company Limited | Business Solutions in Ghana',
  description:
    'First Dest Company Limited supports business needs across financial consultancy, import and export, logistics and supply, software development, construction, general merchant activities, and real estate development.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomePageSimple />;
}
