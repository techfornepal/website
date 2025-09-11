'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '../../../utils/cn';
import { useIsDesktop } from '../../../hooks/useMediaQuery';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ href: string; label: string }>;
  pathname: string;
  isPathActive: (pathname: string, href: string) => boolean;
  isBlogPathActive?: (pathname: string) => boolean;
}

/**
 * Reusable MobileMenu component for responsive navigation
 * Features smooth animations, backdrop overlay, focus management, and accessibility
 * 
 * @param isOpen - Whether the mobile menu is open
 * @param onClose - Callback to close the menu
 * @param navItems - Array of navigation items with href and label
 * @param pathname - Current pathname for active state detection
 * @param isPathActive - Function to determine if a path is active
 * @param isBlogPathActive - Optional function for blog-specific active detection
 */
export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  pathname,
  isPathActive,
  isBlogPathActive
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  
  // this closes the menu when desktop breakpoint is reached
  useEffect(() => {
    if (isDesktop && isOpen) {
      onClose();
    }
  }, [isDesktop, isOpen, onClose]);

  // this focuses the first link when the menu opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a');
      if (firstLink) {
        firstLink.focus();
      }
    }
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLinkClick = () => {
    onClose();
  };

  // preventing render on desktop or when closed
  if (!isOpen) return null;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
          "animate-in fade-in-0 duration-200"
        )}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      
      <div
        ref={menuRef}
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-72 max-w-[80vw]",
          "bg-[color:var(--background)] border-l border-[color:var(--border)]",
          "shadow-lg",
          "animate-in slide-in-from-right-0 duration-300 ease-out"
        )}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex h-16 items-center justify-between border-b border-[color:var(--border)] px-6">
          <h2 className="font-title font-[var(--font-weight-bold)] text-lg text-[color:var(--text-primary)]">
            Menu
          </h2>
          <button
            onClick={onClose}
            className={cn(
              "p-2 rounded-md",
              "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]",
              "hover:bg-[color:var(--accent)] transition-colors duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2"
            )}
            aria-label="Close menu"
            type="button"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close mobile menu</span>
          </button>
        </div>

        <nav className="px-6 py-6" aria-label="Mobile navigation">
          <ul className="space-y-1" role="list">
            {navItems.map(({ href, label }) => {
              const isActive = href === '/blog' && isBlogPathActive
                ? isBlogPathActive(pathname)
                : isPathActive(pathname, href);
              
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleLinkClick}
                    className={cn(
                      "block px-4 py-3 rounded-md text-base font-[var(--font-weight-medium)] transition-colors duration-200",
                      "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2",
                      isActive
                        ? "bg-[color:var(--accent)] text-[color:var(--primary)] font-[var(--font-weight-semibold)]"
                        : "text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color:var(--accent)]"
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-xs text-[color:var(--text-muted)] text-center">
            <span className="font-title">
              <span className="text-[color:var(--primary)]">Tech For</span>{' '}
              <span className="text-[color:var(--secondary)]">Nepal</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};