import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import phoneMockup from "@/assets/phone-mockup.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Shows second on mobile, first on desktop */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 md:mb-6">
              Stack sats.{" "}
              <span className="text-primary">Build wealth.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8">
              New Zealand's most trusted Bitcoin-only platform. Buy, sell, and hold Bitcoin with the lowest fees and lightning-fast transactions.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 px-4 bg-card border-border text-base"
              />
              <Button size="lg" className="h-12 px-6 md:px-8 gap-2 w-full sm:w-auto">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ★ Rated 4.7/5 on Trustpilot · Award-winning support
            </p>
          </div>

          {/* Phone Mockup - Shows first on mobile */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <img
                src={phoneMockup}
                alt="Stacked Bitcoin Wallet App"
                className="relative z-10 w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
