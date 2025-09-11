'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface TagProps {
  tag: string;
  count?: number;
  variant?: 'default' | 'large' | 'outline' | 'subtle';
  showCount?: boolean;
  className?: string;
}

const variantClasses = {
  default: 'inline-flex items-center px-2.5 py-1 rounded-md text-xs font-[var(--font-weight-medium)] bg-[color:var(--primary)]/10 text-[color:var(--primary)] border border-[color:var(--primary)]/20 hover:bg-[color:var(--primary)]/20 hover:border-[color:var(--primary)]/40',
  large: 'inline-flex items-center px-4 py-2 rounded-lg text-sm font-[var(--font-weight-medium)] bg-[color:var(--primary)]/10 text-[color:var(--primary)] border border-[color:var(--primary)]/20 hover:bg-[color:var(--primary)]/20 hover:border-[color:var(--primary)]/40',
  outline: 'inline-flex items-center px-3 py-1.5 rounded-md text-sm font-[var(--font-weight-medium)] border-2 border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-white',
  subtle: 'inline-flex items-center text-sm font-[var(--font-weight-medium)] text-[color:var(--text-muted)] hover:text-[color:var(--primary)] hover:underline underline-offset-2'
};

export const Tag: React.FC<TagProps> = ({ 
  tag, 
  count, 
  variant = 'default',
  showCount = false,
  className 
}) => {
  const slug = tag.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link
      href={`/blog/tags/${slug}`}
      className={cn(
        variantClasses[variant],
        variant === 'subtle' 
          ? 'transition-colors duration-300 no-underline' 
          : 'transition-all duration-300 hover:shadow-sm transform hover:scale-105 no-underline',
        className
      )}
    >
      <span className="flex items-center space-x-1">
        <span>#{tag}</span>
        {showCount && count !== undefined && (
          <span className="ml-1 px-1.5 py-0.5 bg-[color:var(--primary)]/20 rounded text-xs">
            {count}
          </span>
        )}
      </span>
    </Link>
  );
};