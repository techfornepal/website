import React from 'react';
import { cn } from '@/utils/cn';
import { Container } from '../layout/Container';
import { homepageTextSizes } from '@/utils/responsive';

export const HeroDescription: React.FC = () => {
  return (
    <Container size="3xl" mobileSize="lg">
      <p
        className={cn(
          'mx-auto max-w-2xl text-center leading-relaxed font-light text-white/90',
          homepageTextSizes.heroSubtitle
        )}
        style={{ fontFamily: 'var(--font-opensans)' }}
      >
        Thinkers and dreamers creating meaningful impact for Nepal through technology
      </p>
    </Container>
  );
};
