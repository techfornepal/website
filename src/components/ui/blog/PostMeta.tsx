import React from 'react';
import { Text } from '@/components/ui';

type PostMetaProps = {
  author?: { name: string };
  date?: Date;
  className?: string;
};

/**
 * Compact post metadata display for author and date with consistent formatting.
 */
export const PostMeta: React.FC<PostMetaProps> = ({ author, date, className }) => {
  const formattedDate = date?.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (!author && !date) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 text-sm ${className || ''}`}>
      {author && (
        <Text size="sm" color="muted">
          by {author.name}
        </Text>
      )}
      {author && date && (
        <span className="text-[color:var(--text-muted)]">•</span>
      )}
      {formattedDate && (
        <Text size="sm" color="muted" className="opacity-70">
          {formattedDate}
        </Text>
      )}
    </div>
  );
};
