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
  title = "End-to-End AI-Drivien Process Automation for Every Stage of Growth",
  description = "From prototype to enterprise — we cover the full stack so you never need to hire multiple vendors.",
  features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI & Machine Learning Systems",
      description: "Custom ML models, LLM integrations (GPT-4o, Claude, Gemini), computer vision, NLP, recommendation engines, and AI-powered automation built for real business use cases in 2026.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "SaaS Platform Development",
      description: "Multi-tenant SaaS architectures, subscription billing (Stripe/Razorpay), user dashboards, and admin control panels. Built to serve thousands of users from your very first launch.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Legal Tech & Consulting",
      description: "Document AI for contract review, clause extraction, risk flagging, proposal generation, client onboarding automation.Document AI for contract review, clause extraction, risk flagging, proposal generation, client onboarding automation.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Automation & Data Pipelines",
      description: "Python automation scripts, intelligent web scrapers, ETL data pipelines, analytics dashboards, and workflow tools that save your team 100+ hours of manual work every month.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Cloud & DevOps Infrastructure",
      description: "AWS, GCP, Azure deployments. Docker containerisation, CI/CD pipelines, serverless functions, load balancing, and scalable architecture that handles your growth automatically.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "API Development & Integration",
      description: "RESTful & GraphQL APIs, third-party integrations (Stripe, WhatsApp Business, OpenAI, Google APIs, Razorpay), webhook systems, and microservices architecture for complex products.",
    },
    
  ],
  className,
}: FeatureGridProps) {
  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <button className="inline-block text-xs text-foreground bg-card rounded-full px-4 py-1.5 mb-4 border border-border">WHAT WE BUILD</button>
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
              className="group border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-card"
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