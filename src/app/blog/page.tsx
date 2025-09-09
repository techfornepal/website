import { listPosts } from '@/lib/mdx';
import { Container, PageMain, GradientHeading, Text, Stack, BlogPostCard } from '@/components/ui';

export default async function Blog() {
  const posts = await listPosts();
  
  return (
    <PageMain>
      <Container size="md">
        <Stack spacing="xl">
          <GradientHeading as="h1" size="4xl">
            Blog
          </GradientHeading>
          
          {posts.length === 0 ? (
            <Text color="muted" size="lg">No posts yet. Coming soon.</Text>
          ) : (
            <Stack spacing="2xl">
              {posts.map((post) => (
                <BlogPostCard 
                  key={post.slug} 
                  post={post} 
                  showDivider={true}
                  maxTags={4}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </Container>
    </PageMain>
  );
}


