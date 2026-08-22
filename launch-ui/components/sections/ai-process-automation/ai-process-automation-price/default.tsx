import { User, Users, Rocket, Cpu, Shield, Zap, Database, Cloud, Code, Layout, BarChart, GitBranch, Check } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "@/components/ui/pricing-column";
import { Section } from "@/components/ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Scale At Your Pace With Flexible Pricing - No Monthly Credits, No Interruptions",
  description = "Transparent, Fixed-Cost Plans",
  plans = [
    {
      name: "Starter Automation",
      icon: <Rocket className="size-4" />,
      description: "Startups and growing businesses",
      cta: {
        variant: "default",
        label: "Schedule Consultation",
        href: "/contact",
      },
      features: [
        "Process analysis",
        "Basic workflow automation",
        "System integration setup",
        "Performance optimization",
        "Deployment support",
        "Money-back guarantee",
        "14-day post-delivery support",
      ],
      variant: "default",
    },
    {
      name: "Growth Automation",
      icon: <Layout className="size-4" />,
      description: "Large businesses and enterprise operations",
      cta: {
        variant: "default",
        label: "Request Strategy Call",
        href: "/contact",
      },
      features: [
        "Advanced workflow automation",
        "CRM & platform integrations",
        "AI-powered task orchestration",
        "Performance monitoring",
        "Optimization support",
        "Cloud deployment setup",
        "30-day post-delivery support",
      ],
      variant: "glow-brand",
    },
    {
      name: "Enterprise Automation",
      icon: <Cpu className="size-4" />,
      description: "Scaling companies and operational teams",
      cta: {
        variant: "default",
        label: "Contact Sales",
        href: "/contact",
      },
      features: [
        "Full operational architecture design",
        "Enterprise-grade AI automation",
        "Custom integrations",
        "Security-first deployment",
        "Dedicated engineering support",
        "Cloud deployment setup",
        "60-day post-delivery support",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-8">
        {(title || description) && (
          <div className="flex flex-col gap-2 sm:gap-2">
            {title && (
              <h2 className="text-2xl md:text-3xl text-gray-900 leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                originalPrice={plan.originalPrice}
                promotionText={plan.promotionText}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}