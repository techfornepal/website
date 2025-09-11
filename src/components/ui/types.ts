/**
 * Shared component types and interfaces for standardized API patterns
 * All UI components should extend these base interfaces for consistency
 */

import { type ResponsiveTextSize } from '../../utils/responsive';

/**
 * Standard color variants used across all components
 */
export type ColorVariant = 
  | 'default' 
  | 'muted' 
  | 'primary' 
  | 'secondary' 
  | 'white' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info';

/**
 * Standard font weight variants
 */
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

/**
 * Standard text alignment options
 */
export type TextAlign = 'left' | 'center' | 'right';

/**
 * Standard size variants (using responsive text sizing)
 */
export type SizeVariant = ResponsiveTextSize;

/**
 * Base props that all UI components should support
 */
export interface BaseComponentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Extended props for components that support styling variants
 */
export interface StyledComponentProps extends BaseComponentProps {
  color?: ColorVariant;
  size?: SizeVariant;
}

/**
 * Props for typography components (Text, Heading, etc.)
 */
export interface TypographyComponentProps extends StyledComponentProps {
  weight?: FontWeight;
  align?: TextAlign;
  as?: React.ElementType;
}

/**
 * Props for interactive components (Button, Link, etc.)
 */
export interface InteractiveComponentProps extends BaseComponentProps {
  disabled?: boolean;
  loading?: boolean;
}

/**
 * Standard element type for headings
 */
export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';

/**
 * Semantic heading sizes mapped to visual hierarchy
 */
export const semanticHeadingSizes = {
  h1: '4xl' as const,  // Hero/Page titles
  h2: '2xl' as const,  // Main sections
  h3: 'xl' as const,   // Subsections
  h4: 'lg' as const,   // Minor headings
  h5: 'base' as const, // Small headings
  h6: 'sm' as const    // Caption-style headings
};

/**
 * Standard button variants
 */
export type ButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'ghost' 
  | 'subtle-primary' 
  | 'subtle-secondary' 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info';

/**
 * Standard button sizes
 */
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'subtle';

/**
 * Utility type for responsive overrides
 */
export interface ResponsiveOverrides {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  '2xl'?: string;
}