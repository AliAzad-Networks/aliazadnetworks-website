"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function FeatureShowcase({ className }: { className?: string }) {
  return (
    <Section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="relative mx-auto max-w-7xl">
          {/* Background blur effect */}
          <div className="absolute -z-10 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-primary/30 blur-3xl" />

          {/* Intro text */}
          <p className="text-foreground text-lg text-left max-w-3xl">
            AliAzad Networks helps you build faster by transforming your vision into fully functional, production-ready tech solutions.
          </p>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
            {/* Left larger image */}
            <div className="md:col-span-2">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-4.png"
                alt="Features showcase"
                className="w-full rounded-xl shadow-md"
                loading="lazy"
              />
            </div>

            {/* Right column with image, text and link */}
            <div className="md:col-span-1">
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png"
                alt="Better design"
                className="w-full rounded-xl shadow-md"
                loading="lazy"
              />
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mt-5 leading-tight">
                AI/works<sup>TM</sup>. The breakthrough in how we deliver
              </h3>
              <p className="text-muted-foreground mt-2">
                See how our teams deliver higher-quality systems faster, and at a radically lower cost using AI/works<sup>TM</sup>, Thoughtworks Agentic Development Platform.
              </p>
              <Link
                href={siteConfig.page.about}
                className="group inline-flex items-center gap-1 mt-4 text-primary hover:text-primary/80 transition"
              >
                Learn more about the product
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-0.5 transition-transform"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}