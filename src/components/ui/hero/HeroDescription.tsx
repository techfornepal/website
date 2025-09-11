import React from 'react';
import { Text } from '../typography/Text';
import { Container } from '../layout/Container';

export const HeroDescription: React.FC = () => {
  return (
    <Container size="3xl" mobileSize="lg">
      <Text 
        size="lg" 
        color="muted" 
        align="center" 
        weight="medium"
        className="leading-[var(--line-height-relaxed)]"
      >
        A community-driven platform dedicated to showcasing Nepal&apos;s tech talent 
        and fostering innovation through collaboration.
      </Text>
    </Container>
  );
};