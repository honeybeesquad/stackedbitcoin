import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoWideDark from "@/assets/logo-wide-dark.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src={logoWideDark} 
              alt="Stacked" 
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#solutions" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Solutions
            </a>
            <a href="#help" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Help
            </a>
            <a href="#company" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Company
            </a>
            <a href="#wallet" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Wallet
            </a>
            <a href="#partners" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Partners
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
                href="#solutions" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#help" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Help
              </a>
              <a 
                href="#company" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </a>
              <a 
                href="#wallet" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wallet
              </a>
              <a 
                href="#partners" 
                className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-3 px-2 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
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
