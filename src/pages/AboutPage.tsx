import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import robImage from "@/assets/team/rob.png";
import brandonImage from "@/assets/team/brandon.jpeg";
import simonImage from "@/assets/team/simon.png";
import chloeImage from "@/assets/team/chloe.png";
import nellImage from "@/assets/team/nell.jpeg";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Stacked - Bitcoin-Only in New Zealand";

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
      "Meet the team behind Stacked, New Zealand's Bitcoin-only exchange and payments platform."
    );
    upsertCanonical("https://stackedbitcoin.com/about");
  }, []);

  const team = [
    {
      name: "Rob",
      role: "CTO",
      image: robImage,
      bio: "Bitcoin Bolt Card open-source developer, co-founder and systems design engineer.",
    },
    {
      name: "Brandon",
      role: "CEO",
      image: brandonImage,
      bio: "Product leader focused on practical Bitcoin and Lightning adoption in New Zealand.",
    },
    {
      name: "Simon",
      role: "CRO",
      image: simonImage,
      bio: "Entrepreneur and Bitcoin advocate focused on growth, partnerships, and GTM.",
    },
    {
      name: "Chloe",
      role: "Development and Design",
      image: chloeImage,
      bio: "Product and engineering execution across web and mobile experiences.",
    },
    {
      name: "Nell Hunter",
      role: "Ambassador",
      image: nellImage,
      bio: "Helping everyday people learn about Bitcoin with practical, trusted guidance.",
    },
  ];

  const news = [
    { title: "What would actually kill Bitcoin?", date: "21 Feb, 2026" },
    { title: "Why Bitcoin Traders Keep Using Leverage (And Why You Shouldn’t)", date: "9 Feb, 2026" },
    { title: "The Rise of the Machines: Bitcoin-Powered AI Agents Are Here", date: "3 Feb, 2026" },
    { title: "Is the 4-year cycle finally dead?", date: "26 Jan, 2026" },
    { title: "Bitcoin Treasuries: Diamond Hands or Heavy Bags?", date: "19 Jan, 2026" },
    { title: "The Lightning Pay Wallet Beta: Faster, Simpler, and More Reliable", date: "17 Nov, 2025" },
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
                About Stacked
              </h1>
              <p className="text-base md:text-lg text-foreground mb-4">
                We are a New Zealand team building a Bitcoin-only exchange and payments platform with self-custody at
                the core.
              </p>
              <p className="text-base md:text-lg text-foreground mb-4">
                We started from a simple problem: payments in NZ are expensive and complicated for merchants and
                customers. Stacked exists to make Bitcoin practical for everyday savings, spending, and business use.
              </p>
              <p className="text-base md:text-lg text-foreground max-w-3xl mx-auto mb-8">
                Our mission is straightforward: help people and businesses connect to Bitcoin and Lightning with clear
                pricing, simple products, and real support.
              </p>
              <a href="https://app.lightningpay.nz/auth/register" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7 text-base inline-flex items-center justify-center leading-none">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-card border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4">Team</h2>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Putting in the proof of work behind the scenes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {team.map((member) => (
                <article key={member.name} className="rounded-xl border border-border bg-background p-5 md:p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4 border border-border"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm md:text-base text-foreground font-semibold mb-2">{member.role}</p>
                  <p className="text-sm md:text-base text-foreground">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4">News</h2>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Product updates, announcements, and Bitcoin commentary.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {news.map((item) => (
                <article key={item.title} className="rounded-xl border border-border bg-card p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-foreground">{item.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
