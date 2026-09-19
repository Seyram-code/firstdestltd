import type { Metadata } from 'next';
import { AdminDashboard } from '@/components/admin-dashboard';

export const metadata: Metadata = {
  title: 'Site Admin | First Dest Company Limited',
  description: 'Private administration dashboard for managing the First Dest Company Limited website.',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminDashboard />;
}
