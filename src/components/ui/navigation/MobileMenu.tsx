import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { navigationSizing } from '@/utils/responsive';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ href: string; label: string }>;
  pathname: string;
  isPathActive: (_pathname: string, _href: string) => boolean;
  isBlogPathActive?: (_pathname: string) => boolean;
  anchorRef?: React.RefObject<HTMLElement>;
  isHomePage?: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  pathname,
  isPathActive,
  isBlogPathActive,
  isHomePage = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const firstLink = cardRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(
            'fixed inset-0 flex items-center justify-center',
            navigationSizing.menuBackdropZIndex,
            navigationSizing.mobileMenuPadding
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <motion.button
            type="button"
            className={cn(
              'absolute inset-0 backdrop-blur-[6px]',
              isHomePage
                ? 'bg-[color:var(--menu-overlay-home)]'
                : 'bg-[color:var(--menu-overlay-default)]'
            )}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-hidden="true"
          />

          <motion.div
            ref={cardRef}
            className={cn(
              'relative w-full shadow-[0_24px_72px_var(--menu-card-shadow)] backdrop-blur-xl',
              navigationSizing.menuCardZIndex,
              navigationSizing.mobileMenuMaxWidth,
              navigationSizing.mobileMenuRadius,
              isHomePage
                ? 'border border-[color:var(--menu-card-home-border)] bg-[color:var(--menu-card-home-bg)]'
                : 'border border-[color:var(--menu-card-border)] bg-[color:var(--menu-card-bg)]'
            )}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-menu-panel"
            onClick={event => event.stopPropagation()}
          >
            <div
              className={cn(
                'flex items-center justify-between',
                navigationSizing.mobileMenuHeaderPadding,
                isHomePage
                  ? 'border-b border-[color:var(--menu-header-home-border)]'
                  : 'border-b border-[color:var(--menu-header-border)]'
              )}
            >
              <h2
                className={cn(
                  'font-semibold',
                  navigationSizing.mobileMenuTitleText,
                  isHomePage
                    ? 'text-[color:var(--menu-title-home)] drop-shadow-sm'
                    : 'text-[color:var(--menu-title)]'
                )}
                style={{ fontFamily: 'var(--font-opensans)' }}
              >
                Menu
              </h2>
              <button
                onClick={onClose}
                className={cn(
                  'flex items-center justify-center transition-all duration-200',
                  navigationSizing.closeButtonSize,
                  navigationSizing.hamburgerButtonRadius,
                  'focus:outline-none',
                  isHomePage
                    ? 'text-[color:var(--menu-close-home)] hover:bg-[color:var(--menu-close-home-hover-bg)] hover:text-[color:var(--menu-close-home-hover-text)] focus-visible:ring-2 focus-visible:ring-[color:var(--nav-light-ring)] focus-visible:ring-offset-0'
                    : 'text-[color:var(--menu-close)] hover:bg-[color:var(--menu-close-hover-bg)] hover:text-[color:var(--menu-close-hover-text)] focus-visible:ring-2 focus-visible:ring-[color:var(--primary)] focus-visible:ring-offset-2'
                )}
                aria-label="Close menu"
                type="button"
              >
                <X className={cn(navigationSizing.closeIconSize)} strokeWidth={2} />
                <span className="sr-only">Close mobile menu</span>
              </button>
            </div>

            <nav
              className={cn(navigationSizing.mobileMenuNavPadding)}
              aria-label="Mobile navigation"
            >
              <ul className={cn(navigationSizing.mobileMenuSpacing)} role="list">
                {navItems.map(({ href, label }, index) => {
                  const active =
                    href === '/blog' && isBlogPathActive
                      ? isBlogPathActive(pathname)
                      : isPathActive(pathname, href);

                  return (
                    <NavLink
                      key={href}
                      href={href}
                      label={label}
                      isActive={active}
                      variant={isHomePage ? 'mobile-light' : 'mobile-dark'}
                      onClick={onClose}
                      animationIndex={index}
                      showArrow
                    />
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
