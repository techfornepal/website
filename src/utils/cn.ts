import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge for optimal class merging.
 * Resolves Tailwind CSS class conflicts by merging conflicting classes intelligently.
 * 
 * @param inputs - Any valid clsx inputs (strings, objects, arrays, conditionals)
 * @returns Merged and deduplicated class string
 * 
 * @example
 * ```tsx
 * cn('p-4', 'p-6') // Returns 'p-6' (p-4 is overridden)
 * cn('text-red-500', { 'text-blue-500': isBlue }) // Conditional classes
 * cn(['bg-white', isActive && 'bg-blue-500']) // Array with conditionals
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
