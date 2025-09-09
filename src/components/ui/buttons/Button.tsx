import React from 'react';
import { cn } from '../../../utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'subtle-primary' | 'subtle-secondary';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'subtle';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  href?: string;
}

const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const transformClasses = 'active:scale-[0.98] transform';

const variantClasses = {
  primary: 'bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary-hover)] text-[color:var(--text-on-primary)] hover:from-[color:var(--primary-hover)] hover:to-[color:var(--primary)] shadow-lg hover:shadow-xl border border-[color:var(--primary)]',
  secondary: 'bg-gradient-to-r from-[color:var(--button-secondary-bg)] to-[color:var(--button-secondary-hover)] text-[color:var(--text-primary)] hover:from-[color:var(--button-secondary-hover)] hover:to-[color:var(--surface-hover)] border border-[color:var(--border)] shadow-md hover:shadow-lg',
  outline: 'border-2 border-[color:var(--primary)] bg-transparent text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-[color:var(--text-on-primary)] hover:shadow-lg',
  ghost: 'text-[color:var(--text-primary)] hover:bg-[color:var(--surface-hover)] hover:shadow-md',
  'subtle-primary': 'bg-[color:var(--primary)]/90 backdrop-blur-sm hover:bg-[color:var(--secondary)]/90 text-white font-medium rounded-xl border border-[color:var(--primary)]/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]',
  'subtle-secondary': 'bg-[color:var(--surface)]/60 backdrop-blur-sm border border-[color:var(--primary)]/30 hover:border-[color:var(--secondary)]/50 hover:bg-[color:var(--secondary)]/10 text-[color:var(--text-primary)] hover:text-[color:var(--secondary)] font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]'
};

const sizeClasses = {
  sm: 'h-9 px-4 text-sm rounded-lg',
  md: 'h-11 px-6 text-sm rounded-lg', 
  lg: 'h-12 px-8 text-base rounded-xl',
  xl: 'h-14 px-10 text-lg rounded-xl',
  subtle: 'px-6 py-3 text-base'
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  loading = false,
  href,
  disabled,
  ...props
}) => {
  const isSubtle = variant.startsWith('subtle-');
  
  const classes = cn(
    baseClasses,
    !isSubtle && transformClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        role="button"
        aria-disabled={disabled || loading}
        className={classes}
      >
        {loading && <LoadingSpinner />}
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      {children}
    </button>
  );
};

const LoadingSpinner = () => (
  <svg 
    className="w-4 h-4 mr-2 animate-spin" 
    viewBox="0 0 24 24" 
    fill="none"
  >
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
