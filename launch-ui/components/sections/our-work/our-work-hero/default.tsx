"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

export default function HeroAI({ className }: { className?: string }) {
  return (
    <Section className={cn("relative overflow-hidden py-16 md:py-24", className)}>
      {/* Background Pattern */}

      <div className="max-w-container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start flex-1">
            {/* Badge */}
            <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/50 dark:bg-card/50 border border-border backdrop-blur-sm">
                    <div className="relative flex size-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
                    </div>
                    <p className="text-sm text-foreground">50+ AI systems built & deployed · Startups & Entrepreneurs</p>
                </div>
            </div>

            {/* Title */}
            <h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl leading-tight font-medium  max-w-xl mt-4">
              Intelligent AI-Drivien Process Automation Built to Help You Succeed.
            </h1>

            {/* Description */}
            <p className="text-center md:text-left text-sm text-slate-800 max-w-lg mt-4">
              These are production AI systems we designed, engineered, and deployed for startups and entrepreneurs — with the real results they generated.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <Button asChild className="bg-white hover:bg-slate-200 text-black rounded-md px-7 h-11">
                <Link href="https://tally.so/r/Nppjvj">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 border border-slate-600 rounded-md px-6 h-11"
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
              alt="Hero illustration"
              className="max-w-xs sm:max-w-sm lg:max-w-md w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}