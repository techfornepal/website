import React from 'react';
import { cn } from '../../../utils/cn';

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';
type ContainerSpacing = 'tight' | 'normal' | 'loose' | 'none';

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  mobileSize?: ContainerSize;
  tabletSize?: ContainerSize;
  desktopSize?: ContainerSize;
  spacing?: ContainerSpacing;
  className?: string;
  padding?: boolean;
}

const sizeClasses: Record<ContainerSize, string> = {
  xs: 'max-w-xs', // ~320px - Very narrow content
  sm: 'max-w-2xl', // ~672px - For narrow content like forms
  md: 'max-w-4xl', // ~896px - For readable text content
  lg: 'max-w-6xl', // ~1152px - For wider layouts
  xl: 'max-w-7xl', // ~1280px - Industry standard main container width
  '2xl': 'max-w-screen-xl', // ~1280px - Same as xl for consistency
  '3xl': 'max-w-screen-2xl', // ~1536px - Extra wide layouts
  '4xl': 'max-w-screen-2xl', // ~1536px - Maximum wide layouts
  full: 'max-w-none', // No constraint
};

const spacingClasses: Record<ContainerSpacing, string> = {
  tight: 'px-2 sm:px-4',
  normal: 'px-4 sm:px-6 lg:px-8',
  loose: 'px-6 sm:px-8 lg:px-12',
  none: '',
};

/**
 * Enhanced Container component for constraining content width and centering content.
 * Supports breakpoint-specific size overrides for responsive layouts.
 *
 * @param children - Content to be contained
 * @param size - Base maximum width constraint
 * @param mobileSize - Override size for mobile breakpoints (xs-sm)
 * @param tabletSize - Override size for tablet breakpoint (md)
 * @param desktopSize - Override size for desktop breakpoints (lg+)
 * @param spacing - Responsive horizontal padding style
 * @param className - Additional CSS classes
 * @param padding - Legacy: whether to apply horizontal padding (use spacing prop instead)
 *
 * @example
 * ```tsx
 * // Responsive container with different sizes per breakpoint
 * <Container
 *   size="xl"
 *   mobileSize="sm"
 *   tabletSize="lg"
 *   spacing="normal"
 * >
 *   <h1>Responsive Content</h1>
 * </Container>
 *
 * // Simple container with consistent size
 * <Container size="lg" spacing="loose">
 *   <div>Wide spaced content</div>
 * </Container>
 *
 * // Full width container without padding
 * <Container size="full" spacing="none">
 *   <div>Edge-to-edge content</div>
 * </Container>
 * ```
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  mobileSize,
  tabletSize,
  desktopSize,
  spacing = 'normal',
  className,
  padding = true,
}) => {
  const responsiveSizeClasses = [
    sizeClasses[size],
    mobileSize && `max-md:${sizeClasses[mobileSize]}`,
    tabletSize && `md:${sizeClasses[tabletSize]} lg:${sizeClasses[desktopSize || size]}`,
    desktopSize && `lg:${sizeClasses[desktopSize]}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={cn(
        'mx-auto',
        responsiveSizeClasses,
        spacing !== 'none' ? spacingClasses[spacing] : padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};
