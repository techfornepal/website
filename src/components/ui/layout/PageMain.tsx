import React from 'react';
import { cn } from '../../../utils/cn';

interface PageMainProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const PageMain: React.FC<PageMainProps> = ({ 
  children, 
  className, 
  fullHeight = false 
}) => {
  return (
    <main className={cn(
      'pt-24 md:pt-32 pb-8',
      fullHeight && 'min-h-screen flex items-center justify-center',
      className
    )}>
      {children}
    </main>
  );
};