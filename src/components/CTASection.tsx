import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-background mb-3 md:mb-4">
          Ready to start stacking?
        </h2>
        <p className="text-sm md:text-base text-background/70 mb-6 md:mb-8 max-w-xl mx-auto px-4">
          Join thousands of Kiwis who are building their Bitcoin future. Start with as little as $10.
        </p>
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg w-full sm:w-auto"
        >
          Get Started with Stacked
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
