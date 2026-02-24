import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Banknote, Building2, CheckCircle2, MapPin, Store, Wallet, Zap } from "lucide-react";

const BusinessesPage = () => {
  useEffect(() => {
    document.title = "Bitcoin for Businesses - Stacked";

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
      "Bitcoin for Businesses by Stacked helps Kiwi merchants reduce payment costs, settle faster, and attract premium customers."
    );
    upsertCanonical("https://stackedbitcoin.com/solutions/bitcoin-for-businesses");

    const schemaId = "businesses-page-schema";
    const old = document.getElementById(schemaId);
    if (old) old.remove();

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Stacked Bitcoin for Businesses",
      provider: {
        "@type": "Organization",
        name: "Stacked",
        url: "https://stackedbitcoin.com",
      },
      areaServed: "NZ",
      serviceType: "Bitcoin payment acceptance and merchant settlement",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "NZD",
        description: "No setup fee and no long-term contracts",
      },
    });
    document.head.appendChild(script);

    return () => {
      const inserted = document.getElementById(schemaId);
      if (inserted) inserted.remove();
    };
  }, []);

  const benefits = [
    {
      icon: Store,
      title: "Attract a Premium Segment",
      text: "Bitcoin users are loyal, global and growing. Get discovered by customers actively seeking businesses that accept Bitcoin.",
    },
    {
      icon: Building2,
      title: "Set Your Business Apart",
      text: "Accepting Bitcoin positions your brand as modern, independent, and future-focused.",
    },
    {
      icon: Banknote,
      title: "Improve Cash Flow",
      text: "Reduce payment friction and settle quickly. Receive Bitcoin or NZD on your preferred timeline.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Register with Stacked",
      text: "Create your merchant account and verify business details in minutes.",
    },
    {
      step: "02",
      title: "Configure Your Setup",
      text: "Use mobile, checkout counter flows, or payment links. Choose Bitcoin or NZD settlement preferences.",
    },
    {
      step: "03",
      title: "Accept Bitcoin Payments",
      text: "Customers pay with any Lightning wallet while you receive fast, low-cost payment settlement.",
    },
  ];

  const merchantBenefits = [
    "No setup fees to start accepting payments.",
    "Use mobile-first tools; dedicated PoS hardware is optional.",
    "No long-term contracts and no lock-in.",
    "Lower payment friction with Lightning.",
    "Flexible settlement into Bitcoin or NZD.",
    "Built for Kiwi businesses of all sizes.",
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
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-primary text-xl md:text-2xl font-semibold mb-3">Bitcoin for Businesses</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight mb-5">
                Differentiate your business with <span className="text-white">Bitcoin</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-5">
                Attract premium customers. Lower costs. Strengthen cash flow.
              </p>
              <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto mb-8">
                Join innovative New Zealand businesses using Bitcoin to reduce checkout friction, improve payment
                reliability, and build long-term resilience.
              </p>
              <a href="https://app.lightningpay.nz/auth/register?landing=/merchant" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-base inline-flex items-center justify-center leading-none">
                  Get Started with Bitcoin for Business
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-5 md:gap-6">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="rounded-xl border border-border bg-background p-5 md:p-6">
                  <benefit.icon className="w-7 h-7 text-primary mb-3" />
                  <h2 className="text-xl font-bold text-primary mb-2">{benefit.title}</h2>
                  <p className="text-sm md:text-base text-foreground">{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Get your business live on Bitcoin payments in three steps.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
              {steps.map((item) => (
                <article key={item.step} className="rounded-xl border border-border bg-card p-5 md:p-6">
                  <p className="text-primary text-sm font-bold mb-2">Step {item.step}</p>
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-foreground">{item.text}</p>
                </article>
              ))}
            </div>

            <p className="text-center text-foreground text-base md:text-lg mt-8">
              Get started in minutes. No long contracts. No setup fee.
            </p>
          </div>
        </section>

        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 lg:p-10">
              <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Merchant Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {merchantBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="rounded-xl border border-border bg-card p-6 md:p-8 lg:p-10">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h2 className="text-primary text-2xl md:text-3xl font-bold mb-2">Bitcoin Basin Initiative</h2>
                  <p className="text-sm md:text-base text-foreground">
                    We’re supporting Queenstown and the Southern Lakes region with hands-on business onboarding,
                    practical merchant tooling, and real local adoption support.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="https://app.lightningpay.nz/auth/register?landing=/merchant" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center leading-none">
                    Start Accepting Bitcoin
                  </Button>
                </a>
                <a href="/wallet">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center leading-none">
                    Explore Wallet Tools <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessesPage;
