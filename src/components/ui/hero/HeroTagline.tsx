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
        className="tracking-wider uppercase opacity-60"
      >
        Community • Innovation • Collaboration
      </Text>
    </div>
  );
};
