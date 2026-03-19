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
        'prose prose-stone max-w-none',
        'prose-base text-[1rem] leading-[var(--line-height-normal)] sm:text-[1.125rem]',
        'prose-h1:text-[color:var(--text-primary)]',
        'prose-h2:text-[color:var(--text-primary)]',
        'prose-h3:text-[color:var(--text-primary)]',
        'prose-h4:text-[color:var(--text-primary)]',
        'prose-h5:text-[color:var(--text-primary)]',
        'prose-h6:text-[color:var(--text-primary)]',
        'prose-p:text-[color:var(--text-primary)] prose-p:leading-[var(--line-height-relaxed)]',
        'prose-a:text-[color:var(--nepal-blue)] prose-a:no-underline prose-a:hover:underline prose-a:hover:text-[color:var(--nepal-red)]',
        'prose-strong:text-[color:var(--text-primary)] prose-strong:font-[var(--font-weight-semibold)]',
        'prose-code:text-[color:var(--primary)] prose-code:bg-[color:var(--surface)] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-[var(--font-weight-medium)]',
        'prose-pre:bg-[color:var(--surface)] prose-pre:border prose-pre:border-[color:var(--border)]',
        'prose-blockquote:text-[color:var(--text-secondary)] prose-blockquote:border-l-[3px] prose-blockquote:border-dashed prose-blockquote:!border-l-[color:var(--nepal-red)] prose-blockquote:border-t-0 prose-blockquote:border-r-0 prose-blockquote:border-b-0 prose-blockquote:bg-transparent prose-blockquote:pl-6 prose-blockquote:pr-0 prose-blockquote:py-1 prose-blockquote:my-6 prose-blockquote:italic prose-blockquote:text-[0.95em]',
        'prose-ul:text-[color:var(--text-primary)] prose-ol:text-[color:var(--text-primary)]',
        'prose-li:text-[color:var(--text-primary)] prose-li:marker:text-[color:var(--text-muted)]',
        'prose-hr:border-[color:var(--border)]',
        className
      )}
    >
      {children}
    </div>
  );
};
