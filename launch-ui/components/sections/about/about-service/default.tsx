"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

interface MarqueeTextProps {
  items?: string[];
  speed?: number;
  className?: string;
}

export default function MarqueeText({
  items = [
    "Enterprice AI Solution",
    "Startup MVPs",
    "LLM Integration",
    "RAG Systems",
    "SaaS Product Development",
    "Cloud Infrastructure",
    "AI Chatbots",
    "Data Pipelines",
    "LangChain · FastAPI",
    "Predictive Analytics",
    "Process Automation",
    "GPT-4o · Claude · Gemini",
  ],
  speed = 80,
  className,
}: MarqueeTextProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const pausedRef = useRef(false);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const totalWidth = scroller.scrollWidth / 2;
    let currentPosition = 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      if (!pausedRef.current) {
        const elapsed = (timestamp - startTimeRef.current) / 1000;
        const distance = elapsed * speed;
        currentPosition = -distance % totalWidth;
        scroller.style.transform = `translateX(${currentPosition}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
    startTimeRef.current = 0;
  };

  return (
    <Section className={cn("py-8 md:py-12 bg-background overflow-hidden", className)}>
      <div className="relative w-full mx-auto select-none">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent"></div>
        
        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 h-full w-5 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent"></div>
        
        {/* Marquee Container */}
        <div 
          className="overflow-hidden w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={scrollerRef}
            className="flex will-change-transform whitespace-nowrap"
          >
            {duplicatedItems.map((item, index) => (
              <span
                key={index}
                className="inline-block text-lg md:text-xl font-medium text-muted-foreground hover:text-foreground transition-colors mx-4 md:mx-12"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}