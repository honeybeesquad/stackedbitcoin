import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Audi",
      rating: 5,
      text: "Highly recommended for both saving bitcoin in lightning as well as cold storage. The fees are slightly better than its NZ competitor. Bitcoin only, no other drifter pump and dump garbage coins.",
    },
    {
      name: "Cameron",
      rating: 5,
      text: "Love their smash buy feature! I've been using Lightning Pay for the past 8 months. Incredibly easy and lightning fast! The team are amazing people who contribute a lot to the Bitcoin community.",
    },
    {
      name: "Lee",
      rating: 5,
      text: "Receiving sats before the green tick! The best part is getting sats in my wallet before even seeing confirmation on the website. Local company providing much needed innovation to NZ.",
    },
  ];

  return (
    <section id="reviews" className="py-12 md:py-16 lg:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3 md:mb-4">
          <span className="text-base md:text-lg font-semibold text-foreground">Excellent</span>
          <div className="flex gap-0.5 md:gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm md:text-base text-muted-foreground">4.7 out of 5</span>
        </div>
        <p className="text-center text-sm md:text-base text-foreground mb-8 md:mb-12">
          Based on 29+ reviews on Trustpilot
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-5 md:pt-6">
                <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm md:text-base text-foreground mb-3 md:mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-xs md:text-sm font-semibold text-muted-foreground">
                  — {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
