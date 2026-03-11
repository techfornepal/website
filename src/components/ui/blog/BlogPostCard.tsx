import React from 'react';
import { Stack } from '../layout/Stack';
import { Heading } from '../typography/Heading';
import { Text } from '../typography/Text';
import { PostMeta } from './PostMeta';
import { Tag } from './Tag';
import { blogCardSizing } from '@/utils/responsive';

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
      <div className="absolute inset-0 -m-3 rounded-lg bg-[color:var(--surface)]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="relative z-10">
        <Stack spacing="sm">
          <a href={`/blog/${post.slug}`} className="block">
            <Stack spacing="xs">
              <Heading
                as="h2"
                size="lg"
                // I'm trying out `secondary-hover` here, but maybe we could use `primary-hover` if this secondary hover
                // is not a good consistency approach. Leaving this for the future me (or you, if you read this 🇳🇵)
                className="leading-[var(--line-height-tight)] transition-colors duration-200 group-hover:text-[color:var(--secondary-hover)]"
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
          </a>

          <div className={blogCardSizing.metaLayout}>
            <PostMeta author={post.author} date={post.date} />

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                {post.tags.slice(0, maxTags).map(tag => (
                  <Tag
                    key={tag}
                    tag={tag}
                    variant="subtle"
                    className={`${blogCardSizing.tagText} ${
                      activeTag === tag
                        ? 'font-[var(--font-weight-semibold)] text-[color:var(--primary)]'
                        : ''
                    }`}
                  />
                ))}
                {post.tags.length > maxTags && (
                  <Text
                    size="xs"
                    color="muted"
                    className={`${blogCardSizing.tagText} text-[color:var(--text-muted)]`}
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
