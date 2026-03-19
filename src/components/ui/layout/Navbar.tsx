import React, { useEffect, useRef } from 'react';
import { Container } from './Container';
import { MobileMenu } from '../navigation/MobileMenu';
import { Logo } from '../branding/Logo';
import { HamburgerButton } from '../navigation/HamburgerButton';
import { NavLink } from '../navigation/NavLink';
import { useNavigation } from '@/hooks/useNavigation';
import { useIsDesktop } from '@/hooks/useMediaQuery';
import { cn } from '@/utils/cn';
import { navigationSizing } from '@/utils/responsive';
import { isPathActive, isBlogPathActive } from '@/utils';

interface NavbarProps {
  pathname: string;
}

export const Navbar: React.FC<NavbarProps> = ({ pathname }) => {
  const isDesktop = useIsDesktop();

  const { isScrolled, isVisible, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
    useNavigation();

  const menuTriggerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/get-involved', label: 'Get Involved' },
  ];

  useEffect(() => {
    if (isDesktop && isMobileMenuOpen) {
      closeMobileMenu();
    }
  }, [closeMobileMenu, isDesktop, isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          'fixed right-0 left-0 transition-[transform,background-color] duration-300 ease-in-out',
          'top-0',
          navigationSizing.navbarZIndex,
          isVisible ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'bg-[color:var(--navbar-scroll-bg)] backdrop-blur-md' : 'bg-transparent'
        )}
      >
        <Container>
          <div className={cn('flex items-center justify-between', navigationSizing.navbarHeight)}>
            <div className={pathname === '/' ? 'invisible' : undefined}>
              <Logo size="lg" colorScheme="dark-nav" enableHover showDropShadow={false} href="/" />
            </div>

            <nav
              className={cn(
                navigationSizing.desktopNavVisibility,
                navigationSizing.desktopLinkSpacing
              )}
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
                    variant="desktop-dark"
                  />
                );
              })}
            </nav>

            <div
              ref={menuTriggerRef}
              className={cn(
                navigationSizing.mobileTriggerVisibility,
                pathname === '/' && 'invisible'
              )}
            >
              <HamburgerButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
                variant="dark"
              />
            </div>
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
      />
    </>
  );
};
