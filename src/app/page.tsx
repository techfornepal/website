import { Container, Text, Stack, HeroTitle, HeroTagline, NavigationLink } from "@/components/ui";
import { BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 flex items-center justify-center px-4" style={{ minHeight: 'calc(100vh - 80px - 64px)' }}>
      <Container size="lg">
        <div className="text-center max-w-5xl mx-auto">
          <Stack spacing="3xl" align="center">
            <HeroTitle />
            <Text 
              size="xl" 
              color="muted" 
              align="center" 
              className="leading-relaxed max-w-3xl mx-auto font-medium"
            >
              A community-driven platform dedicated to showcasing Nepal&apos;s tech talent 
              and fostering innovation through collaboration.
            </Text>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NavigationLink 
                href="/blog"
                icon={<BookOpen size={16} />}
                iconPosition="left"
              >
                Read the Blog
              </NavigationLink>
              
              <NavigationLink 
                href="/about"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Learn More
              </NavigationLink>
            </div>
            <HeroTagline />
          </Stack>
        </div>
      </Container>
    </main>
  );
}
