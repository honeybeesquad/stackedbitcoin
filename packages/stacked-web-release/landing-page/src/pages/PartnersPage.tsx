import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PartnersPage = () => {
  useEffect(() => {
    document.title = "Partners - Stacked";

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
      "Stacked partners with trusted Bitcoin-focused companies to help Kiwis secure, manage, and use Bitcoin confidently."
    );
    upsertCanonical("https://stackedbitcoin.com/partners");
  }, []);

  const adviserQuestions = [
    "How can Bitcoin be protected from hacks, theft, or accidental loss?",
    "How can Bitcoin be passed to heirs with clear safeguards?",
    "How can families prepare to inherit and manage Bitcoin confidently?",
    "How can Bitcoin holders access liquidity without selling?",
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight mb-5">
                Partners
              </h1>
              <p className="text-base md:text-lg text-foreground mb-4">
                Stacked partners with trusted Bitcoin-focused providers so New Zealanders can secure, grow, and use
                Bitcoin with confidence.
              </p>
              <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto">
                We only work with teams aligned to practical Bitcoin adoption and long-term self-custody principles.
              </p>
            </div>
          </div>
        </section>

        <section id="bitcoin-adviser" className="py-12 md:py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <article className="rounded-xl border border-border bg-background p-6 md:p-8 lg:p-10">
              <h2 className="text-primary text-3xl md:text-4xl font-bold mb-2">The Bitcoin Adviser</h2>
              <p className="text-sm md:text-base text-foreground mb-4">
                A long-standing Bitcoin advisory firm helping individuals, families, and institutions secure and
                manage Bitcoin for the long term.
              </p>

              <p className="text-sm md:text-base text-foreground mb-4">
                Their work combines collaborative custody, inheritance planning, and practical guidance to reduce key
                person risk and improve long-term operational security.
              </p>

              <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6">
                {adviserQuestions.map((question) => (
                  <div key={question} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-sm md:text-base text-foreground">{question}</p>
                  </div>
                ))}
              </div>

              <a href="https://thebitcoinadviser.com" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center leading-none">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </article>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rounded-xl border border-border bg-card p-6 md:p-8 lg:p-10 text-center">
              <h2 className="text-primary text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
              <p className="text-sm md:text-base text-foreground mb-4">
                We are working with additional providers across secure storage, specialist services, and Bitcoin
                operations tooling to expand support for customers and businesses.
              </p>
              <p className="text-sm md:text-base text-foreground mb-6">
                If your company is aligned with the mission, contact us at{" "}
                <a className="underline hover:text-white" href="mailto:partners@stackedbitcoin.com">
                  partners@stackedbitcoin.com
                </a>
                .
              </p>
              <a href="mailto:partners@stackedbitcoin.com">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center justify-center leading-none">
                  Enquire About Partnership
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

export default PartnersPage;
