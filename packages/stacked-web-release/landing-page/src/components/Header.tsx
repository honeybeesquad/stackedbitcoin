import { Button } from "@/components/ui/button";
import { MobileNavigation } from "@/components/MobileNavigation";
import temporaryLogo from "@/assets/formerly-logo.png";

const Header = () => {
  // Navigation items configuration
  const navigationItems = [
    { label: "Businesses", href: "/solutions/bitcoin-for-businesses" },
    { label: "Wallet", href: "/wallet" },
    { label: "Partners", href: "/partners" },
    { label: "About", href: "/about" },
    { label: "Support", href: "/#help" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          {/* Mobile Navigation */}
          <MobileNavigation navigationItems={navigationItems} />
          
          {/* Logo - Desktop */}
          <a href="/" className="hidden md:flex items-center">
            <img
              src={temporaryLogo}
              alt="Stacked"
              className="h-[52px] md:h-[62px] w-auto"
            />
          </a>
          
          {/* Logo - Mobile (Icon) */}
          <a href="/" className="flex md:hidden items-center ml-auto mr-4">
            <img
              src={temporaryLogo}
              alt="Stacked"
              className="h-[36px] w-auto max-w-[182px]"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm lg:text-base text-white hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Log in
            </Button>
            <Button 
              size="sm" 
              className="text-sm bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pt-[1px]"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
