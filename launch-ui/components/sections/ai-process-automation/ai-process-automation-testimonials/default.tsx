"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

export default function TestimonialCards({ className }: { className?: string }) {
  const testimonials = [
    {
      image: "/assets/images/client/venkata.png",
      quote: "AliAzad Networks made building our startup MVP an absolute breeze. Delivered on time and exceeded expectations.",
      name: "Venkata Ramana",
      category: "ThinkCA • Founder",
    },
    {
      image: "/assets/images/client/imam-ali.png",
      quote: "Excellent experience. The team quickly fixed backend issues, improved performance, and boosted customer satisfaction.",
      name: "Syed Imam Ali",
      category: "Software Engineer • Samsung",
    },
    {
      image: "/assets/images/client/faizan.png",
      quote: "AliAzad Networks created custom tools for my YouTube channel that automated analytics and content scheduling. Highly recommended!",
      name: "Faizan Khan",
      category: "Mission Market • Youtuber",
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-background px-8", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-black max-w-3xl mx-auto">
            Real feedback from founders, developers and teams building production-ready products.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="max-w-80 w-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[270px] w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card via-card/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="px-5 pb-5 flex-1 flex flex-col">
                <p className="font-medium text-foreground border-b border-border pb-4 flex-1">
                  "{item.quote}"
                </p>
                <p className="mt-4 text-black">— {item.name}</p>
                <p className="text-sm font-medium text-primary mt-1">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}