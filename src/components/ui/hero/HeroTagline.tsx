import React from 'react';
import { Text } from '../typography/Text';

export const HeroTagline: React.FC = () => {
  return (
    <div className="pt-8">
      <Text 
        size="base" 
        color="muted" 
        align="center" 
        className="opacity-60 tracking-wider uppercase text-xs font-medium"
      >
        Community • Innovation • Collaboration
      </Text>
    </div>
  );
};