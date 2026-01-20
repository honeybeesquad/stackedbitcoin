import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
          Ready to start stacking?
        </h2>
        <p className="text-background/70 mb-8 max-w-xl mx-auto">
          Join thousands of Kiwis who are building their Bitcoin future. Start with as little as $10.
        </p>
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 h-14 px-8 text-lg"
        >
          Get Started with Stacked
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
