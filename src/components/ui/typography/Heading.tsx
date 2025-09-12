import React from 'react';
import { cn } from '../../../utils/cn';
import { responsiveTextSizes, type ResponsiveTextSize } from '../../../utils/responsive';
import { semanticHeadingSizes } from '../types';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
type HeadingSize = ResponsiveTextSize;

type TextAlign = 'left' | 'center' | 'right';

interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: React.ReactNode;
  className?: string;
  color?:
    | 'default'
    | 'muted'
    | 'primary'
    | 'secondary'
    | 'white'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: TextAlign;
}

const colorClasses = {
  default: 'text-[color:var(--text-primary)]',
  muted: 'text-[color:var(--text-secondary)]',
  primary: 'text-[color:var(--primary)]',
  secondary: 'text-[color:var(--secondary)]',
  white: 'text-[color:var(--nepal-white)]',
  success: 'text-[color:var(--success)]',
  warning: 'text-[color:var(--warning)]',
  error: 'text-[color:var(--error)]',
  info: 'text-[color:var(--info)]',
};

const alignClasses: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const weightClasses = {
  normal: 'font-[var(--font-weight-normal)]',
  medium: 'font-[var(--font-weight-medium)]',
  semibold: 'font-[var(--font-weight-semibold)]',
  bold: 'font-[var(--font-weight-bold)]',
};

/**
 * Enhanced Heading component with responsive typography support.
 * @param as - The HTML heading element to render (h1-h6). Defaults to h2
 * @param size - Visual size using centralized responsive text system (automatically scales across breakpoints)
 * @param children - The heading content
 * @param className - Additional CSS classes to apply
 * @param color - Color variant for the heading text
 * @param weight - Font weight variant
 *
 * @example
 * ```tsx
 * // Hero heading with responsive scaling (4xl -> 5xl -> 6xl -> 7xl -> 8xl across breakpoints)
 * <Heading as="h1" size="4xl" color="primary">
 *   Hero Title
 * </Heading>
 *
 * // Section heading with responsive scaling (xl -> 2xl -> 3xl across breakpoints)
 * <Heading as="h2" size="xl" weight="medium">
 *   Section Title
 * </Heading>
 * ```
 */
export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size,
  children,
  className,
  color = 'default',
  weight = 'bold',
  align = 'left',
}) => {
  const resolvedSize =
    size ||
    (Component in semanticHeadingSizes
      ? semanticHeadingSizes[Component as keyof typeof semanticHeadingSizes]
      : 'xl');

  return (
    <Component
      className={cn(
        responsiveTextSizes[resolvedSize],
        colorClasses[color],
        weightClasses[weight],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
};
