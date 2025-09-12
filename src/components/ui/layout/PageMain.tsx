import React from 'react';
import { cn } from '../../../utils/cn';

interface PageMainProps {
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const PageMain: React.FC<PageMainProps> = ({ children, className, fullHeight = false }) => {
  return (
    <main
      className={cn(
        'pt-24 pb-8 md:pt-32',
        fullHeight && 'flex min-h-screen items-center justify-center',
        className
      )}
    >
      {children}
    </main>
  );
};
