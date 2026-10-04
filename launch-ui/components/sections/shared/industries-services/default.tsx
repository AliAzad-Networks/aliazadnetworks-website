"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

/* ------------------------------------------------------------------ */
/*  Config — edit this list anytime                                    */
/* ------------------------------------------------------------------ */

interface IndustryItem {
  label: string;
  href: string;
}

const ITEMS: IndustryItem[] = [
  { label: "AI & Automation", href: "/ai-process-automation" },
  { label: "Financial Services", href: "/industries/financial-services" },
  { label: "Healthcare & Life Sciences", href: "/industries/healthcare" },
  { label: "Education & EdTech", href: "/industries/education" },
  { label: "E-commerce & Retail", href: "/industries/retail" },
  { label: "Logistics & Supply Chain", href: "/industries/logistics" },
  { label: "Real Estate & Construction", href: "/industries/real-estate" },
  { label: "Manufacturing & Energy", href: "/industries/manufacturing" },
  { label: "Government & Public Sector", href: "/industries/government" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function IndustriesServices({
  className,
}: {
  className?: string;
}) {
  return (
    <Section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* -------------------- Header -------------------- */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight text-foreground mb-4">
            Industries & Services
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            As strategic technology advisors, we build systems that help
            enterprises operate stronger today and prepare for what's next.
          </p>
        </div>

        {/* -------------------- Grid -------------------- */}
        <div className="border-t border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center justify-between gap-4 px-2 sm:px-6 py-5 md:py-6",
                  "border-b border-border",
                  // vertical divider between columns on sm+
                  "sm:[&:not(:nth-child(2n))]:border-r",
                  // reset right border logic on lg (3 columns)
                  "lg:[&:not(:nth-child(2n))]:border-r-0",
                  "lg:[&:not(:nth-child(3n))]:border-r",
                  "transition-colors hover:bg-muted/40"
                )}
              >
                <span className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}