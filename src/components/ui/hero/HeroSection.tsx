import React from 'react';
import { Container } from '../layout/Container';
import { Stack } from '../layout/Stack';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';

export const HeroSection: React.FC = () => {
  return (
    <main
      className="relative flex flex-1 items-center justify-center px-4"
      style={{
        height: '100vh',
        backgroundImage: 'url(/himalayas-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <Container size="lg" mobileSize="md" className="relative z-10">
        <div className="text-center">
          <Stack spacing="3xl" align="center">
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
          </Stack>
        </div>
      </Container>
    </main>
  );
};
