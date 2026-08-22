"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Star } from "lucide-react";

export default function TestimonialsGridAlt({ className }: { className?: string }) {
  const testimonials = [
    {
      text: "AliAzad Networks transformed our vision into a reality. Their expertise in AI and web development helped us launch our platform in record time. Highly recommended!",
      name: "Pankaj Kumar",
      role: "Software Engineer",
      company: "Capgemini",
      image: "/assets/images/client/Pankaj.png",
      span: "double",
    },
    {
      text: "Our EdTech platform was delivered ahead of schedule. The team's dedication and technical expertise are unmatched. Highly recommended!",
      name: "Tauseef Nehal",
      role: "Keio Bus",
      company: "Japan",
      image: "/assets/images/client/tauseef-nehal.png",
      span: "single",
    },
    {
      text: "AliAzad Networks created custom tools for my YouTube channel that automated analytics and content scheduling. Highly recommended!",
      name: "Faizan Khan",
      role: "Mission Market",
      company: "Youtber",
      image: "/assets/images/client/faizan.png",
      span: "single",
    },
    {
      text: "The MVP they built for our startup helped us raise seed funding. Their agile approach and regular updates made the process seamless.",
      name: "Venkata Ramana",
      role: "ThinkCA",
      company: "Founder",
      image: "/assets/images/client/venkata.png",
      span: "double",
    },
  ];

  const StarRating = () => (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
      ))}
    </div>
  );

  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-center md:text-left mb-3">
            What Our Clients Say
          </h1>
          <p className="text-sm text-center md:text-left mx-auto md:mx-0">
            Real stories from entrepreneurs, researchers, and founders who trusted us with their projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all",
                item.span === "double" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <StarRating />
              <p className="text-neutral-800 text-sm leading-relaxed mb-8">
                "{item.text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-neutral-800 text-sm font-medium">{item.name}</h3>
                  <p className="text-neutral-800 text-sm">
                    {item.role} - {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}