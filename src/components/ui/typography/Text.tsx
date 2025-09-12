import React from 'react';
import { cn } from '../../../utils/cn';
import { responsiveTextSizes } from '../../../utils/responsive';
import { type TypographyComponentProps, type ColorVariant } from '../types';

type TextProps = TypographyComponentProps;

const colorClasses: Record<ColorVariant, string> = {
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

const weightClasses = {
  normal: 'font-[var(--font-weight-normal)]',
  medium: 'font-[var(--font-weight-medium)]',
  semibold: 'font-[var(--font-weight-semibold)]',
  bold: 'font-[var(--font-weight-bold)]',
};

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/**
 * Enhanced Text component with responsive typography support.
 * @param size - Text size using centralized responsive text system (automatically scales across breakpoints)
 * @param children - The text content to display
 * @param className - Additional CSS classes
 * @param color - Color variant for the text
 * @param weight - Font weight variant
 * @param align - Text alignment
 * @param as - HTML element to render as (defaults to 'p')
 *
 * @example
 * ```tsx
 * // Responsive large text (lg -> xl -> 2xl across breakpoints)
 * <Text size="lg" color="muted">
 *   This is a responsive large paragraph
 * </Text>
 *
 * // Responsive inline text (sm -> base across breakpoints)
 * <Text as="span" size="sm" weight="semibold">
 *   Responsive inline text
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
  as: Component = 'p',
}) => {
  return (
    <Component
      className={cn(
        responsiveTextSizes[size],
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
