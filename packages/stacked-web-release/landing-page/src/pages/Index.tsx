import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import FeaturesSection from "@/components/FeaturesSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <SocialProofBar />
        <FeaturesSection />
        <TestimonialsSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
