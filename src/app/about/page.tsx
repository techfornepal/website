import { Container, PageMain, GradientHeading, Text, Stack } from '@/components/ui';

export default function About() {
  return (
    <PageMain>
      <Container size="md">
        <Stack spacing="xl">
          <GradientHeading as="h1" size="4xl" gradient='diagonal'>
            About Tech For Nepal
          </GradientHeading>
          <Stack spacing="lg">
            <Text color="muted">
              Tech For Nepal is a community-driven platform dedicated to showcasing Nepal&apos;s 
              tech talent and fostering innovation through collaboration.
            </Text>
            <Text>
              We believe that by bringing together developers, designers, entrepreneurs, and tech 
              enthusiasts, we can create something truly remarkable for our country.
            </Text>
            <Text>
              Our mission is to put Nepal on the global tech map by building a vibrant ecosystem 
              that supports innovation, knowledge sharing, and professional growth.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </PageMain>
  );
}