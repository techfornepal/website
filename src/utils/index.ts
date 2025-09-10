/**
 * Utility functions for Tech For Nepal website
 */

/**
 * Format a date to a readable string
 */
export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Generate a slug from a string
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

/**
 * Truncate text to a specified length
 */
export const truncate = (text: string, length: number = 150): string => {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
};

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Check if a URL is external (client-side only)
 */
export const isExternalUrl = (url: string): boolean => {
  if (typeof window === 'undefined') return false;
  
  try {
    const urlObj = new URL(url);
    return urlObj.origin !== window.location.origin;
  } catch {
    return false;
  }
};

/**
 * Get reading time estimate for content
 */
export const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

/**
 * Debounce function to limit the rate of function execution
 */
export function debounce<TArgs extends unknown[]>(
  func: (...args: TArgs) => void,
  wait: number
): (...args: TArgs) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return (...args: TArgs) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Generate a random ID
 */
export const generateId = (length: number = 8): string => {
  return Math.random().toString(36).substring(2, length + 2);
};

/**
 * Normalize a path by removing trailing slash (except for root)
 */
export const normalizePath = (path: string): string => {
  if (path === '/' || path === '') return path;
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

/**
 * Check if current pathname matches target route with normalization
 */
export const isPathActive = (pathname: string, targetRoute: string): boolean => {
  const normalizedPathname = normalizePath(pathname);
  const normalizedTarget = normalizePath(targetRoute);
  
  if (normalizedTarget === '/') {
    // for home: exact match only
    return normalizedPathname === normalizedTarget;
  }
  
  return normalizedPathname === normalizedTarget || normalizedPathname.startsWith(normalizedTarget + '/');
};

/**
 * Check if current pathname matches blog route with special logic
 * Highlights for base blog page and tag filtering, but not individual posts
 */
export const isBlogPathActive = (pathname: string): boolean => {
  return pathname === '/blog/' || pathname.startsWith('/blog/tags/');
};
