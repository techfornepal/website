import { Container, PageMain, GradientHeading, Text, Stack } from '@/components/ui';

export default function Contact() {
  return (
    <PageMain>
      <Container size="md">
        <Stack spacing="xl">
          <GradientHeading as="h1" size="4xl">
            Get In Touch
          </GradientHeading>
          <Stack spacing="lg">
            <Text color="muted">
              We&apos;d love to hear from you. Whether you&apos;re interested in contributing, 
              have questions, or want to get involved in our community.
            </Text>
            <Text>
              Join our community and let&apos;s build the future of technology in Nepal together.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </PageMain>
  );
}