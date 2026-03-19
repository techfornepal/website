import React from 'react';

interface Author {
  name: string;
  avatar?: string;
}

interface BlogMetaProps {
  author?: Author;
  date?: string;
  readingTime?: string;
  tags?: string[];
  label?: string;
}

export const BlogMeta: React.FC<BlogMetaProps> = ({
  author,
  date,
  readingTime,
  tags = [],
  label,
}) => {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const timeParts: string[] = [];
  if (formattedDate) timeParts.push(formattedDate);
  if (readingTime) timeParts.push(readingTime);

  const dateLine =
    !author && label && timeParts.length > 0
      ? `${label}: ${timeParts.join(' · ')}`
      : timeParts.join(' · ');

  return (
    <div style={{ fontFamily: 'var(--font-title)' }}>
      <div className="flex items-center gap-3">
        {author?.avatar && (
          <img
            src={author.avatar}
            alt={author.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
        )}
        <div>
          {author && (
            <p className="text-sm font-medium text-[color:var(--text-primary)]">{author.name}</p>
          )}
          {dateLine && <p className="text-sm text-[color:var(--text-secondary)]">{dateLine}</p>}
        </div>
      </div>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map(tag => (
            <a
              key={tag}
              href={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-[color:var(--text-secondary)] transition-colors duration-200 hover:text-[color:var(--secondary)]"
            >
              #{tag}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
