import React from 'react';
import { cn } from '@/utils/cn';
import { Heading } from './Heading';

type GradientHeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  className?: string;
  gradient?: 'primary-secondary' | 'primary-only' | 'secondary-only' | 'diagonal';
};

/**
 * Heading component with Nepal flag-inspired gradient text effect.
 * Extends the base Heading component with gradient styling.
 */
export const GradientHeading: React.FC<GradientHeadingProps> = ({
  children,
  as = 'h1',
  size = '4xl',
  className,
  gradient = 'diagonal',
}) => {
  const gradientClasses = {
    'primary-secondary': 'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)]',
    'primary-only': 'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-hover)]',
    'secondary-only': 'bg-gradient-to-r from-[color:var(--secondary)] to-[color:var(--secondary-hover)]',
    'diagonal': 'bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)]',
  };

  return (
    <Heading
      as={as}
      size={size}
      className={cn(
        'font-title bg-clip-text text-transparent pb-2',
        gradientClasses[gradient],
        className
      )}
    >
      {children}
    </Heading>
  );
};
