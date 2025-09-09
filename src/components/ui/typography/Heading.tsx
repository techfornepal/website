import React from 'react';
import { cn } from '../../../utils/cn';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';

interface HeadingProps {
  as?: HeadingLevel;
  size?: HeadingSize;
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'muted' | 'primary' | 'white';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

const sizeClasses: Record<HeadingSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm', 
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl lg:text-5xl',
  '5xl': 'text-5xl lg:text-6xl',
  '6xl': 'text-4xl lg:text-6xl'
};

const colorClasses = {
  default: 'text-[color:var(--text-primary)]',
  muted: 'text-[color:var(--text-secondary)]',
  primary: 'text-[color:var(--primary)]',
  white: 'text-[color:var(--nepal-white)]'
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

/**
 * Heading component for displaying semantic heading elements with consistent typography.
 * 
 * @param as - The HTML heading element to render (h1-h6). Defaults to h2
 * @param size - Visual size of the heading, independent of semantic level
 * @param children - The heading content
 * @param className - Additional CSS classes to apply
 * @param color - Color variant for the heading text
 * @param weight - Font weight variant
 * 
 * @example
 * ```tsx
 * <Heading as="h1" size="4xl" color="primary">
 *   Welcome to our site
 * </Heading>
 * 
 * <Heading as="h3" size="lg" weight="medium">
 *   Section title
 * </Heading>
 * ```
 */
export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'xl',
  children,
  className,
  color = 'default',
  weight = 'bold'
}) => {
  return (
    <Component
      className={cn(
        sizeClasses[size],
        colorClasses[color],
        weightClasses[weight],
        className
      )}
    >
      {children}
    </Component>
  );
};
