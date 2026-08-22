"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Grid, Shield, Settings, Sparkles, Users, Layout } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  width?: "full" | "half";
}

interface FeatureGrid2Props {
  badge?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
  className?: string;
}

export default function FeatureGrid2({
  badge = "FEATURES",
  title = "All You Need to Build Fast",
  description = "Carefully crafted components and patterns designed to scale with your product.",
  features = [
    {
      icon: <Grid className="w-6 h-6" strokeWidth={1.5} />,
      title: "All Credentials & Access",
      description: "Every API key, database password, cloud account, and third-party service login is transferred to you. Zero vendor lock-in with us.",
      imageSrc: "https://assets.prebuiltui.com/images/components/feature-sections/feature-workspace-img.png",
      imageAlt: "Feature workspace",
      width: "full",
    },
    {
      icon: <Shield className="w-6 h-6" strokeWidth={1.5} />,
      title: "Complete Source Code",
      description: "Clean, well-commented code on a private GitHub repository. Every file, every commit, every branch — transferred to your account.",
      width: "half",
    },
    {
      icon: <Settings className="w-6 h-6" strokeWidth={1.5} />,
      title: "Technical Documentation",
      description: "Full README, API docs, architecture diagrams, database schema, and setup guide. Any developer can pick this up and continue without us.",
      width: "half",
    },
    {
      icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
      title: "30 Day Post Support",
      description: "Free bug fixes, performance issues, and questions for 30 days after delivery. We don't disappear the moment you pay the final invoice.",
      imageSrc: "https://assets.prebuiltui.com/images/components/feature-sections/feature-minimal-office-img.png",
      imageAlt: "Feature office",
      width: "full",
    },
  ],
  className,
}: FeatureGrid2Props) {
  return (
    <Section className={cn("py-16 md:py-24 bg-muted/30", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          {badge && (
            <span className="inline-block text-xs text-foreground bg-card rounded-full px-4 py-1.5 mb-4 border border-border">
              {badge}
            </span>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-black text-md mx-auto">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Full Width Card with Image */}
            <div className="md:w-[60%] bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 p-5 flex flex-col md:flex-row gap-5">
              <img
                src={features[0].imageSrc}
                alt={features[0].imageAlt}
                className="w-full h-48 md:h-full md:w-[45%] object-cover rounded-xl"
                loading="lazy"
              />
              <div className="flex flex-col mt-2">
                <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary-foreground">
                    {features[0].icon}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {features[0].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {features[0].description}
                </p>
              </div>
            </div>

            {/* Half Width Card */}
            <div className="md:w-[40%] bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 p-6">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary-foreground">
                  {features[1].icon}
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {features[1].title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {features[1].description}
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Half Width Card */}
            <div className="md:w-[40%] bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 p-6">
              <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mb-4">
                <div className="text-primary-foreground">
                  {features[2].icon}
                </div>
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {features[2].title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {features[2].description}
              </p>
            </div>

            {/* Full Width Card with Image */}
            <div className="md:w-[60%] bg-card border border-border rounded-xl hover:shadow-md transition-all duration-300 p-5 flex flex-col md:flex-row gap-5">
              <img
                src={features[3].imageSrc}
                alt={features[3].imageAlt}
                className="w-full h-48 md:h-full md:w-[45%] object-cover rounded-xl"
                loading="lazy"
              />
              <div className="flex flex-col mt-2">
                <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary-foreground">
                    {features[3].icon}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {features[3].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}