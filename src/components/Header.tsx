import { Button } from "@/components/ui/button";
import { Bitcoin, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Bitcoin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground">Stacked</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#features" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#why" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Why Bitcoin
            </a>
            <a href="#reviews" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Reviews
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button variant="ghost" size="sm" className="text-sm">Log in</Button>
            <Button size="sm" className="text-sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border py-4 px-4 shadow-lg">
            <div className="flex flex-col gap-1">
              <a 
                href="#features" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#why" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Bitcoin
              </a>
              <a 
                href="#reviews" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                <Button variant="ghost" className="w-full justify-center">Log in</Button>
                <Button className="w-full justify-center">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
