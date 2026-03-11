import React from 'react';
import { Text } from '../typography/Text';

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
    day: 'numeric',
  });

  if (!author && !date) return null;

  return (
    <div className={`flex items-center gap-2 text-xs ${className || ''}`}>
      {author && (
        <Text size="xs" color="muted">
          by {author.name}
        </Text>
      )}
      {author && date && <span className="text-[color:var(--text-muted)] opacity-50">•</span>}
      {formattedDate && (
        <Text size="xs" color="muted" className="opacity-70">
          {formattedDate}
        </Text>
      )}
    </div>
  );
};
