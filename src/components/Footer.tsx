import logoWideDark from "@/assets/logo-wide-dark.png";

const Footer = () => {
  return (
    <footer className="py-10 md:py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img 
                src={logoWideDark} 
                alt="Stacked" 
                className="h-8 w-auto"
              />
            </a>
            <p className="text-xs md:text-sm text-muted-foreground">
              New Zealand's trusted Bitcoin-only platform. Building financial freedom, one sat at a time.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Product</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Buy Bitcoin</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sell Bitcoin</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Auto Stack</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AML Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2024 Stacked. All rights reserved. Formerly Lightning Pay.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            Bitcoin-only. New Zealand made. 🇳🇿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
