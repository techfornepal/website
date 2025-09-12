'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { MobileMenu } from '../navigation/MobileMenu';
import { useNavigation } from '../../../hooks/useNavigation';
import { useIsDesktop } from '../../../hooks/useMediaQuery';
import { cn } from '@/utils/cn';
import { isPathActive, isBlogPathActive } from '@/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isDesktop = useIsDesktop();

  const { isScrolled, isVisible, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavigation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed right-0 left-0 z-50 transition-all duration-300 ease-in-out',
          'top-4',
          isVisible ? 'translate-y-0' : '-translate-y-full',
          isHomePage
            ? isScrolled
              ? 'bg-[color:var(--background)]/95 backdrop-blur-lg'
              : 'bg-transparent'
            : 'bg-[color:var(--background)]/95 backdrop-blur-lg'
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="group flex items-center text-xl font-[var(--font-weight-semibold)] text-[color:var(--text-primary)] transition-all duration-300"
            >
              <span className="font-title font-[var(--font-weight-bold)] tracking-tight">
                <span className="text-[color:var(--primary)] transition-colors duration-300 group-hover:text-[color:var(--secondary)]">
                  Tech For
                </span>{' '}
                <span className="text-[color:var(--secondary)] transition-colors duration-300 group-hover:text-[color:var(--primary)]">
                  Nepal
                </span>
              </span>
            </Link>

            {isDesktop && (
              <nav className="flex items-center space-x-8" aria-label="Main navigation">
                {navItems.map(({ href, label }) => {
                  const isActive =
                    href === '/blog' ? isBlogPathActive(pathname) : isPathActive(pathname, href);

                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        'text-base font-[var(--font-weight-medium)] transition-colors duration-300',
                        'rounded-md px-2 py-1 focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:outline-none',
                        isActive
                          ? 'text-[color:var(--secondary)]'
                          : 'text-[color:var(--text-secondary)] hover:text-[color:var(--primary)]'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>
            )}

            {!isDesktop && (
              <button
                onClick={toggleMobileMenu}
                className={cn(
                  'rounded-md p-2',
                  'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
                  'transition-colors duration-200 hover:bg-[color:var(--accent)]',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2'
                )}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                type="button"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                </span>
              </button>
            )}
          </div>
        </Container>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        pathname={pathname}
        isPathActive={isPathActive}
        isBlogPathActive={isBlogPathActive}
      />
    </>
  );
};
