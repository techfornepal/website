import React from 'react';
import { cn } from '../../../utils/cn';
import { responsiveSpacing, type ResponsiveSpacingSize } from '../../../utils/responsive';

interface GridProps {
  children: React.ReactNode;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: ResponsiveSpacingSize;
  className?: string;
  autoFit?: {
    minWidth: string;
    maxWidth?: string;
  };
}

/**
 * Responsive Grid component for creating flexible layouts.
 * Uses centralized responsive utilities and supports breakpoint-specific column configurations.
 *
 * @param children - Grid items to be displayed
 * @param cols - Column configuration per breakpoint (xs, sm, md, lg, xl)
 * @param gap - Gap size using centralized spacing system
 * @param className - Additional CSS classes
 * @param autoFit - Auto-fit configuration with minimum width per item
 *
 * @example
 * ```tsx
 * // Responsive grid that adapts per breakpoint
 * <Grid cols={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap="md">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 *
 * // Auto-fit grid based on minimum item width
 * <Grid autoFit={{ minWidth: '250px' }} gap="lg">
 *   <div>Auto-sized Item 1</div>
 *   <div>Auto-sized Item 2</div>
 * </Grid>
 *
 * // Simple uniform grid
 * <Grid cols={{ xs: 2, md: 4 }}>
 *   <div>Simple Item</div>
 * </Grid>
 * ```
 */
export const Grid: React.FC<GridProps> = ({
  children,
  cols = { xs: 1, sm: 2, md: 3 },
  gap = 'md',
  className,
  autoFit,
}) => {
  const generateGridClasses = () => {
    if (autoFit) {
      const maxWidth = autoFit.maxWidth || '1fr';
      return `grid-cols-[repeat(auto-fit,minmax(${autoFit.minWidth},${maxWidth}))]`;
    }

    const gridClasses: string[] = [];

    if (cols.xs) gridClasses.push(`grid-cols-${cols.xs}`);
    if (cols.sm) gridClasses.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) gridClasses.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) gridClasses.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) gridClasses.push(`xl:grid-cols-${cols.xl}`);

    return gridClasses.join(' ');
  };

  return (
    <div className={cn('grid', generateGridClasses(), responsiveSpacing[gap], className)}>
      {children}
    </div>
  );
};

interface GridItemProps {
  children: React.ReactNode;
  span?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  className?: string;
}

/**
 * GridItem component for wrapping grid items with consistent styling
 */
export const GridItem: React.FC<GridItemProps> = ({ children, span, className }) => {
  const generateSpanClasses = () => {
    if (!span) return '';

    const spanClasses: string[] = [];

    if (span.xs) spanClasses.push(`col-span-${span.xs}`);
    if (span.sm) spanClasses.push(`sm:col-span-${span.sm}`);
    if (span.md) spanClasses.push(`md:col-span-${span.md}`);
    if (span.lg) spanClasses.push(`lg:col-span-${span.lg}`);
    if (span.xl) spanClasses.push(`xl:col-span-${span.xl}`);

    return spanClasses.join(' ');
  };

  return <div className={cn(generateSpanClasses(), className)}>{children}</div>;
};
