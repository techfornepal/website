'use client';

import { useState, useEffect, useCallback } from 'react';

interface NavigationState {
  isScrolled: boolean;
  isVisible: boolean;
  lastScrollY: number;
  isMobileMenuOpen: boolean;
}

interface UseNavigationReturn extends NavigationState {
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
}

/**
 * Centralized navigation state management hook\
 * Handles scroll detection, navbar visibility, and mobile menu state
 */
export const useNavigation = (): UseNavigationReturn => {
  const [state, setState] = useState<NavigationState>({
    isScrolled: false,
    isVisible: true,
    lastScrollY: 0,
    isMobileMenuOpen: false
  });

  // mobile menu controls
  const openMobileMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMobileMenuOpen: true }));
    // preventing body scroll when menu is open
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeMobileMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMobileMenuOpen: false }));
    // restoring body scroll
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMobileMenuOpen: !prev.isMobileMenuOpen }));
    // toggling body scroll based on menu state
    if (typeof window !== 'undefined') {
      document.body.style.overflow = state.isMobileMenuOpen ? 'unset' : 'hidden';
    }
  }, [state.isMobileMenuOpen]);

  // scroll direction and navbar visibility logic
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - state.lastScrollY) < 5) {
        ticking = false;
        return;
      }

      setState(prev => ({
        ...prev,
        isVisible: scrollY > prev.lastScrollY ? false : true,
        isScrolled: scrollY > 50,
        lastScrollY: scrollY > 0 ? scrollY : 0
      }));
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [state.lastScrollY]);

  // closing mobile menu on escape key
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && state.isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (state.isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [state.isMobileMenuOpen, closeMobileMenu]);

  // cleaning up body overflow on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'unset';
      }
    };
  }, []);

  return {
    ...state,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu
  };
};