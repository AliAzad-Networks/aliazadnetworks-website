"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";


interface AboutProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function About({
  title = "We Build Intelligent Software for India's Next Decade",
  description = "AliAzad Networks is an AI-first technology company helping startups, and business build smarter — using the latest advances in artificial intelligence, machine learning, and modern software engineering.",
  className,
}: AboutProps) {
  const features = [
    {
      emoji: "⚡",
      title: "Innovation-Driven Development",
      description: "Modern technologies and AI-powered solutions built for scalability and performance.",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-600",
    },
    {
      emoji: "🔒",
      title: "Client-Focused Process",
      description: "Clear communication, regular updates, and complete source code ownership.",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-600",
    },
    {
      emoji: "💡",
      title: "Results That Create Real Impact",
      description: "Delivering practical solutions that support growth, learning, and business success.",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      {/* Background Blur Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[300px] -z-10 bg-[#FBFFE1]/70 dark:bg-yellow-100/10"></div>
      
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-black text-sm max-w-3xl mx-auto">
            {description}
          </p>
          {/* Trust Badges - moved outside <p> */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-800">DPIIT Registered Company</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-800">50+ Startups Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-800">6 Countries Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span className="text-sm text-gray-800">AI-Powered Since Day One</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 md:pt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "py-8 border-b border-border md:py-0 md:border-b-0 md:px-8 lg:px-10",
                index < 2 && "md:border-r"
              )}
            >
              <div className={cn(
                "w-12 h-12 p-2 rounded-lg flex items-center justify-center text-2xl",
                feature.bgColor,
                feature.borderColor
              )}>
                {feature.emoji}
              </div>
              <div className="mt-5 space-y-2">
                <h3 className="text-base font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-black">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}