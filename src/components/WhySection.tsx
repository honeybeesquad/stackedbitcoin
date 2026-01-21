import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Headphones } from "lucide-react";

const WhySection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Simplicity",
      description: "Buy, sell and hold Bitcoin from your mobile. No complex trading interfaces – just simple, focused Bitcoin.",
      cta: "Get the app",
      ctaHref: "#",
    },
    {
      icon: Shield,
      title: "Self Custody",
      description: "Your Bitcoin, your keys. We don't hold your funds – they go straight to your wallet where only you control them.",
      cta: "Learn more",
      ctaHref: "#",
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Real humans, based in New Zealand. Get help from our award-winning support team whenever you need it.",
      cta: "Contact us",
      ctaHref: "#",
    },
  ];


  return (
    <section id="why" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground mb-3 md:mb-4">
          Why Stacked?
        </h2>
        <p className="text-center text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          We're Bitcoin-only because we believe in focused simplicity. No altcoin noise, just the hardest money ever created.
        </p>

        {/* Main feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3 md:pb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm md:text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  {feature.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhySection;
