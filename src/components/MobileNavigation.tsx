import { useState, useEffect } from "react";
import { NavigationDrawer } from "./NavigationDrawer";
import { HamburgerButton } from "./HamburgerButton";

interface NavigationItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface MobileNavigationProps {
  navigationItems: NavigationItem[];
  className?: string;
}

/**
 * MobileNavigation component that combines hamburger button and navigation drawer
 * with comprehensive accessibility features and responsive behavior.
 */
export const MobileNavigation = ({
  navigationItems,
  className,
}: MobileNavigationProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handle reduced motion preferences
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Close drawer on route change or external events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsDrawerOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDrawerOpen && !target.closest("[data-mobile-nav]")) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDrawerOpen]);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Add navigation items with close handler
  const enhancedNavigationItems = navigationItems.map((item) => ({
    ...item,
    onClick: () => {
      item.onClick?.();
      handleDrawerClose();
    },
  }));

  return (
    <div data-mobile-nav className={className}>
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        navigationItems={enhancedNavigationItems}
        className={prefersReducedMotion ? "transition-none" : ""}
      />
      
      <HamburgerButton
        isOpen={isDrawerOpen}
        onClick={handleDrawerToggle}
        ariaLabel={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
        className={prefersReducedMotion ? "transition-none" : ""}
      />
    </div>
  );
};