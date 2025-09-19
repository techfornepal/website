import React from 'react';
import { cn } from '@/utils/cn';

export const HeroTitle: React.FC = () => {
  return (
    <h1 className={cn('text-center leading-tight font-[var(--font-title)] text-white')}>
      <span className="mb-2 block text-4xl font-light md:text-5xl lg:text-6xl xl:text-7xl">
        Innovation, Collaboration, and Impact
      </span>
    </h1>
  );
};
