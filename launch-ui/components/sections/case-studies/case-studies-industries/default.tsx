"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { 
  Globe, 
  Layout, 
  Users, 
  Layers, 
  Repeat, 
  Zap, 
  Code, 
  GitBranch 
} from "lucide-react";

export default function FeatureGridAlt({ className }: { className?: string }) {
  const features = [
    {
      icon: <Globe className="w-5 h-5" />,
      title: "E-Commerce & D2C",
      description: "Customer support bots, inventory management AI, personalised product recommendation engines, return processing automation.",
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "SaaS & Tech Startups",
      description: "Onboarding automation, usage analytics pipelines, churn prediction models, AI-powered in-app features, sales forecasting systems.",
      active: true,
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Content & Media",
      description: "Content scheduling automation, AI metadata writers, analytics dashboards, comment management, cross-platform publishing pipelines.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Legal Tech & Consulting",
      description: "Document AI for contract review, clause extraction, risk flagging, proposal generation, client onboarding automation.",
    },
    {
      icon: <Repeat className="w-5 h-5" />,
      title: "FinTech & Lending",
      description: "Credit scoring models, fraud detection AI, lead scoring engines, automated underwriting workflows, KYC automation.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Retail & Supply Chain",
      description: "Computer vision for inventory, demand forecasting, supplier risk models, logistics optimisation, quality control automation.",
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Tool-friendly",
      description: "Designs built with localization, multiple languages and diverse audiences.",
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Dev-ready handoff",
      description: "From startups to enterprise, designs integrate seamlessly with your workflows.",
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
            AI Automation Works Across Every Startup Industry
          </h1>
          <p className="text-sm text-muted-foreground">
            We have delivered AI automation projects for startups in 6 industries. If your business has repetitive tasks — AI can eliminate them.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "relative p-6 md:p-8 flex flex-col gap-3 border-r border-b border-border transition-all duration-300 hover:bg-gradient-to-b hover:from-card hover:to-primary/5",
                feature.active && "bg-gradient-to-b from-card to-primary/5"
              )}
            >
              {/* Active Indicator */}
              {feature.active && (
                <div className="absolute left-0 top-12 bottom-12 w-1 bg-primary rounded-r"></div>
              )}
              
              <div className="text-primary">{feature.icon}</div>
              <h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}