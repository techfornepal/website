import React from 'react';
import { cn } from '@/utils/cn';
import { homepageTextSizes } from '@/utils/responsive';

export const HeroTitle: React.FC = () => {
  return (
    <h1 className={cn('text-center leading-tight font-[var(--font-opensans)] text-white')}>
      <span className={cn('mb-2 block font-light', homepageTextSizes.heroTitle)}>
        Innovation, Collaboration, Impact
      </span>
    </h1>
  );
};
