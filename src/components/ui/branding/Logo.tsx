import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { navigationSizing, logoColorSchemes, type LogoColorScheme } from '@/utils/responsive';

export interface LogoProps {
  /**
   * Size variant for the logo
   * @default 'lg'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  colorScheme?: LogoColorScheme;
  customColors?: {
    techFor: string;
    nepal: string;
  };
  enableHover?: boolean;
  showDropShadow?: boolean;
  animated?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  /**
   * Font weight
   * @default 'font-semibold'
   */
  fontWeight?: 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold';
}

/**
 * Logo - Flexible brand logo component
 *
 * A highly reusable logo component that can be used in various contexts:
 * navbar, footer, hero sections, etc. Supports multiple color schemes,
 * sizes, and customization options.
 *
 * @example
 * // Navbar usage with dynamic colors
 * <Logo
 *   size="lg"
 *   colorScheme={isHeroOverlay ? 'hero-overlay' : 'light-nav'}
 *   enableHover
 *   showDropShadow
 *   href="/"
 * />
 *
 * @example
 * // Footer usage
 * <Logo size="sm" colorScheme="white" enableHover={false} />
 *
 * @example
 * // Custom colors
 * <Logo
 *   customColors={{ techFor: 'text-purple-500', nepal: 'text-green-500' }}
 * />
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'lg',
  colorScheme = 'brand',
  customColors,
  enableHover = true,
  showDropShadow = false,
  animated = false,
  href,
  onClick,
  className,
  fontWeight = 'font-semibold',
}) => {
  const colors = customColors || logoColorSchemes[colorScheme];

  const baseClasses = cn(
    'inline-flex items-center transition-all duration-300',
    navigationSizing.logoSizes[size],
    fontWeight,
    enableHover && 'group',
    className
  );

  const dropShadowClasses = showDropShadow ? 'drop-shadow-[0_2px_6px_rgba(15,23,42,0.35)]' : '';

  const hoverDropShadowClasses =
    showDropShadow && enableHover ? 'group-hover:drop-shadow-[0_2px_8px_rgba(15,23,42,0.35)]' : '';

  const logoContent = (
    <span
      className={cn('tracking-tight', dropShadowClasses)}
      style={showDropShadow ? { filter: 'drop-shadow(0 2px 4px rgba(15, 23, 42, 0.25))' } : {}}
    >
      <span className={cn('transition-all duration-300', hoverDropShadowClasses, colors.techFor)}>
        Tech For
      </span>{' '}
      <span className={cn('transition-all duration-300', hoverDropShadowClasses, colors.nepal)}>
        Nepal
      </span>
    </span>
  );

  const content = animated ? (
    <motion.span
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {logoContent}
    </motion.span>
  ) : (
    logoContent
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} style={{ fontFamily: 'var(--font-title)' }}>
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(baseClasses, 'cursor-pointer')}
        style={{ fontFamily: 'var(--font-title)' }}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <span className={baseClasses} style={{ fontFamily: 'var(--font-title)' }}>
      {content}
    </span>
  );
};
