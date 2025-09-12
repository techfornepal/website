import React from 'react';
import { Stack } from '../layout/Stack';
import { NavigationLink } from '../buttons/NavigationLink';
import { BookOpen, ArrowRight } from 'lucide-react';

export const HeroActions: React.FC = () => {
  return (
    <Stack direction="horizontal" spacing="lg" align="center" justify="center">
      <NavigationLink href="/blog" icon={<BookOpen size={16} />} iconPosition="left">
        Read the Blog
      </NavigationLink>

      <NavigationLink href="/about" icon={<ArrowRight size={16} />} iconPosition="right">
        Learn More
      </NavigationLink>
    </Stack>
  );
};
