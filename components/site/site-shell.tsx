'use client';

import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { Header } from './header';
import { MobileMenu } from './mobile-menu';
import { Footer } from './footer';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      {children}
      {pathname !== '/admin' && <Footer />}
    </>
  );
}
