import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { navigationSizing } from '@/utils/responsive';

export interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  variant?: 'desktop-dark' | 'mobile-dark';
  onClick?: () => void;
  animationIndex?: number;
  showArrow?: boolean;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  variant = 'desktop-dark',
  onClick,
  animationIndex,
  showArrow = false,
  className,
}) => {
  const isDesktop = variant === 'desktop-dark';
  const isMobile = variant === 'mobile-dark';

  const desktopStyles = cn(
    'font-medium transition-colors duration-300',
    navigationSizing.desktopLinkText,
    navigationSizing.desktopLinkPadding,
    navigationSizing.desktopLinkRadius,
    'focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-white',
    isActive
      ? 'text-[color:var(--text-primary)]'
      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
  );

  const mobileStyles = cn(
    'flex items-center justify-between font-medium',
    navigationSizing.mobileMenuLinkPadding,
    navigationSizing.mobileMenuLinkRadius,
    navigationSizing.mobileMenuLinkText,
    'transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2',
    isActive
      ? 'bg-[color:var(--nav-dark-mobile-active-bg)] font-semibold text-[color:var(--text-primary)] shadow-[0_0_0_1px_var(--nav-dark-mobile-shadow)]'
      : 'text-[color:var(--menu-link)] hover:bg-[color:var(--menu-link-hover-bg)] hover:text-[color:var(--menu-link-hover-text)]'
  );

  const linkStyles = isDesktop ? desktopStyles : mobileStyles;

  const arrowIcon = showArrow && isMobile && (
    <svg
      className={cn(
        'transition-colors',
        navigationSizing.arrowIconSize,
        isActive ? 'text-[color:var(--text-primary)]' : 'text-[color:var(--menu-arrow)]'
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
      style={{ fontFamily: 'var(--font-title)' }}
      aria-current={isActive ? 'page' : undefined}
    >
      <span>{label}</span>
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
