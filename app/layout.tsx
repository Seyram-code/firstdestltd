import './globals.css';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/site-shell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'First Dest Company Limited | Business Solutions in Ghana',
  description:
    'First Dest Company Limited provides business support across financial consultancy, import and export, logistics and supply, software development, building and construction, general merchant activities, and real estate development.',
  keywords: [
    'First Dest Company Limited',
    'business solutions Ghana',
    'financial consultancy Ghana',
    'import and export Ghana',
    'logistics and supply Ghana',
    'software development Ghana',
    'building and construction Ghana',
    'real estate development Ghana',
    'general merchant Ghana',
    'Ghana business services',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'First Dest Company Limited',
    description:
      'Business support and practical solutions across finance, trade, logistics, technology, construction, and real estate.',
    type: 'website',
    locale: 'en_GH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Dest Company Limited',
    description:
      'Business support services in Ghana across a range of operational and commercial needs.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
