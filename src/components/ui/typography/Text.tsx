import React from 'react';
import { cn } from '../../../utils/cn';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  size?: TextSize;
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'muted' | 'primary' | 'white' | 'error' | 'success';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: TextAlign;
  as?: React.ElementType;
}

const sizeClasses: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
};

const colorClasses = {
  default: 'text-[color:var(--text-primary)]',
  muted: 'text-[color:var(--text-secondary)]',
  primary: 'text-[color:var(--primary)]',
  white: 'text-[color:var(--nepal-white)]',
  error: 'text-[color:var(--nepal-red)]',
  success: 'text-[color:var(--nepal-blue)]'
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold'
};

const alignClasses: Record<TextAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right'
};

/**
 * Text component for consistent body text with various styling options.
 * 
 * @param size - Text size variant
 * @param children - The text content to display
 * @param className - Additional CSS classes
 * @param color - Color variant for the text
 * @param weight - Font weight variant
 * @param align - Text alignment
 * @param as - HTML element to render as (defaults to 'p')
 * 
 * @example
 * ```tsx
 * <Text size="lg" color="muted">
 *   This is a large muted paragraph
 * </Text>
 * 
 * <Text as="span" size="sm" weight="semibold">
 *   Inline bold text
 * </Text>
 * ```
 */
export const Text: React.FC<TextProps> = ({
  size = 'base',
  children,
  className,
  color = 'default',
  weight = 'normal',
  align = 'left',
  as: Component = 'p'
}) => {
  return (
    <Component
      className={cn(
        sizeClasses[size],
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
