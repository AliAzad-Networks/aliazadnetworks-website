"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Activity, Code, TrendingUp, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function FeatureCardsWithText({ className }: { className?: string }) {
  const features = [
    {
      icon: Activity,
      title: "AI-Driven Process Automation",
      description: "Unlock unprecedented efficiency and agility with our AI-driven process automation solutions.",
      href: siteConfig.page.AiProcessAutomation,
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions to modernize your operations, enhance customer experiences, and drive growth.",
      href: siteConfig.page.CustomSoftwareDevelopment,
    },
    {
      icon: TrendingUp,
      title: "Scalable Digital Solutions",
      description: "Cloud migration, microservices architecture, and performance optimization.",
      href: siteConfig.page.DigitalTransformation,
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-[#f9f9f9]", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Left side – text content */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-md text-foreground leading-tight">
              Driving Your Growth:<br />
              Technology is Our Engine,<br />
              Innovation Our Fuel
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base max-w-xl">
              Whether you’re building smarter products, scaling with cloud, reimagining the customer experience or unlocking AI-led efficiencies, our solutions are built to meet you where you are and take you further, faster.
            </p>
          </div>

          {/* Right side – cards with links */}
          <div className="flex-1 space-y-4 w-full max-w-md">
            {features.map((feature, idx) => (
              <Link
                key={idx}
                href={feature.href}
                className="block group"
              >
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/90 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer">
                  <div className="shrink-0">
                    <feature.icon className="w-6 h-6 stroke-[1.5] stroke-orange-600" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h2 className="text-md font-semibold text-foreground sm:text-lg">
                      {feature.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:text-primary transition-colors shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}