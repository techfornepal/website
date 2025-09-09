import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  variant?: 'primary' | 'secondary';
};

/**
 * Navigation link with optional icon and hover effects.
 * Perfect for breadcrumbs, back links, and action navigation.
 */
export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  icon,
  iconPosition = 'left',
  className,
  variant = 'primary',
}) => {
  const variantClasses = {
    primary: 'text-[color:var(--primary)] hover:text-[color:var(--secondary)]',
    secondary: 'text-[color:var(--text-secondary)] hover:text-[color:var(--primary)]',
  };

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center space-x-2 transition-colors duration-300',
        variantClasses[variant],
        className
      )}
    >
      {icon && iconPosition === 'left' && (
        <span className="w-4 h-4 flex-shrink-0">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="w-4 h-4 flex-shrink-0">
          {icon}
        </span>
      )}
    </Link>
  );
};
