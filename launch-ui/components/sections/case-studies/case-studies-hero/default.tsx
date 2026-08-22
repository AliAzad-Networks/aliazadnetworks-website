"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface HeroAltProps {
  className?: string;
}

export default function HeroAlt({ className }: HeroAltProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Pricing", href: "/pricing" },
    { label: "Projects", href: "/portfolio" },
    { label: "Contact Us", href: "/contact" },
  ];

  const stats = [
    { value: "6", label: "Case Studies" },
    { value: "100+", label: "Hrs Saved / Month" },
    { value: "60%", label: "Avg Cost Reduction" },
    { value: "5.0★", label: "Client Rating" },
  ];

  return (
    <Section
      className={cn(
        "py-16 md:py-24 bg-gradient-to-b from-[#D9D9FF] to-[#F8F3F9] dark:from-primary/10 dark:to-background overflow-hidden",
        className
      )}
    >
      <div className="max-w-container mx-auto px-4">
        {/* Status Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/50 dark:bg-card/50 border border-border backdrop-blur-sm">
            <div className="relative flex size-3.5 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
            </div>
            <p className="text-sm text-foreground/80">Remarkable results for every size business</p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl leading-tight text-center max-w-3xl mx-auto font-medium text-foreground">
          See How Businessess Are Scaling With AliAzad Networks
        </h1>
        
        {/* Description */}
        <p className="text-sm text-black text-center max-w-[630px] mx-auto mt-4">
          Learn from the customers who move faster, work smarter, and make loyalty look easy.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-3 justify-center mt-8">
          <Button asChild size="lg" className="px-6 py-3 rounded-lg">
            <Link href={siteConfig.page.casestudies}>Explore Case Studies</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-5 py-3 rounded-lg">
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[800px] h-[2px] mx-auto mt-10 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-[930px] mx-auto w-full">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="font-medium text-2xl md:text-3xl text-foreground">
                {stat.value}
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}