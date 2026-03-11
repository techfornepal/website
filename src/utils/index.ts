export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export const truncate = (text: string, length: number = 150): string => {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
};

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const isExternalUrl = (url: string): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    const urlObj = new URL(url);
    return urlObj.origin !== window.location.origin;
  } catch {
    return false;
  }
};

export const getReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export function debounce<TArgs extends unknown[]>(
  func: (..._args: TArgs) => void,
  wait: number
): (..._args: TArgs) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (..._args: TArgs) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(..._args), wait);
  };
}

export const generateId = (length: number = 8): string => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

export const normalizePath = (path: string): string => {
  if (path === '/' || path === '') return path;
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

export const isPathActive = (pathname: string, targetRoute: string): boolean => {
  const normalizedPathname = normalizePath(pathname);
  const normalizedTarget = normalizePath(targetRoute);

  if (normalizedTarget === '/') {
    return normalizedPathname === normalizedTarget;
  }

  return (
    normalizedPathname === normalizedTarget || normalizedPathname.startsWith(normalizedTarget + '/')
  );
};

export const isBlogPathActive = (pathname: string): boolean => {
  return pathname === '/blog' || pathname.startsWith('/blog/tags/');
};
