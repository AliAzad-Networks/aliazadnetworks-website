
"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { 
  ShieldCheck, 
  BadgePercent, 
  CodeXml, 
  FileText,
  MessageCircle,
  Shield,
  UserRoundCog,
  KanbanSquare
} from "lucide-react";

export default function FeatureGridAlt({ className }: { className?: string }) {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Business-First Approach",
      description: "We begin with your business objective, not the technology. Every solution is designed around your requirements, users, processes, and long-term goals.",
    },
    {
      icon: <BadgePercent className="w-5 h-5" />,
      title: "Enterprise-Grade Engineering",
      description: "We build with modern technologies, scalable architecture, security best practices, and maintainable engineering standards.",
      active: true,
    },
    {
      icon: <CodeXml className="w-5 h-5" />,
      title: "Complete Ownership",
      description: "Your technology belongs to you. You receive the source code, documentation, and necessary project assets without vendor lock-in.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Security by Design",
      description: "We follow disciplined practices for data protection, access control, secure development, and responsible handling of business information.",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Transparent Delivery",
      description: "From scope and milestones to progress and delivery, we maintain clear communication throughout the engagement.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Dedicated Expertise",
      description: "Your project receives focused attention from experienced engineers and project leadership. The right people stay aligned with your objectives through delivery.",
    },
    {
      icon: <UserRoundCog className="w-5 h-5" />,
      title: "Built to Scale",
      description: "We build our technology solutions to be designed with future users, integrations, features, performance, and business growth in mind.",
    },
    {
      icon: <KanbanSquare className="w-5 h-5" />,
      title: "Long-Term Technology Partnership",
      description: "Our relationship does not end at deployment. We aim to become a trusted technology partner that continues to help your business improve, and automate",
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center gap-4 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl text-foreground">
           Your Board's Information Security is important to Us
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border mt-12">
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
