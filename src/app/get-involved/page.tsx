import { getPageBySlug } from '@/lib/mdx';
import { getMDXComponents } from '@/lib/mdx-components';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container, PageMain, GradientHeading, Prose, Stack, LocaleDate } from '@/components/ui';
import remarkGfm from 'remark-gfm';

export default async function GetInvolved() {
  const page = await getPageBySlug('get-involved');
  if (!page) return notFound();

  return (
    <PageMain>
      <Container size="md">
        <Stack spacing="xl">
          <Stack spacing="lg">
            <GradientHeading as="h1" size="2xl" gradient="diagonal">
              {String(page.frontmatter.title ?? 'Get Involved')}
            </GradientHeading>
            {page.frontmatter.lastUpdated ? (
              <LocaleDate
                date={page.frontmatter.lastUpdated as string}
                prefix="Last updated:"
                size="sm"
                color="muted"
              />
            ) : null}
          </Stack>

          <Prose>
            <MDXRemote
              source={page.content}
              components={getMDXComponents()}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [],
                },
              }}
            />
          </Prose>
        </Stack>
      </Container>
    </PageMain>
  );
}
