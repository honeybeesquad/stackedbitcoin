import { Banknote, CreditCard, Zap, Shield, Smartphone } from "lucide-react";

const SocialProofBar = () => {
  const stats = [
    { value: "4.7/5", label: "Trustpilot Rating" },
    { value: "1%", label: "Low Trading Fee" },
    { value: "2024", label: "Startup of the Year" },
    { value: "24/7", label: "Lightning Network" },
  ];

  const features = [
    { icon: Banknote, label: "Bank Transfer" },
    { icon: CreditCard, label: "POLi Payment" },
    { icon: Zap, label: "Lightning Fast" },
    { icon: Shield, label: "Self Custody" },
    { icon: Smartphone, label: "Mobile App" },
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        {/* Payment methods */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-muted-foreground">
              <feature.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* Stats */}
        <p className="text-center text-muted-foreground mb-8">
          New Zealand's Bitcoin-only platform since 2021
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
