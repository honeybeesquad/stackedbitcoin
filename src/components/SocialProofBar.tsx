import { Zap, Shield, Smartphone, Building } from "lucide-react";

const SocialProofBar = () => {
  const stats = [
    { value: "4.7/5", label: "Trustpilot Rating" },
    { value: "30B", label: "Sats Monthly Volume" },
    { value: "1000s", label: "Trusted Kiwis" },
    { value: "2024", label: "Established" },
  ];

  const features = [
    { icon: Building, label: "Open Banking Payments" },
    { icon: Zap, label: "Lightning Fast" },
    { icon: Shield, label: "Self Custody" },
    { icon: Smartphone, label: "Mobile App" },
  ];

  return (
    <section className="py-8 md:py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        {/* Payment methods - scrollable on mobile */}
        <div className="flex justify-start md:justify-center items-center gap-6 md:gap-8 lg:gap-16 mb-8 md:mb-10 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground flex-shrink-0">
              <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-xs md:text-sm font-medium whitespace-nowrap">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8 md:mb-10" />

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
