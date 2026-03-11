import React from 'react';
import { cn } from '@/utils/cn';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * MDX content wrapper with Nepal-inspired typography and enhanced blockquote styling.
 */
export const Prose: React.FC<ProseProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'prose prose-slate max-w-none',
        'prose-base text-[1rem] leading-[var(--line-height-normal)] sm:text-[1.25rem]',
        'prose-h1:text-[color:var(--primary)]',
        'prose-h2:text-[color:var(--secondary)]',
        'prose-h3:text-[color:var(--secondary)]',
        'prose-h4:text-[color:var(--secondary)]',
        'prose-h5:text-[color:var(--secondary)]',
        'prose-h6:text-[color:var(--secondary)]',
        'prose-p:text-[color:var(--text-primary)] prose-p:leading-[var(--line-height-relaxed)]',
        'prose-a:text-[color:var(--primary)] prose-a:no-underline prose-a:hover:underline',
        'prose-strong:text-[color:var(--text-primary)] prose-strong:font-[var(--font-weight-semibold)]',
        'prose-code:text-[color:var(--primary)] prose-code:bg-[color:var(--surface)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-[var(--font-weight-medium)]',
        'prose-pre:bg-[color:var(--surface)] prose-pre:border prose-pre:border-[color:var(--border)]',
        'prose-blockquote:text-[color:var(--text-secondary)] prose-blockquote:border-l-[6px] prose-blockquote:!border-l-[color:var(--secondary-hover)] prose-blockquote:bg-[color:var(--secondary)]/8 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:my-4',
        'prose-ul:text-[color:var(--text-primary)] prose-ol:text-[color:var(--text-primary)]',
        'prose-li:text-[color:var(--text-primary)] prose-li:marker:text-[color:var(--text-muted)]',
        'prose-hr:border-[color:var(--border)]',
        'dark:prose-invert',
        className
      )}
    >
      {children}
    </div>
  );
};
