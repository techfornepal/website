import { Container, GradientHeading, Text, Stack, NavigationLink } from '@/components/ui';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4" style={{ minHeight: 'calc(100vh - 80px - 64px)' }}>
      <Container size="md" className="text-center">
        <Stack spacing="3xl" align="center">
          <Stack spacing="xl" align="center">
            <div className="font-title text-8xl font-bold text-[color:var(--text-muted)]/30 select-none leading-none">
              404
            </div>
            <Stack spacing="lg" align="center">
              <GradientHeading as="h1" size="4xl">
                Page Not Found
              </GradientHeading>
              <Text size="xl" color="muted" className="max-w-md mx-auto">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </Text>
            </Stack>
          </Stack>
          
          <NavigationLink 
            href="/"
            icon={<ArrowLeft size={16} />}
            iconPosition="left"
          >
            Go Home
          </NavigationLink>
        </Stack>
      </Container>
    </main>
  );
}