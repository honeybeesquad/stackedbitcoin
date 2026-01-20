import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import phoneMockup from "@/assets/phone-mockup.png";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Stack sats.{" "}
              <span className="text-primary">Build wealth.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              New Zealand's most trusted Bitcoin-only platform. Buy, sell, and hold Bitcoin with the lowest fees and lightning-fast transactions.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 px-4 bg-card border-border"
              />
              <Button size="lg" className="h-12 px-8 gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              ★ Rated 4.7/5 on Trustpilot · Award-winning support
            </p>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <img
                src={phoneMockup}
                alt="Stacked Bitcoin Wallet App"
                className="relative z-10 w-72 md:w-80 lg:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
