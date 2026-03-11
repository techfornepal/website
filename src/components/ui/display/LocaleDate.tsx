import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { responsiveTextSizes, type ResponsiveTextSize } from '@/utils/responsive';
import { type ColorVariant } from '../types';

export interface LocaleDateProps {
  date?: Date | string;
  format?: 'full' | 'long' | 'medium' | 'short';
  showTime?: boolean;
  timeFormat?: 'short' | 'medium' | 'long';
  locale?: string;
  prefix?: string;
  className?: string;
  size?: ResponsiveTextSize;
  color?: ColorVariant;
}

const colorClasses: Record<ColorVariant, string> = {
  default: 'text-[color:var(--text-primary)]',
  muted: 'text-[color:var(--text-secondary)]',
  primary: 'text-[color:var(--primary)]',
  secondary: 'text-[color:var(--secondary)]',
  white: 'text-[color:var(--nepal-white)]',
  success: 'text-[color:var(--success)]',
  warning: 'text-[color:var(--warning)]',
  error: 'text-[color:var(--error)]',
  info: 'text-[color:var(--info)]',
};

/**
 * LocaleDate - Displays a date in user's locale
 *
 * @example
 * // Show today's date
 * <LocaleDate prefix="Today:" format="long" color="muted" />
 *
 * // Show a specific date
 * <LocaleDate date="2025-10-18" prefix="Last updated:" format="long" />
 */
export const LocaleDate: React.FC<LocaleDateProps> = ({
  date,
  format = 'long',
  showTime = false,
  timeFormat = 'short',
  locale,
  prefix,
  className,
  size = 'sm',
  color = 'muted',
}) => {
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [dateTimeValue, setDateTimeValue] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const userLocale = locale || navigator.language || 'en-US';
    const targetDate = date ? (typeof date === 'string' ? new Date(date) : date) : new Date();
    setDateTimeValue(targetDate.toISOString());

    const dateFormatOptions: Record<string, Intl.DateTimeFormatOptions> = {
      full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: 'numeric' },
      medium: { year: 'numeric', month: 'short', day: 'numeric' },
      short: { year: '2-digit', month: 'numeric', day: 'numeric' },
    };

    const timeFormatOptions: Record<string, Intl.DateTimeFormatOptions> = {
      short: { hour: 'numeric', minute: 'numeric' },
      medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
      long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
    };

    const options: Intl.DateTimeFormatOptions = {
      ...dateFormatOptions[format],
      ...(showTime ? timeFormatOptions[timeFormat] : {}),
    };

    const formatted = new Intl.DateTimeFormat(userLocale, options).format(targetDate);
    setFormattedDate(formatted);
  }, [date, format, showTime, timeFormat, locale]);

  if (!mounted) {
    return null;
  }

  return (
    <span className={cn(responsiveTextSizes[size], colorClasses[color], className)}>
      {prefix && <span className="mr-1">{prefix}</span>}
      <time dateTime={dateTimeValue}>{formattedDate}</time>
    </span>
  );
};
