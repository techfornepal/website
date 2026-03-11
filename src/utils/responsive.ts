/**
 * Centralized Responsive Utilities
 *
 * This file contains all responsive utilities for consistent responsive behavior
 * across the application. Components must use these utilities instead of
 * hardcoded responsive classes.
 */

/**
 * Responsive text sizing utilities - Mathematical 1.25 (Major Third) ratio scale
 * Uses mobile-first approach with consistent mathematical progression
 * Base: 16px (1rem) -> Each step multiplies by 1.25
 */
export const responsiveTextSizes = {
  xs: 'text-[0.75rem] sm:text-[0.875rem] leading-[var(--line-height-normal)]', // 12px → 14px
  sm: 'text-[0.875rem] sm:text-[1rem] leading-[var(--line-height-normal)]', // 14px → 16px
  base: 'text-[1rem] sm:text-[1.25rem] leading-[var(--line-height-normal)]', // 16px → 20px (base * 1.25)
  lg: 'text-[1.25rem] sm:text-[1.563rem] leading-[var(--line-height-snug)]', // 20px → 25px (base * 1.25²)
  xl: 'text-[1.563rem] sm:text-[1.953rem] leading-[var(--line-height-snug)]', // 25px → 31.25px (base * 1.25³)
  '2xl': 'text-[1.953rem] sm:text-[2.441rem] leading-[var(--line-height-tight)]', // 31.25px → 39px (base * 1.25⁴)
  '3xl': 'text-[2.441rem] sm:text-[3.052rem] leading-[var(--line-height-tight)]', // 39px → 48.8px (base * 1.25⁵)
  '4xl': 'text-[3.052rem] sm:text-[3.815rem] leading-[var(--line-height-tight)]', // 48.8px → 61px (base * 1.25⁶)
  '5xl': 'text-[3.815rem] sm:text-[4.768rem] leading-[var(--line-height-tight)]', // 61px → 76.3px (base * 1.25⁷)
  '6xl': 'text-[4.768rem] sm:text-[5.96rem] leading-[var(--line-height-tight)]', // 76.3px → 95.4px (base * 1.25⁸)
} as const;

/**
 * Responsive spacing utilities - Strict 8pt grid system
 * All values are multiples of 8px (0.5rem) for consistent spacing
 */
export const responsiveSpacing = {
  xs: 'gap-1 sm:gap-2', // 4px → 8px   (0.5 → 1 unit)
  sm: 'gap-2 sm:gap-4', // 8px → 16px  (1 → 2 units)
  md: 'gap-4 sm:gap-6', // 16px → 24px (2 → 3 units)
  lg: 'gap-6 sm:gap-8', // 24px → 32px (3 → 4 units)
  xl: 'gap-8 sm:gap-12', // 32px → 48px (4 → 6 units)
  '2xl': 'gap-12 sm:gap-16', // 48px → 64px (6 → 8 units)
  '3xl': 'gap-16 sm:gap-20', // 64px → 80px (8 → 10 units)
} as const;

/**
 * Responsive padding utilities - Strict 8pt grid system
 * All values are multiples of 8px (0.5rem) for consistent spacing
 */
export const responsivePadding = {
  xs: 'p-1 sm:p-2', // 4px → 8px   (0.5 → 1 unit)
  sm: 'p-2 sm:p-4', // 8px → 16px  (1 → 2 units)
  md: 'p-4 sm:p-6', // 16px → 24px (2 → 3 units)
  lg: 'p-6 sm:p-8', // 24px → 32px (3 → 4 units)
  xl: 'p-8 sm:p-12', // 32px → 48px (4 → 6 units)
  '2xl': 'p-12 sm:p-16', // 48px → 64px (6 → 8 units)
  '3xl': 'p-16 sm:p-20', // 64px → 80px (8 → 10 units)
} as const;

/**
 * Responsive margin utilities - Strict 8pt grid system
 * All values are multiples of 8px (0.5rem) for consistent spacing
 */
export const responsiveMargin = {
  xs: 'm-1 sm:m-2', // 4px → 8px   (0.5 → 1 unit)
  sm: 'm-2 sm:m-4', // 8px → 16px  (1 → 2 units)
  md: 'm-4 sm:m-6', // 16px → 24px (2 → 3 units)
  lg: 'm-6 sm:m-8', // 24px → 32px (3 → 4 units)
  xl: 'm-8 sm:m-12', // 32px → 48px (4 → 6 units)
  '2xl': 'm-12 sm:m-16', // 48px → 64px (6 → 8 units)
  '3xl': 'm-16 sm:m-20', // 64px → 80px (8 → 10 units)
} as const;

/**
 * Responsive container constraints for different content types
 */
export const responsiveContainerSizes = {
  xs: 'max-w-xs sm:max-w-sm',
  sm: 'max-w-sm sm:max-w-md',
  md: 'max-w-md sm:max-w-lg',
  lg: 'max-w-lg sm:max-w-xl',
  xl: 'max-w-xl sm:max-w-2xl',
  '2xl': 'max-w-2xl sm:max-w-4xl',
  '3xl': 'max-w-4xl sm:max-w-6xl',
  '4xl': 'max-w-6xl sm:max-w-7xl', // Industry standard 1280px
  '5xl': 'max-w-7xl sm:max-w-screen-2xl', // Extra wide
  full: 'max-w-full',
} as const;

/**
 * Responsive grid column configurations
 */
export const responsiveGridCols = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  6: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
  auto: 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]',
} as const;

/**
 * Type definitions for responsive utilities
 */
export type ResponsiveTextSize = keyof typeof responsiveTextSizes;
export type ResponsiveSpacingSize = keyof typeof responsiveSpacing;
export type ResponsivePaddingSize = keyof typeof responsivePadding;
export type ResponsiveMarginSize = keyof typeof responsiveMargin;
export type ResponsiveContainerSize = keyof typeof responsiveContainerSizes;
export type ResponsiveGridCols = keyof typeof responsiveGridCols;

/**
 * Breakpoint-specific overrides for components
 */
export interface ResponsiveOverrides {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

/**
 * Helper function to generate responsive classes based on breakpoint overrides
 */
export const generateResponsiveClasses = (
  baseClasses: string,
  overrides?: ResponsiveOverrides
): string => {
  if (!overrides) return baseClasses;

  const responsiveClasses = [baseClasses];

  if (overrides.xs) responsiveClasses.push(`max-[479px]:${overrides.xs}`);
  if (overrides.sm) responsiveClasses.push(`sm:${overrides.sm}`);
  if (overrides.md) responsiveClasses.push(`md:${overrides.md}`);
  if (overrides.lg) responsiveClasses.push(`lg:${overrides.lg}`);
  if (overrides.xl) responsiveClasses.push(`xl:${overrides.xl}`);

  return responsiveClasses.join(' ');
};

/**
 * Component prop interfaces for responsive behavior
 */
export interface ResponsiveComponentProps {
  size?: ResponsiveTextSize | ResponsiveSpacingSize;
  mobileSize?: ResponsiveTextSize | ResponsiveSpacingSize;
  tabletSize?: ResponsiveTextSize | ResponsiveSpacingSize;
  desktopSize?: ResponsiveTextSize | ResponsiveSpacingSize;
}

/**
 * Direction utilities for responsive layouts
 */
export const responsiveDirections = {
  row: 'flex-col sm:flex-row',
  'row-reverse': 'flex-col-reverse sm:flex-row-reverse',
  col: 'flex-row sm:flex-col',
  'col-reverse': 'flex-row-reverse sm:flex-col-reverse',
} as const;

export type ResponsiveDirection = keyof typeof responsiveDirections;

/**
 * Alignment utilities for responsive layouts
 */
export const responsiveAlignments = {
  start: 'items-start justify-start',
  center: 'items-center justify-center',
  end: 'items-end justify-end',
  between: 'items-center justify-between',
  around: 'items-center justify-around',
  evenly: 'items-center justify-evenly',
} as const;

export type ResponsiveAlignment = keyof typeof responsiveAlignments;

/**
 * Homepage-specific responsive text utilities
 */
export const homepageTextSizes = {
  heroTitle: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  heroSubtitle: 'text-base md:text-lg lg:text-xl',
  footerText: 'text-xs sm:text-sm',
} as const;

export const homepageButtonSpacing = {
  heroPadding: 'px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3',
  heroTextSize: 'text-sm sm:text-base',
} as const;

export const homepageLayout = {
  stackHorizontal: 'flex flex-col sm:flex-row',
  heroGap: 'gap-4',
  heroOverlay:
    'bg-[linear-gradient(to_bottom,var(--hero-overlay-start),var(--hero-overlay-middle),var(--hero-overlay-end))]',
} as const;

/**
 * Navigation component sizing utilities
 */
export const navigationSizing = {
  navbarHeight: 'h-16',
  logoSizes: {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  },

  desktopLinkText: 'text-base',
  desktopLinkPadding: 'px-3 py-2',
  desktopLinkSpacing: 'space-x-8',
  desktopLinkRadius: 'rounded-md',
  desktopNavVisibility: 'hidden items-center lg:flex',
  mobileTriggerVisibility: 'relative lg:hidden',

  hamburgerButtonSize: 'h-10 w-10',
  hamburgerIconContainer: 'h-5 w-6',
  hamburgerLineHeight: 'h-[2px]',
  hamburgerButtonRadius: 'rounded-lg',

  mobileMenuMaxWidth: 'max-w-[320px]',
  mobileMenuRadius: 'rounded-2xl',
  mobileMenuPadding: 'p-4',
  mobileMenuHeaderPadding: 'px-5 py-4',
  mobileMenuNavPadding: 'px-4 py-4',
  mobileMenuLinkPadding: 'px-4 py-3',
  mobileMenuLinkRadius: 'rounded-xl',
  mobileMenuLinkText: 'text-[15px]',
  mobileMenuTitleText: 'text-base',
  mobileMenuSpacing: 'space-y-1',

  closeButtonSize: 'h-8 w-8',
  closeIconSize: 'h-5 w-5',
  arrowIconSize: 'h-4 w-4',

  navbarZIndex: 'z-50',
  hamburgerZIndex: 'z-[60]',
  menuBackdropZIndex: 'z-40',
  menuCardZIndex: 'z-50',
} as const;

export const blogCardSizing = {
  metaLayout: 'flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between',
  tagText: 'text-xs sm:text-sm',
} as const;

/**
 * Logo color schemes for different contexts
 */
export const logoColorSchemes = {
  'hero-overlay': {
    techFor:
      'text-[color:var(--logo-hero-tech)] group-hover:text-[color:var(--logo-hero-tech-hover)]',
    nepal:
      'text-[color:var(--logo-hero-nepal)] group-hover:text-[color:var(--logo-hero-nepal-hover)]',
  },
  'light-nav': {
    techFor:
      'text-[color:var(--logo-light-tech)] group-hover:text-[color:var(--logo-light-tech-hover)]',
    nepal:
      'text-[color:var(--logo-light-nepal)] group-hover:text-[color:var(--logo-light-nepal-hover)]',
  },
  'dark-nav': {
    techFor: 'text-[color:var(--secondary)] group-hover:text-[color:var(--logo-dark-tech-hover)]',
    nepal: 'text-[color:var(--primary)] group-hover:text-[color:var(--logo-dark-nepal-hover)]',
  },
  brand: {
    techFor: 'text-[color:var(--secondary)] group-hover:text-[color:var(--secondary-hover)]',
    nepal: 'text-[color:var(--primary)] group-hover:text-[color:var(--primary-hover)]',
  },
  white: {
    techFor:
      'text-[color:var(--text-on-primary)] group-hover:text-[color:var(--nav-light-mobile-text)]',
    nepal:
      'text-[color:var(--text-on-primary)] group-hover:text-[color:var(--nav-light-mobile-text)]',
  },
} as const;

export type LogoColorScheme = keyof typeof logoColorSchemes;
