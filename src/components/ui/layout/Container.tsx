import React from 'react';
import { cn } from '../../../utils/cn';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';


interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
  padding?: boolean;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-2xl',    // ~672px - For narrow content like forms
  md: 'max-w-4xl',    // ~896px - For readable text content  
  lg: 'max-w-6xl',    // ~1152px - For wider layouts
  xl: 'max-w-7xl',    // ~1280px - Full navbar width
  full: 'max-w-none'  // No constraint
};

/**
 * Container component for constraining content width and centering content.
 * Provides consistent max-width constraints and optional horizontal padding.
 * 
 * @param children - Content to be contained
 * @param size - Maximum width constraint (sm: 672px, md: 768px, lg: 1024px, xl: 1280px, full: no constraint)
 * @param className - Additional CSS classes
 * @param padding - Whether to apply horizontal padding (responsive: px-4 sm:px-6 lg:px-8)
 * 
 * @example
 * ```tsx
 * <Container size="lg" padding={true}>
 *   <h1>Page Content</h1>
 *   <p>This content will be centered and constrained.</p>
 * </Container>
 * 
 * <Container size="full" padding={false}>
 *   <div>Full width content without padding</div>
 * </Container>
 * ```
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'xl',
  className,
  padding = true
}) => {
  return (
    <div
      className={cn(
        'mx-auto',
        sizeClasses[size],
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};
