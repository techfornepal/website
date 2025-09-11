import { getPostsByTag, getAllTags } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import {
  Container,
  PageMain,
  Heading,
  Text,
  Stack,
  BlogPostCard,
  NavigationLink,
} from '@/components/ui';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tagData) => ({
    tag: tagData.tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagSlug } = await params;
  const allTags = await getAllTags();
  
  const tagData = allTags.find(t => t.tag.toLowerCase().replace(/\s+/g, '-') === tagSlug);
  if (!tagData) return notFound();
  
  const originalTag = tagData.tag;
  const posts = await getPostsByTag(originalTag);
  
  if (posts.length === 0) return notFound();

  return (
    <PageMain>
      <Container size="md">
        <Stack spacing="xl">
          <header>
            <Stack spacing="sm">
              <Heading as="h1" size="xl">
                Posts tagged with{' '}
                <span className="text-[color:var(--primary)]">
                  &ldquo;#{originalTag}&rdquo;
                </span>
              </Heading>
              <Text color="muted" size="sm">
                {posts.length} {posts.length === 1 ? 'post' : 'posts'} found
              </Text>
            </Stack>
          </header>

          <Stack spacing="lg">
            {posts.map((post) => (
              <BlogPostCard 
                key={post!.slug} 
                post={post!} 
                showDivider={true}
                maxTags={4}
                activeTag={originalTag}
              />
            ))}
          </Stack>

          <div className="text-center pt-8">
            <NavigationLink 
              href="/blog"
              icon={<ArrowLeft size={16} />}
              iconPosition="left"
            >
              Back to all posts
            </NavigationLink>
          </div>
        </Stack>
      </Container>
    </PageMain>
  );
}