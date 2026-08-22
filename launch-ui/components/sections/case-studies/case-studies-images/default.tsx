"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

export default function MarqueeCards({ className }: { className?: string }) {
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      title: "AI-Powered Healthcare System",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
    },
    {
      title: "EdTech Learning Platform",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format",
    },
    {
      title: "IoT Agriculture Monitoring",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format",
    },
    {
      title: "Blockchain E-Voting System",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format",
    },
    {
      title: "AI Recruitment SaaS",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format",
    },
    {
      title: "Deep Learning Research",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format",
    },
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <Section className={cn("py-16 md:py-24 bg-background overflow-hidden", className)}>
      <div className="max-w-container mx-auto px-4">

        {/* Marquee Container */}
        <div 
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          
          {/* Marquee */}
          <div 
            className="flex w-fit marquee-inner"
            style={{ 
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: "20s"
            }}
          >
            <div className="flex">
              {duplicatedCards.map((card, index) => (
                <div 
                  key={index} 
                  className="w-64 mx-4 h-80 relative group rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-500 absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <p className="text-white text-lg font-semibold text-center">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
      `}</style>
    </Section>
  );
}