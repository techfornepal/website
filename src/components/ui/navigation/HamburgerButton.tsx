import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { navigationSizing } from '@/utils/responsive';

export interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  variant?: 'light' | 'dark' | 'hero-overlay';
  className?: string;
  ariaLabel?: string;
}

/**
 * Animated hamburger menu button line properties
 */
const HAMBURGER_LINE_PROPS = {
  className: cn(
    'absolute left-0 top-1/2 block -translate-y-1/2 rounded bg-current',
    navigationSizing.hamburgerLineHeight,
    'w-full'
  ),
};

/**
 * HamburgerButton - Animated hamburger menu button component
 *
 * A centralized, reusable animated hamburger button with different
 * style variants for different contexts (hero overlay, light nav, dark nav).
 *
 * Features:
 * - Smooth animation between hamburger and X states
 * - Multiple style variants for different backgrounds
 * - Centralized sizing from responsive utilities
 * - Fully accessible with ARIA attributes
 *
 * @example
 * <HamburgerButton
 *   isOpen={isMobileMenuOpen}
 *   onClick={toggleMobileMenu}
 *   variant="hero-overlay"
 * />
 */
export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
  variant = 'light',
  className,
  ariaLabel,
}) => {
  const variantStyles = {
    'hero-overlay':
      'text-[color:var(--hamburger-hero-text)] focus-visible:ring-[color:var(--hamburger-hero-ring)] focus-visible:ring-offset-0',
    light:
      'text-[color:var(--text-on-primary)] shadow-[0_6px_18px_var(--hamburger-light-shadow)] hover:bg-[color:var(--hamburger-light-hover-bg)] hover:backdrop-blur-sm focus-visible:ring-[color:var(--hamburger-light-ring)] focus-visible:ring-offset-0',
    dark: 'text-[color:var(--text-secondary)] hover:bg-[color:var(--accent)] hover:text-[color:var(--text-primary)] focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2',
  };

  return (
    <motion.button
      onClick={onClick}
      className={cn(
        'relative flex items-center justify-center transition-colors duration-200 focus:outline-none focus-visible:ring-2',
        navigationSizing.hamburgerButtonSize,
        navigationSizing.hamburgerButtonRadius,
        navigationSizing.hamburgerZIndex,
        variantStyles[variant],
        className
      )}
      aria-label={ariaLabel || (isOpen ? 'Close menu' : 'Open menu')}
      aria-expanded={isOpen}
      aria-controls="mobile-menu-panel"
      type="button"
      whileTap={{ scale: 0.9 }}
      animate={{
        opacity: isOpen ? 0 : 1,
        pointerEvents: isOpen ? 'none' : 'auto',
      }}
    >
      <motion.span
        className={cn('relative block', navigationSizing.hamburgerIconContainer)}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <motion.span
          {...HAMBURGER_LINE_PROPS}
          variants={{
            closed: { y: -6, rotate: 0 },
            open: { y: 0, rotate: 45 },
          }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        />
        <motion.span
          {...HAMBURGER_LINE_PROPS}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        />
        <motion.span
          {...HAMBURGER_LINE_PROPS}
          variants={{
            closed: { y: 6, rotate: 0 },
            open: { y: 0, rotate: -45 },
          }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        />
      </motion.span>
      <span className="sr-only">{isOpen ? 'Close mobile menu' : 'Open mobile menu'}</span>
    </motion.button>
  );
};
