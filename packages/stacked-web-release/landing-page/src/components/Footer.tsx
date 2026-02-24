import temporaryLogo from "@/assets/formerly-logo.png";
import { Bitcoin, Building2, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 md:py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img 
                src={temporaryLogo} 
                alt="Stacked" 
                className="h-[52px] w-auto max-w-[312px]"
              />
            </a>
            <p className="text-xs md:text-sm text-foreground">
              New Zealand's most trusted Bitcoin-only exhange and payments platform.
            </p>
            <div className="mt-5 space-y-3 text-xs md:text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Bitcoin className="w-4 h-4 text-primary" />
                <span>Est. 796463</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                <span>NZBN: 9429051417789</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@stackedbitcoin.com</span>
              </div>
              <p className="leading-relaxed">
                Registered Financial Services Provider: FSP1005773
              </p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-primary mb-3 md:mb-4 text-sm md:text-base">Products</h4>
            <ul className="space-y-2 text-xs md:text-sm text-foreground">
              <li><a href="/#exchange" className="hover:text-foreground transition-colors">Exchange</a></li>
              <li><a href="/#autostack" className="hover:text-foreground transition-colors">Autostack</a></li>
              <li><a href="/solutions/bitcoin-for-businesses" className="hover:text-foreground transition-colors">Business</a></li>
              <li><a href="/wallet" className="hover:text-foreground transition-colors">Wallet</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-primary mb-3 md:mb-4 text-sm md:text-base">About</h4>
            <ul className="space-y-2 text-xs md:text-sm text-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/about#news" className="hover:text-foreground transition-colors">News</a></li>
              <li><a href="/partners" className="hover:text-foreground transition-colors">Partners</a></li>
              <li><a href="mailto:support@stackedbitcoin.com" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-primary mb-3 md:mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 text-xs md:text-sm text-foreground">
              <li><a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="/otc-terms" className="hover:text-foreground transition-colors">OTC Terms</a></li>
              <li><a href="/fees-and-limits" className="hover:text-foreground transition-colors">Fees and Limits</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-foreground text-center md:text-left">
            © 2024 Stacked. All rights reserved. Formerly Lightning Pay.
          </p>
          <p className="text-xs md:text-sm text-foreground">
            Bitcoin-only. New Zealand made. 🇳🇿
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
