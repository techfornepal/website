import React from 'react';
import { cn } from '@/utils/cn';
import { ResponsiveButton } from '../buttons/ResponsiveButton';
import { homepageLayout } from '@/utils/responsive';

export const HeroActions: React.FC = () => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        homepageLayout.stackHorizontal,
        homepageLayout.heroGap
      )}
    >
      <ResponsiveButton href="/contact" variant="hero-primary">
        Share Your Skills
      </ResponsiveButton>
    </div>
  );
};
