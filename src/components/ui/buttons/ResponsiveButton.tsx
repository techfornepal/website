import React from 'react';
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
      'rounded-lg border border-[color:var(--hero-button-border)] bg-[color:var(--hero-button-bg)] font-medium text-[color:var(--text-on-primary)] backdrop-blur-sm transition-all duration-300 hover:bg-[color:var(--hero-button-hover-bg)]',
  };

  const classNameValue = cn(
    variantStyles[variant],
    homepageButtonSpacing.heroPadding,
    homepageButtonSpacing.heroTextSize,
    className
  );

  if (href) {
    return (
      <a href={href} className={classNameValue} style={{ fontFamily: 'var(--font-opensans)' }}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNameValue}
      style={{ fontFamily: 'var(--font-opensans)' }}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
