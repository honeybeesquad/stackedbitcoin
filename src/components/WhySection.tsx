import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Shield, Headphones, Zap, Repeat, Wallet } from "lucide-react";

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
      title: "NZ Support",
      description: "Real humans, based in New Zealand. Get help from our award-winning support team whenever you need it.",
      cta: "Contact us",
      ctaHref: "#",
    },
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Network",
      description: "Instant transactions with minimal fees using Bitcoin's Lightning Network.",
    },
    {
      icon: Repeat,
      title: "Auto Stack",
      description: "Set up recurring buys from just $10 and build your stack automatically.",
    },
    {
      icon: Wallet,
      title: "Open Banking",
      description: "Direct NZ bank payments via Akahu – no manual deposits needed.",
    },
  ];

  return (
    <section id="why" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Why Stacked?
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're Bitcoin-only because we believe in focused simplicity. No altcoin noise, just the hardest money ever created.
        </p>

        {/* Main feature cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                  {feature.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional features */}
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
