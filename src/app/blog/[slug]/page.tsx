import { getPostBySlug } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container, PageMain, GradientHeading, Prose, Stack, BlogMeta } from '@/components/ui';
import remarkGfm from 'remark-gfm';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();
  
  return (
    <PageMain>
      <Container size="md">
        <article>
          <Stack spacing="2xl">
            <header>
              <Stack spacing="lg">
                <GradientHeading as="h1" size="4xl">
                  {String(post.frontmatter.title ?? slug)}
                </GradientHeading>
                
                <BlogMeta
                  author={post.frontmatter.author as { name: string; avatar?: string }}
                  publishDate={post.frontmatter.publishDate as string}
                  readingTime={post.readingTime}
                  tags={post.frontmatter.tags as string[]}
                />
              </Stack>
            </header>
            <Prose>
              <MDXRemote 
                source={post.content}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [],
                  }
                }}
              />
            </Prose>
          </Stack>
        </article>
      </Container>
    </PageMain>
  );
}


