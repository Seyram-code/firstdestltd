import type { Metadata } from 'next';
import { ContactPageReference } from '@/components/contact-page-reference';

export const metadata: Metadata = {
  title: 'Contact First Dest Company Limited | Ghana',
  description:
    'Contact First Dest Company Limited in Accra, Ghana for business enquiries, consultancy, trade, logistics, technology, construction, and property opportunities.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return <ContactPageReference />;
}
