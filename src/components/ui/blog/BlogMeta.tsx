'use client';

import React from 'react';
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
  tags = [] 
}) => {
  const formattedDate = publishDate 
    ? new Date(publishDate).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : null;

  return (
    <div className="relative py-6 px-6 rounded-lg bg-[color:var(--surface)]/60 backdrop-blur-[2px] border border-[color:var(--border)]/70">
      <Stack spacing="md">
        {author && (
          <div className="flex items-center space-x-3">
            {author.avatar && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] p-0.5">
                <img 
                  src={author.avatar} 
                  alt={author.name}
                  className="w-full h-full rounded-full object-cover bg-[color:var(--background)]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-full h-full rounded-full bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] text-white font-title font-bold text-sm items-center justify-center hidden"
                  style={{ display: 'none' }}
                >
                  {author.name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
                </div>
              </div>
            )}
            <div>
              <Text size="sm" className="font-medium text-[color:var(--text-primary)]">
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
              <svg className="w-4 h-4 text-[color:var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <Text size="sm" color="muted">
                {formattedDate}
              </Text>
            </div>
          )}

          {readingTime && (
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-[color:var(--text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <Text size="sm" color="muted">
                {readingTime}
              </Text>
            </div>
          )}
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} variant="subtle" />
            ))}
          </div>
        )}
      </Stack>
    </div>
  );
};