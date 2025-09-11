import React from 'react';
import { Container } from '../layout/Container';
import { Stack } from '../layout/Stack';
import { HeroTitle } from './HeroTitle';
import { HeroDescription } from './HeroDescription';
import { HeroActions } from './HeroActions';
import { HeroTagline } from './HeroTagline';

export const HeroSection: React.FC = () => {
  return (
    <main className="flex-1 flex items-center justify-center px-4" style={{ minHeight: 'calc(100vh - 80px - 64px)' }}>
      <Container size="lg" mobileSize="md">
        <div className="text-center">
          <Stack spacing="3xl" align="center">
            <HeroTitle />
            <HeroDescription />
            <HeroActions />
            <HeroTagline />
          </Stack>
        </div>
      </Container>
    </main>
  );
};