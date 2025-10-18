import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { homepageButtonSpacing } from '@/utils/responsive';

interface ResponsiveButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'hero-primary';
  className?: string;
  onClick?: () => void;
}

/**
 * ResponsiveButton - Centralized button component with responsive sizing
 *
 * Encapsulates the hero button styling with responsive padding and text sizes
 *
 * @example
 * <ResponsiveButton href="/contact" variant="hero-primary">
 *   Share Your Skills
 * </ResponsiveButton>
 */
export const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({
  children,
  href,
  variant = 'hero-primary',
  className,
  onClick,
}) => {
  const variantStyles = {
    'hero-primary':
      'rounded-lg border border-white/30 bg-white/20 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30',
  };

  const button = (
    <button
      className={cn(
        variantStyles[variant],
        homepageButtonSpacing.heroPadding,
        homepageButtonSpacing.heroTextSize,
        className
      )}
      style={{ fontFamily: 'var(--font-opensans)' }}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
};
