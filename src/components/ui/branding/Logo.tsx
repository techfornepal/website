import React from 'react';
import { cn } from '@/utils/cn';
import { navigationSizing, logoColorSchemes, type LogoColorScheme } from '@/utils/responsive';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colorScheme?: LogoColorScheme;
  customColors?: {
    techFor: string;
    nepal: string;
  };
  enableHover?: boolean;
  showDropShadow?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  fontWeight?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
}

/**
 * Logo - Brand logo component with Space Grotesk and wide tracking
 *
 * @example
 * <Logo size="lg" colorScheme="dark-nav" enableHover href="/" />
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'lg',
  colorScheme = 'brand',
  customColors,
  enableHover = true,
  showDropShadow = false,
  href,
  onClick,
  className,
  fontWeight = 'font-semibold',
}) => {
  const colors = customColors || logoColorSchemes[colorScheme];

  const baseClasses = cn(
    'inline-flex items-center transition-colors duration-300',
    navigationSizing.logoSizes[size],
    fontWeight,
    enableHover && 'group',
    className
  );

  const dropShadowClasses = showDropShadow ? 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]' : '';

  const logoContent = (
    <span className={cn('tracking-[0.05em] sm:tracking-[0.12em]', dropShadowClasses)}>
      <span className={cn('transition-colors duration-300', colors.techFor)}>Tech For</span>{' '}
      <span className={cn('transition-colors duration-300', colors.nepal)}>Nepal</span>
    </span>
  );

  const fontStyle = { fontFamily: 'var(--font-title)' };

  if (href) {
    return (
      <a href={href} className={baseClasses} style={fontStyle}>
        {logoContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(baseClasses, 'cursor-pointer')}
        style={fontStyle}
        type="button"
      >
        {logoContent}
      </button>
    );
  }

  return (
    <span className={baseClasses} style={fontStyle}>
      {logoContent}
    </span>
  );
};
