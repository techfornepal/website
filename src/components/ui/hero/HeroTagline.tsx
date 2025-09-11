import React from 'react';
import { Text } from '../typography/Text';

export const HeroTagline: React.FC = () => {
  return (
    <div className="pt-6">
      <Text 
        size="xs" 
        color="muted" 
        align="center" 
        weight="medium"
        className="opacity-60 tracking-wider uppercase"
      >
        Community • Innovation • Collaboration
      </Text>
    </div>
  );
};