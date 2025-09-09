'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { cn } from '@/utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const nav = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < 5) {
        ticking = false;
        return;
      }

      setIsVisible(scrollY > lastScrollY ? false : true);
      setIsScrolled(scrollY > 50);
      setLastScrollY(scrollY > 0 ? scrollY : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  return (
    <nav className={cn(
      "fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      "top-4",
      isVisible ? "translate-y-0" : "-translate-y-full",
      isHomePage 
        ? (isScrolled 
            ? "bg-[color:var(--background)]/95 backdrop-blur-lg" 
            : "bg-transparent"
          )
        : "bg-[color:var(--background)]/95 backdrop-blur-lg"
    )}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center font-semibold text-xl text-[color:var(--text-primary)] transition-all duration-300"
          >
            <span className="font-title font-bold tracking-tight">
              <span className="text-[color:var(--primary)] group-hover:text-[color:var(--secondary)] transition-colors duration-300">Tech For</span>{' '}
              <span className="text-[color:var(--secondary)] group-hover:text-[color:var(--primary)] transition-colors duration-300">Nepal</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-base font-medium transition-colors duration-300",
                  pathname === href 
                    ? "text-[color:var(--secondary)]" 
                    : "text-[color:var(--text-secondary)] hover:text-[color:var(--primary)]"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden p-2 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>
    </nav>
  );
};