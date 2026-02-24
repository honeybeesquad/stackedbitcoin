import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import walletMockup from "@/assets/Wallet mockup.png";
import { ArrowRight, Banknote, ShieldCheck, Store, Wallet, Wrench, Zap } from "lucide-react";

const WalletPage = () => {
  useEffect(() => {
    document.title = "Stacked Wallet - Self-Custody Bitcoin Wallet for New Zealand";

    const upsertMeta = (name: string, content: string) => {
      let el = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const upsertCanonical = (href: string) => {
      let el = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    upsertMeta(
      "description",
      "Stacked Wallet makes it easy for New Zealanders to buy, sell, save, and spend Bitcoin with self-custody, Lightning and on-chain support."
    );
    upsertCanonical("https://stackedbitcoin.com/wallet");

    const schemaId = "wallet-page-schema";
    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Stacked Wallet",
      applicationCategory: "FinanceApplication",
      operatingSystem: "iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NZD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        bestRating: "5",
        ratingCount: "29",
      },
      publisher: {
        "@type": "Organization",
        name: "Stacked",
        url: "https://stackedbitcoin.com",
      },
    });
    document.head.appendChild(script);

    return () => {
      const inserted = document.getElementById(schemaId);
      if (inserted) inserted.remove();
    };
  }, []);

  const corePillars = [
    {
      icon: ShieldCheck,
      title: "Self Custody",
      description:
        "Spark state-chain wallet with unilateral exit, maintaining strong user security with a seamless mobile experience.",
    },
    {
      icon: Zap,
      title: "Lightning + On-chain",
      description:
        "Use Lightning for fast, low-cost transfers and on-chain rails when moving long-term savings to cold storage.",
    },
    {
      icon: ArrowRight,
      title: "Buy and Sell",
      description:
        "Buy with NZD and sell back to NZD in a few taps, without address copy-paste friction.",
    },
  ];

  const featureCards = [
    { icon: Wallet, title: "Buying", text: "Stack Bitcoin savings at your own pace directly from your Stacked account." },
    { icon: Banknote, title: "Selling", text: "Move from Bitcoin to NZD quickly when you need liquidity." },
    { icon: Zap, title: "Bitcoin Lightning", text: "Fast, reliable, low-cost sending and receiving for everyday stacking." },
    { icon: ArrowRight, title: "On-chain", text: "Send to your own cold storage whenever you choose." },
    { icon: Store, title: "Spend", text: "Find and pay Bitcoin-friendly merchants with confidence." },
    { icon: ShieldCheck, title: "Control", text: "You stay in control, with unilateral exit available from Spark state-chain." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Header />

      <main id="main-content" className="pt-28 md:pt-32">
        <section className="pb-12 md:pb-16 lg:pb-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
              <div className="lg:max-w-2xl lg:justify-self-end lg:pr-2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight mb-5">
                  The Stacked Wallet.
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground leading-tight mb-5">
                  Stack, save, send and spend Bitcoin.
                </p>
                <p className="text-base md:text-lg text-foreground mb-6 max-w-xl">
                  Early beta release available now. Built for New Zealand Bitcoiners who want self-custody, speed,
                  and simplicity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-3 justify-start">
                  <a
                    href="https://testflight.apple.com/join/PdR41js4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] leading-tight">Join on</div>
                      <div className="text-sm font-semibold leading-tight">TestFlight</div>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=nz.lightningpay.wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] leading-tight">GET IT ON</div>
                      <div className="text-sm font-semibold leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Beta notice: please use small amounts while testing.
                </p>
              </div>

              <div className="flex justify-center lg:justify-self-start lg:-ml-2">
                <img
                  src={walletMockup}
                  alt="Stacked Wallet app interface on mobile"
                  className="w-72 sm:w-80 md:w-96 lg:w-[480px] drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {corePillars.map((pillar) => (
                <article key={pillar.title} className="rounded-xl border border-border bg-background p-5 md:p-6">
                  <pillar.icon className="w-7 h-7 text-primary mb-3" />
                  <h2 className="text-xl font-bold text-primary mb-2">{pillar.title}</h2>
                  <p className="text-sm md:text-base text-foreground">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4">Wallet Features</h2>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Buying, selling, stacking, saving and spending made simple.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {featureCards.map((feature) => (
                <article key={feature.title} className="rounded-xl border border-border bg-card p-5 md:p-6">
                  <feature.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm md:text-base text-foreground">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
              <div className="shrink-0 rounded-lg bg-primary/10 p-3">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">What&apos;s under the hood?</h2>
                <p className="text-sm md:text-base text-foreground">
                  Stacked Wallet is built with Breez SDK to deliver robust Lightning capabilities with a smooth mobile UX.
                </p>
              </div>
              <a href="https://breez.technology/sdk/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 pt-[1px]">
                  Learn about Breez <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WalletPage;
