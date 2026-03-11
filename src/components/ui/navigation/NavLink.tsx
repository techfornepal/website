import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { navigationSizing } from '@/utils/responsive';

export interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  variant?: 'desktop-light' | 'desktop-dark' | 'mobile-light' | 'mobile-dark';
  onClick?: () => void;
  animationIndex?: number;
  showArrow?: boolean;
  className?: string;
}

/**
 * NavLink - Centralized navigation link component
 *
 * A unified link component that handles both desktop and mobile navigation
 * with proper styling, animations, and accessibility.
 *
 * Features:
 * - Multiple variants for different contexts
 * - Staggered animations for mobile menu
 * - Active state styling
 * - Centralized sizing from responsive utilities
 * - Full accessibility with aria-current
 *
 * @example
 * // Desktop usage
 * <NavLink
 *   href="/about"
 *   label="About"
 *   isActive={pathname === '/about'}
 *   variant="desktop-light"
 * />
 *
 * @example
 * // Mobile usage with animation
 * <NavLink
 *   href="/blog"
 *   label="Blog"
 *   isActive={pathname === '/blog'}
 *   variant="mobile-light"
 *   onClick={closeMobileMenu}
 *   animationIndex={0}
 *   showArrow
 * />
 */
export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  variant = 'desktop-light',
  onClick,
  animationIndex,
  showArrow = false,
  className,
}) => {
  const isDesktop = variant.startsWith('desktop');
  const isMobile = variant.startsWith('mobile');
  const isLightTheme = variant.endsWith('light');

  const desktopStyles = cn(
    'font-medium transition-colors duration-300',
    navigationSizing.desktopLinkText,
    navigationSizing.desktopLinkPadding,
    navigationSizing.desktopLinkRadius,
    'focus-visible:ring-2 focus-visible:outline-none',
    isLightTheme
      ? 'focus-visible:ring-[color:var(--nav-light-ring)] focus-visible:ring-offset-2'
      : 'focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    isActive
      ? isLightTheme
        ? 'text-[color:var(--nav-light-text-strong)]'
        : 'text-[color:var(--primary)]'
      : isLightTheme
        ? 'text-[color:var(--nav-light-text)] hover:text-[color:var(--nav-light-text-strong)]'
        : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
  );

  const mobileStyles = cn(
    'flex items-center justify-between font-medium',
    navigationSizing.mobileMenuLinkPadding,
    navigationSizing.mobileMenuLinkRadius,
    navigationSizing.mobileMenuLinkText,
    'transition-all duration-200 focus:outline-none',
    isLightTheme
      ? 'focus-visible:ring-2 focus-visible:ring-[color:var(--nav-light-ring)] focus-visible:ring-offset-0'
      : 'focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2',
    isActive
      ? isLightTheme
        ? 'bg-[color:var(--nav-light-mobile-active-bg)] font-semibold text-[color:var(--nav-light-text-strong)] shadow-[0_0_0_1px_var(--nav-light-mobile-shadow)]'
        : 'bg-[color:var(--nav-dark-mobile-active-bg)] font-semibold text-[color:var(--primary)] shadow-[0_0_0_1px_var(--nav-dark-mobile-shadow)]'
      : isLightTheme
        ? 'text-[color:var(--nav-light-mobile-text)] hover:bg-[color:var(--nav-light-mobile-hover-bg)] hover:text-[color:var(--nav-light-text-strong)]'
        : 'text-[color:var(--menu-link)] hover:bg-[color:var(--menu-link-hover-bg)] hover:text-[color:var(--menu-link-hover-text)]'
  );

  const linkStyles = isDesktop ? desktopStyles : mobileStyles;

  const arrowIcon = showArrow && isMobile && (
    <svg
      className={cn(
        'transition-colors',
        navigationSizing.arrowIconSize,
        isLightTheme && 'drop-shadow-sm',
        isActive
          ? isLightTheme
            ? 'text-[color:var(--nav-light-text-strong)]'
            : 'text-[color:var(--primary)]'
          : isLightTheme
            ? 'text-[color:var(--nav-light-arrow)]'
            : 'text-[color:var(--menu-arrow)]'
      )}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  const linkContent = (
    <a
      href={href}
      onClick={onClick}
      className={cn(linkStyles, className)}
      style={{ fontFamily: 'var(--font-opensans)' }}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className={cn(isMobile && isLightTheme && 'drop-shadow-sm')}>{label}</span>
      {arrowIcon}
    </a>
  );

  if (isMobile && animationIndex !== undefined) {
    return (
      <motion.li
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -12 }}
        transition={{ duration: 0.25, delay: 0.1 + animationIndex * 0.05, ease: 'easeOut' }}
      >
        {linkContent}
      </motion.li>
    );
  }

  return linkContent;
};
