import React from 'react';
import { cn } from '../../../utils/cn';

type StackDirection = 'vertical' | 'horizontal';
type StackSpacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
type StackAlign = 'start' | 'center' | 'end' | 'stretch';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

interface StackProps {
  children: React.ReactNode;
  direction?: StackDirection;
  spacing?: StackSpacing;
  align?: StackAlign;
  justify?: StackJustify;
  className?: string;
  wrap?: boolean;
}

const spacingClasses = {
  vertical: {
    xs: 'space-y-1',
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
    xl: 'space-y-4 md:space-y-8',
    '2xl': 'space-y-6 md:space-y-12',
    '3xl': 'space-y-8 md:space-y-16',
  },
  horizontal: {
    xs: 'space-x-1',
    sm: 'space-x-2',
    md: 'space-x-4',
    lg: 'space-x-6',
    xl: 'space-x-4 md:space-x-8',
    '2xl': 'space-x-6 md:space-x-12',
    '3xl': 'space-x-8 md:space-x-16',
  },
};

const alignClasses = {
  vertical: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  },
  horizontal: {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  },
};

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

/**
 * Stack component for laying out child elements with consistent spacing.
 * Provides flexible control over direction, spacing, alignment, and justification.
 *
 * @param children - Child elements to be stacked
 * @param direction - Layout direction (vertical = column, horizontal = row)
 * @param spacing - Space between child elements using Tailwind's space utilities
 * @param align - Cross-axis alignment (items-*)
 * @param justify - Main-axis justification (justify-*)
 * @param className - Additional CSS classes
 * @param wrap - Whether to allow wrapping (flex-wrap)
 *
 * @example
 * ```tsx
 * <Stack direction="vertical" spacing="lg" align="center">
 *   <h2>Title</h2>
 *   <p>Description</p>
 *   <button>Action</button>
 * </Stack>
 *
 * <Stack direction="horizontal" spacing="md" justify="between">
 *   <span>Left content</span>
 *   <span>Right content</span>
 * </Stack>
 * ```
 */
export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  className,
  wrap = false,
}) => {
  const isVertical = direction === 'vertical';

  return (
    <div
      className={cn(
        'flex',
        isVertical ? 'flex-col' : 'flex-row',
        spacingClasses[direction][spacing],
        alignClasses[direction][align],
        justifyClasses[justify],
        wrap && 'flex-wrap',
        className
      )}
    >
      {children}
    </div>
  );
};
