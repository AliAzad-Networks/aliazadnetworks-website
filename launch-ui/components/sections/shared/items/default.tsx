
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
      title: "First service, then full payment",
      description: "50% advance only. Final payment after you're satisfied. No Surprise Bills. Ever",
    },
    {
      icon: <BadgePercent className="w-5 h-5" />,
      title: "100% money-back guarantee ",
      description: "If we fail to deliver as agreed, you get a full refund. No conditions. In writing.",
      active: true,
    },
    {
      icon: <CodeXml className="w-5 h-5" />,
      title: "You own all the code",
      description: "Full source code on GitHub. No watermarks, no locks, no \"rent the code\" model. Yours forever.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Bank-Level Security & ISO Compliance",
      description: "Your data is protected with enterprise-grade encryption, ISO 27001 standards, and strict NDAs.",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "24/7 WhatsApp support",
      description: "Communicate directly with our team anytime through WhatsApp for quick responses and updates.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "DPIIT certified company",
      description: "Officially recognised startup. You get proper invoice, agreement, and legal protection.",
    },
    {
      icon: <UserRoundCog className="w-5 h-5" />,
      title: "Dedicated Project Manager",
      description: "A dedicated project manager ensures smooth communication and timely delivery of your project.",
    },
    {
      icon: <KanbanSquare className="w-5 h-5" />,
      title: "30-Day Free Maintenance",
      description: "Free bug fixes, security updates, and priority support for 30 days after delivery.",
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
