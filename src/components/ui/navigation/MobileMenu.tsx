import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { navigationSizing } from '@/utils/responsive';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ href: string; label: string }>;
  pathname: string;
  isPathActive: (_pathname: string, _href: string) => boolean;
  isBlogPathActive?: (_pathname: string) => boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  pathname,
  isPathActive,
  isBlogPathActive,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className={cn('fixed inset-0 z-50 flex flex-col bg-[color:var(--background)]')}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          id="mobile-menu-panel"
        >
          {/* Spacer for navbar height */}
          <div className={cn(navigationSizing.navbarHeight, 'shrink-0')} />

          {/* Nav links — centered in remaining space */}
          <nav className="flex flex-1 items-center justify-center" aria-label="Mobile navigation">
            <ul className="flex flex-col items-center gap-7" role="list">
              {navItems.map(({ href, label }, index) => {
                const active =
                  href === '/blog' && isBlogPathActive
                    ? isBlogPathActive(pathname)
                    : isPathActive(pathname, href);

                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, delay: 0.05 + index * 0.04, ease: 'easeOut' }}
                  >
                    <a
                      href={href}
                      onClick={onClose}
                      className={cn(
                        'block text-xl transition-colors duration-200',
                        active
                          ? 'font-semibold text-[color:var(--text-primary)]'
                          : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
                      )}
                      style={{ fontFamily: 'var(--font-title)' }}
                      aria-current={active ? 'page' : undefined}
                    >
                      {label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
