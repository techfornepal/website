import React from 'react';
import { GradientHeading } from '../typography/GradientHeading';
import { responsiveSpacing } from '../../../utils/responsive';
import { cn } from '../../../utils/cn';

export const HeroTitle: React.FC = () => {
  return (
    <h1 className={cn(responsiveSpacing.sm)}>
      <GradientHeading 
        as="span" 
        size="2xl" 
        gradient="primary-only"
      >
        Empowering Nepal through
      </GradientHeading>
      <br />
      <GradientHeading 
        as="span" 
        size="3xl" 
        gradient="primary-secondary"
      >
        Technology
      </GradientHeading>
    </h1>
  );
};