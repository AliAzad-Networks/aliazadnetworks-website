"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function OfferGrid({ className }: { className?: string }) {
  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          
          {/* Large Card - AI-Drivien Process Automation */}
          <div className="col-span-1 lg:col-span-2 overflow-hidden flex flex-col justify-between row-span-1 lg:row-span-2 min-h-[380px] lg:h-full bg-gradient-to-br from-primary to-primary/80 relative">
            <div className="px-6 md:px-8 absolute bottom-6 md:bottom-8 z-20 w-full lg:w-[70%]">
              <h4 className="text-xl font-semibold text-white">AI-Drivien Process Automation</h4>
              <p className="text-sm mt-2 text-white/90">
                Custom software, web apps, and IT infrastructure for startups and businesses.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href={siteConfig.page.AiProcessAutomation}>
                  Explore Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/059/916/666/non_2x/businessman-in-suit-holding-laptop-and-giving-thumbs-up-free-png.png"
              alt="AI-Drivien Process Automation"
              className="w-[280px] md:w-[350px] absolute bottom-0 left-1/2 transform -translate-x-1/2"
              loading="lazy"
            />
          </div>

          {/* Medium Card - Scalable Digital Transformation */}
          <div className="bg-gradient-to-br from-primary to-primary/70 col-span-1 lg:col-span-2 flex justify-between items-center px-6 overflow-hidden relative min-h-[220px]">
            <div className="absolute bottom-5 left-5 z-20 w-[70%] lg:w-[50%]">
              <h4 className="text-lg font-semibold text-white">MVP Starter Package</h4>
              <p className="text-xs mt-2 text-white/90">
                One focused feature built end-to-end — chatbot, automation script, dashboard, or API.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-3 border-white text-white hover:bg-white hover:text-primary bg-transparent text-sm"
              >
                <Link href={siteConfig.page.CustomSoftwareDevelopment}>
                  Learn More
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </Button>
            </div>
            <img
              src="https://verycreatives.com/.netlify/images?url=%2F_astro%2Fhero-mvp.zm0ea5x0.png&fm=png&q=80&dpl=69cd0ef6e93faf000801bd63"
              alt="Scalable Digital Transformation"
              className="w-[220px] absolute bottom-0 right-0"
              loading="lazy"
            />
          </div>

          {/* Small Card - Custom Software Development */}
          <div className="bg-gradient-to-br from-primary/80 to-primary/60 col-span-1 flex justify-between items-center px-6 overflow-hidden relative min-h-[200px]">
            <div className="absolute bottom-4 left-4 z-20 w-[85%]">
              <h4 className="text-base font-semibold text-white">SaaS Product Development</h4>
              <p className="text-xs mt-1 text-white/90">
                Multi-page product with full navigation, user flows, and database — not a single-screen tool.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-2 border-white text-white hover:bg-white hover:text-primary bg-transparent text-xs"
              >
                <Link href={siteConfig.page.CustomSoftwareDevelopment}>
                  Get Started
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Small Card - Startup MVPs */}
          <div className="bg-gradient-to-br from-primary/80 to-primary/60 col-span-1 flex justify-between items-center px-6 overflow-hidden relative min-h-[200px]">
            <div className="absolute bottom-4 left-4 z-20 w-[85%]">
              <h4 className="text-base font-semibold text-white">Enterprise AI Solution</h4>
              <p className="text-xs mt-1 text-white/90">
                Serve multiple clients or businesses from one codebase. Each has isolated data, their own dashboard, and custom branding.
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-2 border-white text-white hover:bg-white hover:text-primary bg-transparent text-xs"
              >
                <Link href={siteConfig.page.AiProcessAutomation}>
                  Build Now
                  <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}