import { getPostBySlug, listPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  Container,
  PageMain,
  GradientHeading,
  Prose,
  Stack,
  BlogMeta,
  NavigationLink,
} from '@/components/ui';
import { ArrowLeft } from 'lucide-react';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const posts = await listPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <PageMain>
      <Container size="md">
        <Stack spacing="xl">
          <NavigationLink
            href="/blog"
            icon={<ArrowLeft size={16} />}
            iconPosition="left"
            variant="secondary"
            className="text-sm font-[var(--font-weight-medium)] tracking-wide uppercase"
          >
            Back to the main blog
          </NavigationLink>

          <article>
            <Stack spacing="xl">
              <header>
                <Stack spacing="md">
                  <GradientHeading as="h1" size="2xl" gradient="diagonal">
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
                    },
                  }}
                />
              </Prose>
            </Stack>
          </article>
        </Stack>
      </Container>
    </PageMain>
  );
}
