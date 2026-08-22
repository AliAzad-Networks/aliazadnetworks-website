"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function TeamCarousel({ className }: { className?: string }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const members = [
    {
      name: "Tauqeer Ali",
      role: "Founder & CEO",
      image: "/assets/images/client/tauqeer-ali.jpeg",
      linkedin: "https://www.linkedin.com/in/tauqeerali/",
      twitter: "#",
      github: "#",
    },
    {
      name: "Armaan Mehdi",
      role: "Director of Operations",
      image: "/assets/images/client/armaan.jpeg",
      linkedin: "https://www.linkedin.com/in/armaan-mehdi-986141155/",
      twitter: "https://x.com/tauqeerali01",
      github: "https://github.com/tauqeerali1",
    },
    {
      name: "Hamdan Ahmad",
      role: "Technical Head",
      image: "/assets/images/client/hamdan-ahmed.jpg",
      linkedin: "https://www.linkedin.com/in/hamdan-a-1b0767191/",
      twitter: "#",
      github: "#",
    },
    {
      name: "Neha Gupta",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Vikram Singh",
      role: "Research Analyst",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=600",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  ];

  const getVisibleCount = useCallback(() => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setStartIndex((prev) => Math.min(prev, members.length - newCount));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleCount, members.length]);

  const handlePrev = () => setStartIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => {
    const maxIndex = members.length - visibleCount;
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleMembers = members.slice(startIndex, startIndex + visibleCount);
  const isPrevDisabled = startIndex === 0;
  const isNextDisabled = startIndex >= members.length - visibleCount;

  return (
    <Section className={cn("relative overflow-hidden py-16 md:py-24 bg-muted/30", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Meet Our Team
          </h1>
          <p className="text-base text-black max-w-md mx-auto mt-2">
            A group of engineers, designers, and researchers working together to build reliable digital experiences.
          </p>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={cn(
              "w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all",
              isPrevDisabled
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-muted hover:border-primary/50 cursor-pointer"
            )}
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          <div className="flex gap-5 overflow-visible">
            {visibleMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border hover:border-primary/30 transition-all rounded-xl p-5 w-[280px] sm:w-[300px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[245px] w-full object-cover object-top rounded-lg"
                  loading="lazy"
                />
                <h3 className="text-base font-semibold text-foreground mt-4">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {member.role}
                </p>
                <div className="flex gap-3 mt-4">
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80">
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link href={member.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80">
                    <Github className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={cn(
              "w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all",
              isNextDisabled
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-muted hover:border-primary/50 cursor-pointer"
            )}
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </Section>
  );
}