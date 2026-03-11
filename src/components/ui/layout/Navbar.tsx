import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { MobileMenu } from '../navigation/MobileMenu';
import { Logo } from '../branding/Logo';
import { HamburgerButton } from '../navigation/HamburgerButton';
import { NavLink } from '../navigation/NavLink';
import { useNavigation } from '../../../hooks/useNavigation';
import { useIsDesktop } from '../../../hooks/useMediaQuery';
import { cn } from '@/utils/cn';
import { navigationSizing } from '@/utils/responsive';
import { isPathActive, isBlogPathActive } from '@/utils';

interface NavbarProps {
  pathname: string;
}

export const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const isHomePage = pathname === '/';
  const isDesktop = useIsDesktop();

  const { isScrolled, isVisible, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavigation();

  const menuTriggerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/get-involved', label: 'Get Involved' },
  ];

  const useLightNavColors = isHomePage || isScrolled;
  const isHeroOverlay = isHomePage && !isScrolled;

  const logoColorScheme = isHeroOverlay
    ? 'hero-overlay'
    : useLightNavColors
      ? 'light-nav'
      : 'dark-nav';

  const hamburgerVariant = isHeroOverlay ? 'hero-overlay' : useLightNavColors ? 'light' : 'dark';

  const navLinkVariant = useLightNavColors ? 'desktop-light' : 'desktop-dark';

  return (
    <>
      <nav
        className={cn(
          'fixed right-0 left-0 transition-all duration-300 ease-in-out',
          'top-0',
          navigationSizing.navbarZIndex,
          isVisible ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'bg-black/20 backdrop-blur-lg' : 'bg-transparent'
        )}
      >
        <Container>
          <div className={cn('flex items-center justify-between', navigationSizing.navbarHeight)}>
            <motion.div
              animate={{
                opacity: !isDesktop && isMobileMenuOpen ? 0.3 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <Logo
                size="lg"
                colorScheme={logoColorScheme}
                enableHover
                showDropShadow
                animated={false}
                href="/"
              />
            </motion.div>

            {isDesktop && (
              <nav
                className={cn('flex items-center', navigationSizing.desktopLinkSpacing)}
                aria-label="Main navigation"
              >
                {navItems.map(({ href, label }) => {
                  const isActive =
                    href === '/blog' ? isBlogPathActive(pathname) : isPathActive(pathname, href);

                  return (
                    <NavLink
                      key={href}
                      href={href}
                      label={label}
                      isActive={isActive}
                      variant={navLinkVariant as 'desktop-light' | 'desktop-dark'}
                    />
                  );
                })}
              </nav>
            )}

            {!isDesktop && (
              <div ref={menuTriggerRef} className="relative">
                <HamburgerButton
                  isOpen={isMobileMenuOpen}
                  onClick={toggleMobileMenu}
                  variant={hamburgerVariant as 'light' | 'dark' | 'hero-overlay'}
                />
              </div>
            )}
          </div>
        </Container>
      </nav>

      <MobileMenu
        isOpen={!isDesktop && isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        pathname={pathname}
        isPathActive={isPathActive}
        isBlogPathActive={isBlogPathActive}
        anchorRef={menuTriggerRef as React.RefObject<HTMLElement>}
        isHomePage={isHomePage}
      />
    </>
  );
};
