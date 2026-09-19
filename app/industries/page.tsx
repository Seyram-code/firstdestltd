import type { Metadata } from 'next';
import { IndustriesPageReference } from '@/components/industries-page-reference';

export const metadata: Metadata = {
  title: 'Industries | First Dest Company Limited',
  description: 'Explore the industries and business areas supported by First Dest Company Limited in Ghana.',
};

export default function IndustriesPage() {
  return <IndustriesPageReference />;
}
