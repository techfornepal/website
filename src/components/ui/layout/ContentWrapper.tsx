import React from 'react';
import { cn } from '../../../utils/cn';

interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '7xl' | 'full';
  centered?: boolean;
}

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md', 
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full'
};

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ 
  children, 
  className, 
  maxWidth = '7xl',
  centered = true
}) => {
  return (
    <div className={cn(
      maxWidthClasses[maxWidth],
      centered && 'mx-auto',
      className
    )}>
      {children}
    </div>
  );
};