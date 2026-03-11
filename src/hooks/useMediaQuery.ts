import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    // checking if running on client
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);

    // setting initial value
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);

    // cleaning up
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
}

/**
 * Centralized breakpoint constants aligned with Tailwind CSS and common responsive design practices.
 * All components must use these constants instead of hardcoded media queries.
 */
export const BREAKPOINTS = {
  xs: '(max-width: 639px)', // 0-639px (mobile)
  sm: '(min-width: 640px) and (max-width: 767px)', // 640-767px (large mobile)
  md: '(min-width: 768px) and (max-width: 1023px)', // 768-1023px (tablet)
  lg: '(min-width: 1024px) and (max-width: 1279px)', // 1024-1279px (small desktop)
  xl: '(min-width: 1280px) and (max-width: 1535px)', // 1280-1535px (desktop)
  '2xl': '(min-width: 1536px)', // 1536px+ (large desktop)
  mobile: '(max-width: 639px)', // Mobile devices
  tablet: '(min-width: 640px) and (max-width: 1023px)', // Tablet range
  desktop: '(min-width: 1024px)', // Desktop and up
  'mobile-up': '(min-width: 640px)', // Small mobile and up
  'tablet-up': '(min-width: 768px)', // Tablet and up
  'desktop-up': '(min-width: 1024px)', // Desktop and up
  'large-up': '(min-width: 1280px)', // Large desktop and up
  'xlarge-up': '(min-width: 1536px)', // Extra large and up
} as const;

/**
 * Specific breakpoint hooks using centralized BREAKPOINTS constants.
 * Use these hooks instead of hardcoded media queries in components.
 */
export const useIsXS = () => useMediaQuery(BREAKPOINTS.xs);
export const useIsSM = () => useMediaQuery(BREAKPOINTS.sm);
export const useIsMD = () => useMediaQuery(BREAKPOINTS.md);
export const useIsLG = () => useMediaQuery(BREAKPOINTS.lg);
export const useIsXL = () => useMediaQuery(BREAKPOINTS.xl);
export const useIs2XL = () => useMediaQuery(BREAKPOINTS['2xl']);

// Semantic breakpoint hooks (maintained for backward compatibility)
export const useIsMobile = () => useMediaQuery(BREAKPOINTS.mobile);
export const useIsTablet = () => useMediaQuery(BREAKPOINTS.tablet);
export const useIsDesktop = () => useMediaQuery(BREAKPOINTS.desktop);

// Progressive breakpoint hooks (min-width)
export const useIsMobileUp = () => useMediaQuery(BREAKPOINTS['mobile-up']);
export const useIsTabletUp = () => useMediaQuery(BREAKPOINTS['tablet-up']);
export const useIsDesktopUp = () => useMediaQuery(BREAKPOINTS['desktop-up']);
export const useIsLargeUp = () => useMediaQuery(BREAKPOINTS['large-up']);
export const useIsXLargeUp = () => useMediaQuery(BREAKPOINTS['xlarge-up']);

// System preference hooks
export const useIsDarkMode = () => useMediaQuery('(prefers-color-scheme: dark)');
export const useReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');

/**
 * Combined breakpoint hook for component logic\
 * Returns an object with current breakpoint states
 */
export const useBreakpoints = () => {
  const isXS = useIsXS();
  const isSM = useIsSM();
  const isMD = useIsMD();
  const isLG = useIsLG();
  const isXL = useIsXL();
  const is2XL = useIs2XL();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return {
    xs: isXS,
    sm: isSM,
    md: isMD,
    lg: isLG,
    xl: isXL,
    '2xl': is2XL,
    mobile: isMobile,
    tablet: isTablet,
    desktop: isDesktop,
    current: isXS ? 'xs' : isSM ? 'sm' : isMD ? 'md' : isLG ? 'lg' : isXL ? 'xl' : '2xl',
  };
};
