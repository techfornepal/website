'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { cn } from '@/utils/cn';
import { homepageTextSizes } from '@/utils/responsive';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'transition-all duration-300',
        isHomePage
          ? 'absolute right-0 bottom-0 left-0 z-20 border-none bg-transparent'
          : 'border-t border-[color:var(--border-light)] bg-[color:var(--background)]/95 backdrop-blur-sm'
      )}
    >
      <Container>
        <div className={cn(isHomePage ? 'py-6' : 'py-4')}>
          <p
            className={cn(
              'text-center text-[color:var(--text-muted)] transition-colors duration-300',
              homepageTextSizes.footerText
            )}
            style={{ fontFamily: 'var(--font-opensans)' }}
          >
            © {year} Tech For Nepal
          </p>
        </div>
      </Container>
    </footer>
  );
};
