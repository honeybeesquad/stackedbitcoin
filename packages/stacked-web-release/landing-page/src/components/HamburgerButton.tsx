import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  ariaLabel?: string;
}

/**
 * HamburgerButton component with proper ARIA attributes and accessibility features.
 * Provides visual feedback for open/closed states and meets touch target requirements.
 */
export const HamburgerButton = ({
  isOpen,
  onClick,
  className,
  size = "sm",
  variant = "ghost",
  ariaLabel = "Toggle navigation menu",
}: HamburgerButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    onClick();
    setTimeout(() => setIsPressed(false), 150);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={`
        md:hidden p-2 -mr-2 
        min-w-[44px] min-h-[44px] 
        hover:bg-secondary/50 
        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
        transition-all duration-200 ease-in-out
        ${isPressed ? "scale-95" : "scale-100"}
        ${className || ""}
      `}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-controls="navigation-drawer"
      aria-haspopup="dialog"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Menu
          className={`
            w-6 h-6 text-foreground transition-all duration-300 ease-in-out
            ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}
          `}
          aria-hidden="true"
        />
        <X
          className={`
            absolute w-6 h-6 text-foreground transition-all duration-300 ease-in-out
            ${isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"}
          `}
          aria-hidden="true"
        />
      </div>
      <span className="sr-only">
        {isOpen ? "Close navigation menu" : "Open navigation menu"}
      </span>
    </Button>
  );
};