"use client";

import Link from "next/link";
import { ArrowRight, Zap, Users, Shield, Globe, Cpu, Code } from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title?: string;
  description?: string;
  features?: FeatureCard[];
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export default function FeatureGrid({
  title = "What We Do",
  description = "With AI embedded at every stage of the SDLC, our top 1% engineering talent is equipped to deliver 10x better software developemt process and outcomes.",
  features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Custom Application Development",
      description: "AI-assisted coding, debugging, and CI/CD automation accelerate development, detect defects earlier, and ensure seamless, high-performance deployments.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Architecture, Stack & Infra Overhaul",
      description: "For CTOs who won’t bolt AI onto broken systems — AliAzad’s Software Consulting rebuilds from first principles: clean architecture, modern stacks, infra built to scale and adapt.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI-Assisted Enterprise Software Development",
      description: "AI-powered automation, predictive performance tuning, and proactive security ensure scalable, high-performance enterprise applications.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "AI-Powered MVP Development",
      description: "AI-driven prototyping, automated testing, and continuous analytics accelerate validation, refine product-market fit, and minimize go-to-market risk.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Driven UI/UX Design",
      description: "AI-powered behavioral analytics, automated testing, and predictive insights create intuitive, high-retention user experiences—optimized in real-time.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API & Integrations",
      description: "AI-enhanced API design, automated scaling, and intelligent security fortify seamless integrations and future-proofed ecosystems.",
    },
    
  ],
  className,
}: FeatureGridProps) {
  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <button className="inline-block text-xs text-foreground bg-card rounded-full px-4 py-1.5 mb-4 border border-border">What We Do</button>
        <div className="flex flex-col mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-black text-md">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group border border-border p-6 hover:shadow-lg bg-card"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}