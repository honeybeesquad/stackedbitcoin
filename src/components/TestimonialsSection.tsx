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
    <section id="reviews" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg font-semibold text-foreground">Excellent</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-muted-foreground">4.7 out of 5</span>
        </div>
        <p className="text-center text-muted-foreground mb-12">
          Based on 29+ reviews on Trustpilot
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-semibold text-muted-foreground">
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
