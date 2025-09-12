'use client';

import React from 'react';
import Image from 'next/image';
import { Text, Stack } from '@/components/ui';
import { Tag } from './Tag';

interface Author {
  name: string;
  avatar?: string;
}

interface BlogMetaProps {
  author?: Author;
  publishDate?: string;
  readingTime?: string;
  tags?: string[];
}

/**
 * Blog post metadata with subtle translucent styling to avoid competing with content.
 */
export const BlogMeta: React.FC<BlogMetaProps> = ({
  author,
  publishDate,
  readingTime,
  tags = [],
}) => {
  const formattedDate = publishDate
    ? new Date(publishDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <div className="relative rounded-lg border border-[color:var(--border)]/70 bg-[color:var(--surface)]/60 px-6 py-6 backdrop-blur-[2px]">
      <Stack spacing="md">
        {author && (
          <div className="flex items-center space-x-3">
            {author.avatar && (
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] p-0.5">
                <div className="relative h-full w-full">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={40}
                    height={40}
                    className="h-full w-full rounded-full bg-[color:var(--background)] object-cover"
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                </div>
                <div
                  className="font-title hidden h-full w-full items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-sm font-[var(--font-weight-bold)] text-white"
                  style={{ display: 'none' }}
                >
                  {author.name
                    .split(' ')
                    .map(word => word[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)}
                </div>
              </div>
            )}
            <div>
              <Text size="sm" weight="medium" className="text-[color:var(--text-primary)]">
                {author.name}
              </Text>
              <Text size="xs" color="muted">
                Author
              </Text>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4">
          {formattedDate && (
            <div className="flex items-center space-x-2">
              <svg
                className="h-4 w-4 text-[color:var(--text-muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Text size="sm" color="muted">
                {formattedDate}
              </Text>
            </div>
          )}

          {readingTime && (
            <div className="flex items-center space-x-2">
              <svg
                className="h-4 w-4 text-[color:var(--text-muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <Text size="sm" color="muted">
                {readingTime}
              </Text>
            </div>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {tags.map(tag => (
              <Tag key={tag} tag={tag} variant="subtle" />
            ))}
          </div>
        )}
      </Stack>
    </div>
  );
};
