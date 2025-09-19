import React from 'react';
import { Container } from '../layout/Container';

export const HeroDescription: React.FC = () => {
  return (
    <Container size="3xl" mobileSize="lg">
      <p
        className="mx-auto max-w-2xl text-center text-base leading-relaxed font-light text-white/90 md:text-lg lg:text-xl"
        style={{ fontFamily: 'var(--font-opensans)' }}
      >
        We design digital spaces where thinkers and dreamers can focus deeply and create
        meaningfully. Join Nepal&apos;s thriving tech community and build the future together.
      </p>
    </Container>
  );
};
