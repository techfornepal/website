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
  maxTags = 4,
  activeTag,
}) => {
  const dividerClasses = showDivider
    ? 'border-b border-[color:var(--border)]/30 pb-8 last:border-b-0'
    : '';

  return (
    <article className={`group ${dividerClasses}`}>
      <Stack spacing="md">
        <Link href={`/blog/${post.slug}`} className="block">
          <Stack spacing="sm">
            <Heading
              as="h2"
              size="2xl"
              className="group-hover:text-[color:var(--primary)] transition-colors duration-200"
            >
              {post.title}
            </Heading>
            {post.excerpt && (
              <Text color="muted">{post.excerpt}</Text>
            )}
          </Stack>
        </Link>

        <PostMeta author={post.author} date={post.date} />

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {post.tags.slice(0, maxTags).map((tag) => (
              <Tag 
                key={tag} 
                tag={tag} 
                variant="subtle"
                className={activeTag === tag ? 'text-[color:var(--primary)] font-semibold' : ''}
              />
            ))}
            {post.tags.length > maxTags && (
              <Text size="xs" color="muted">
                +{post.tags.length - maxTags} more
              </Text>
            )}
          </div>
        )}
      </Stack>
    </article>
  );
};
