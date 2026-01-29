import featureWallet from "@/assets/feature-wallet.png";
import featureExchange from "@/assets/feature-exchange.jpg";
import featureAutostack from "@/assets/feature-autostack.jpg";
import featureBillpay from "@/assets/feature-billpay.jpg";

const FeaturesSection = () => {
  const features = [
    {
      title: "Self Custodial Bitcoin Wallet",
      description: "Your keys, your Bitcoin. Full control of your funds with our secure self-custody wallet. No third parties, no compromises.",
      image: featureWallet,
    },
    {
      title: "Lightning Fast Exchange",
      description: "Buy Bitcoin instantly with the lowest fees in New Zealand. Real-time rates, transparent pricing, and instant settlement.",
      image: featureExchange,
    },
    {
      title: "AutoStack",
      description: "Stack Bitcoin automatically on your schedule. Set it and forget it with recurring purchases that build your holdings over time.",
      image: featureAutostack,
    },
    {
      title: "Bill Pay",
      description: "Pay any NZ bill using your Bitcoin. Convert and pay in one seamless transaction directly from your wallet.",
      image: featureBillpay,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to make bitcoin{" "}
            <span className="text-primary">part of your every day life</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Powerful features designed to make Bitcoin simple, secure, and accessible for every Kiwi.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image in iPhone Frame */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75" />
                  {/* iPhone Frame */}
                  <div className="relative z-10 bg-foreground rounded-[3rem] p-2 shadow-2xl">
                    {/* Inner bezel */}
                    <div className="bg-background rounded-[2.5rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl z-20" />
                      {/* Screen content */}
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-44 sm:w-52 md:w-60 lg:w-68 rounded-[2.5rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
