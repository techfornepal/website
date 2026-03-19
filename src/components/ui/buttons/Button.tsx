import React from 'react';
import { cn } from '../../../utils/cn';
import { type ButtonVariant, type ButtonSize } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  loading?: boolean;
  href?: string;
}

const baseClasses =
  'inline-flex items-center justify-center font-[var(--font-weight-semibold)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--focus-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed';

const transformClasses = 'active:scale-[0.98] transform';

const variantClasses = {
  primary:
    'bg-[color:var(--primary)] text-[color:var(--text-on-primary)] hover:bg-[color:var(--primary-hover)] border border-[color:var(--primary)]',
  secondary:
    'bg-[color:var(--background)] text-[color:var(--text-primary)] hover:bg-[color:var(--button-secondary-hover)] border border-[color:var(--border)]',
  outline:
    'border-2 border-[color:var(--primary)] bg-transparent text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-[color:var(--text-on-primary)]',
  ghost: 'text-[color:var(--text-primary)] hover:bg-[color:var(--surface-hover)]',
  'subtle-primary':
    'bg-[color:var(--primary)] hover:bg-[color:var(--primary-hover)] text-[color:var(--text-on-primary)] font-[var(--font-weight-medium)] transition-all duration-300',
  'subtle-secondary':
    'bg-[color:var(--surface)] border border-[color:var(--border)] hover:border-[color:var(--text-muted)] text-[color:var(--text-primary)] font-[var(--font-weight-medium)] transition-all duration-300',
  success:
    'bg-[color:var(--success)] text-[color:var(--text-on-primary)] hover:bg-[color:var(--success-hover)] border border-[color:var(--success)]',
  warning:
    'bg-[color:var(--warning)] text-[color:var(--text-on-primary)] hover:bg-[color:var(--warning-hover)] border border-[color:var(--warning)]',
  error:
    'bg-[color:var(--error)] text-[color:var(--text-on-primary)] hover:bg-[color:var(--error-hover)] border border-[color:var(--error)]',
  info: 'bg-[color:var(--info)] text-[color:var(--text-on-primary)] hover:bg-[color:var(--info-hover)] border border-[color:var(--info)]',
};

const sizeClasses = {
  sm: 'h-11 px-4 text-sm rounded-full',
  md: 'h-11 px-6 text-sm rounded-full',
  lg: 'h-12 px-8 text-base rounded-full',
  xl: 'h-14 px-10 text-lg rounded-full',
  subtle: 'px-6 py-3 text-base min-h-[2.75rem] rounded-full',
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
        aria-busy={loading}
        className={classes}
        tabIndex={disabled || loading ? -1 : 0}
      >
        {loading && <LoadingSpinner />}
        <span className={loading ? 'opacity-0' : ''}>{children}</span>
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      type={props.type || 'button'}
      {...props}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

const LoadingSpinner = () => (
  <svg
    className="absolute h-4 w-4 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    role="presentation"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
