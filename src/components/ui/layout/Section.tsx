import React from 'react';
import { cn } from '../../../utils/cn';

type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'transparent';
  paddingY?: SectionPadding;
  id?: string;
}

const paddingClasses: Record<SectionPadding, string> = {
  none: 'py-0',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-20 sm:py-24',
};

const backgroundClasses = {
  white: 'bg-[color:var(--card-background)]',
  gray: 'bg-[color:var(--surface)]',
  primary: 'bg-[color:var(--primary-light)]',
  transparent: 'bg-transparent',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  background = 'transparent',
  paddingY = 'lg',
  id,
}) => {
  return (
    <section
      id={id}
      className={cn(backgroundClasses[background], paddingClasses[paddingY], className)}
    >
      {children}
    </section>
  );
};
