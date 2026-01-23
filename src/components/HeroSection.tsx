import heroVideo from "@/assets/hero-video.mp4";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const words = ["MONEY", "SAVINGS", "SPENDING", "INVESTING", "FREEDOM", "PRIVACY", "FINANCE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary leading-none mb-8 md:mb-12 tracking-tight">
            BITCOIN IS BETTER <span style={{ color: '#D9F3F1' }}>{words[currentWordIndex]}</span>.
          </h1>

          {/* Video */}
          <div className="relative mb-8 md:mb-12">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                className="relative z-10 w-40 sm:w-48 md:w-56 lg:w-64 rounded-3xl drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Subheadline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent leading-tight mb-4 md:mb-6">
            Stack sats with Stacked.
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl">
            New Zealand's most trusted Bitcoin-only platform. Buy, sell, and hold Bitcoin with the lowest fees and lightning-fast transactions.
          </p>

          {/* Email Signup Form */}
          <form className="flex flex-col sm:flex-row gap-3 mb-4 md:mb-6 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 max-w-xs px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>
          </form>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] leading-tight">GET IT ON</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
