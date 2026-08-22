import { User, Users } from "lucide-react";

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
  title = "Transparent, Fixed-Cost Plans",
  description = "No hidden charges. No hourly billing surprises.",
  plans = [
    {
      name: "MVP Starter",
      description: "One-time · 15% advance only",
      cta: {
        variant: "glow",
        label: "Get started for free",
        href: "/docs/getting-started/introduction",
      },
      features: [
        "1 website template",
        "9 blocks and sections",
        "4 custom animations",
        "9 blocks and sections",
        "4 custom animations",
        "9 blocks and sections",
        "4 custom animations",
      ],
      variant: "default",
      className: "hidden lg:flex",
    },
    {
      name: "Growth Product",
      icon: <User className="size-4" />,
      description: "One-time · 15% advance only",
      cta: {
        variant: "default",
        label: "Get all-access",
        href: siteConfig.pricing.pro,
      },
      features: [
        `${siteConfig.stats.templates} templates`,
        `${siteConfig.stats.sections} blocks and sections`,
        `${siteConfig.stats.illustrations} illustrations`,
        `${siteConfig.stats.animations} custom animations`,
        `${siteConfig.stats.templates} templates`,
        `${siteConfig.stats.sections} blocks and sections`,
        `${siteConfig.stats.illustrations} illustrations`,
        
      ],
      variant: "glow-brand",
    },
    {
      name: "Scale / SaaS",
      icon: <Users className="size-4" />,
      description: "Custom · Milestone billing",
      cta: {
        variant: "default",
        label: "Get all-access for your team",
        href: siteConfig.pricing.team,
      },
      features: [
        "All the templates, components and sections available for your entire team",
        "All the templates, components and sections available for your entire team",
        "All the templates, components and sections available for your entire team",
        "All the templates, components and sections available for your entire team",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="relative overflow-hidden py-16 md:py-24 mx-auto flex max-w-6xl flex-col items-center gap-12 px-8">
        {(title || description) && (
          <div className="flex flex-col items-center gap-2 px-4 text-center sm:gap-2">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-black text-base max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
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
