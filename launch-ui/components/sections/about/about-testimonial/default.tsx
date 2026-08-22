"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import Link from "next/link";



interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorRole: string;
  authorCompany: string;
  authorImage: string;  
}

export default function TestimonialQuote({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    
    {
      id: 1,
      quote: "At AliAzad Networks, our vision is clear: to harness the power of AI and automation to solve real-world problems at scale. From startups to enterprises, we empower organizations to innovate, optimize, and lead in a rapidly changing digital world. Each product we build reflects our commitment to intelligence, impact, and integrity.",
      authorName: "Tauqeer Ali",
      authorRole: "Founder & CEO",
      authorCompany: "AliAzad Networks",
      authorImage: "/assets/images/client/tauqeer-ali.jpeg",
    },
    {
      id: 2,
      quote: "At AliAzad Networks, we turn AI vision into reliable, scalable execution. We streamline processes, optimize deployments, and ensure every solution delivers real impact with integrity on time, at scale.",
      authorName: "Armaan Mehdi",
      authorRole: "Director of Operations",
      authorCompany: "AliAzad Networks",
      authorImage: "/assets/images/client/armaan.jpeg",
    },
    {
      id: 3,
      quote: "At AliAzad Networks, we build AI that's robust, scalable, and production-ready. From architecture to deployment, our focus is on clean code, smart automation, and systems that perform under pressure delivering intelligence you can trust.",
      authorName: "Hamdan Ahmad",
      authorRole: "Technical Head",
      authorCompany: "AliAzad Networks",
      authorImage: "/assets/images/client/hamdan-ahmed.jpg",
    },
  ];

  const current = testimonials[activeIndex];

  return (
    <Section className={cn("py-16 md:py-24 bg-primary", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col items-center justify-center w-full text-primary-foreground">
                    
          {/* Quote */}
          <div className="flex flex-col items-center max-w-4xl">
            <p className="text-xl md:text-xl text-center leading-relaxed">
              "{current.quote}"
            </p>
            
            {/* Author */}
            <div className="flex items-center gap-3 mt-8">
              <img
                src={current.authorImage}
                alt={current.authorName}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary-foreground/20"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-lg text-primary-foreground">
                  {current.authorName}
                </p>
                <p className="text-sm text-primary-foreground/80">
                  {current.authorRole} @ {current.authorCompany}
                </p>
              </div>
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 md:w-4 md:h-4 rounded-full transition-all cursor-pointer",
                  index === activeIndex
                    ? "bg-primary-foreground"
                    : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}