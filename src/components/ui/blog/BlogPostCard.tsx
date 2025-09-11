import React from 'react';
import Link from 'next/link';
import { Heading, Text, Stack, Tag } from '@/components/ui';
import { PostMeta } from './PostMeta';

type BlogPost = {
  slug: string;
  title: string;
  excerpt?: string;
  author?: { name: string };
  date?: Date;
  tags?: string[];
};

type BlogPostCardProps = {
  post: BlogPost;
  showDivider?: boolean;
  maxTags?: number;
  activeTag?: string;
};

/**
 * Reusable blog post card with consistent styling and hover effects.
 * Includes title, excerpt, metadata, and tags with configurable display options.
 */
export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  showDivider = true,
  maxTags = 5,
  activeTag,
}) => {
  const dividerClasses = showDivider
    ? 'border-b border-[color:var(--border)]/20 pb-5 last:border-b-0'
    : '';

  return (
    <article className={`group relative ${dividerClasses}`}>
      <div className="absolute inset-0 bg-[color:var(--surface)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -m-3"></div>
      
      <div className="relative z-10">
        <Stack spacing="sm">
          <Link href={`/blog/${post.slug}`} className="block">
            <Stack spacing="xs">
              <Heading
                as="h2"
                size="lg"
                // I'm trying out `secondary-hover` here, but maybe we could use `primary-hover` if this secondary hover
                // is not a good consistency approach. Leaving this for the future me (or you, if you read this 🇳🇵)
                className="group-hover:text-[color:var(--secondary-hover)] transition-colors duration-200 leading-[var(--line-height-tight)]"
                weight="medium"
              >
                {post.title}
              </Heading>
              {post.excerpt && (
                <Text size="sm" color="muted" className="leading-[var(--line-height-normal)]">
                  {post.excerpt}
                </Text>
              )}
            </Stack>
          </Link>

          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 pt-1">
            <PostMeta author={post.author} date={post.date} />
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                {post.tags.slice(0, maxTags).map((tag) => (
                  <Tag
                    key={tag}
                    tag={tag}
                    variant="subtle"
                    className={`text-xs sm:text-sm ${
                      activeTag === tag
                        ? 'text-[color:var(--primary)] font-[var(--font-weight-semibold)]'
                        : ''
                    }`}
                  />
                ))}
                {post.tags.length > maxTags && (
                  <Text
                    size="xs"
                    color="muted"
                    className="text-xs sm:text-sm text-[color:var(--text-muted)]"
                  >
                    +{post.tags.length - maxTags}
                  </Text>
                )}
              </div>
            )}
          </div>
        </Stack>
      </div>
    </article>
  );
};
