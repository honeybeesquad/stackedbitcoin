import { useEffect, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import temporaryLogo from "@/assets/formerly-logo.png";

interface NavigationItem {
  label: string;
  href: string;
  onClick?: () => void;
}

interface NavigationDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  navigationItems: NavigationItem[];
  className?: string;
}

/**
 * NavigationDrawer component that provides a sliding navigation menu
 * with comprehensive accessibility features and responsive design.
 */
export const NavigationDrawer = ({
  isOpen,
  onOpenChange,
  navigationItems,
  className,
}: NavigationDrawerProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle escape key and focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };

    // Focus the close button when drawer opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    document.addEventListener("keydown", handleKeyDown);
    
    // Prevent body scroll when drawer is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onOpenChange]);

  // Handle navigation item clicks
  const handleNavigationClick = (item: NavigationItem) => {
    item.onClick?.();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`md:hidden p-2 -mr-2 hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="navigation-drawer"
        >
          <Menu className="w-6 h-6 text-foreground" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      
      <SheetContent
        side="left"
        id="navigation-drawer"
        className="w-[300px] sm:w-[400px] bg-background border-r border-border"
        aria-labelledby="navigation-title"
        aria-describedby="navigation-description"
      >
        <SheetHeader className="text-left">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <img
              src={temporaryLogo}
              alt="Stacked"
              className="h-[47px] w-auto max-w-[221px]"
            />
            <SheetTitle id="navigation-title" className="text-lg font-semibold">
              Navigation
            </SheetTitle>
          </div>
          <SheetDescription id="navigation-description" className="sr-only">
            Main navigation menu with links to different sections of the site
          </SheetDescription>
        </SheetHeader>

        <nav className="flex flex-col gap-1 mt-6" role="navigation" aria-label="Main navigation">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="justify-start h-auto py-3 px-4 text-[#D9F3F1] hover:text-white hover:bg-secondary/50 focus:bg-secondary/50 focus:text-white transition-colors"
              onClick={() => handleNavigationClick(item)}
              asChild
            >
              <a
                href={item.href}
                className="w-full text-left"
              >
                {item.label}
              </a>
            </Button>
          ))}
        </nav>

        <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-center text-[#D9F3F1] hover:text-white hover:bg-secondary/50 focus:bg-secondary/50 focus:text-white"
            onClick={() => {
              onOpenChange(false);
              // Handle login action here
            }}
          >
            Log in
          </Button>
          <Button
            className="w-full justify-center bg-teal-500 hover:bg-teal-600 text-white focus:bg-teal-600 pt-[1px]"
            onClick={() => {
              onOpenChange(false);
              // Handle get started action here
            }}
          >
            Get Started
          </Button>
        </div>

        <Button
          ref={closeButtonRef}
          variant="ghost"
          size="sm"
          className="absolute right-4 top-4 p-2 hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onOpenChange(false)}
          aria-label="Close navigation menu"
        >
          ×
        </Button>
      </SheetContent>
    </Sheet>
  );
};
