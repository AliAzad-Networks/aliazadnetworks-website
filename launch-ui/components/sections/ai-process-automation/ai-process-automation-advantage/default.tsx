"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Activity, Shield, FileText } from "lucide-react";

interface FeatureCardsProps {
  className?: string;
}

export default function FeatureCards({ className }: FeatureCardsProps) {
  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Custom AI Chatbots",
      description: "Trained on your business data. WhatsApp, web, or app-integrated.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Intelligent Prediction Models",
      description: "Sales forecasting, churn prediction, demand planning with ML.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Computer Vision Systems",
      description: "Object detection, face recognition, defect inspection, OCR.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-Time Analytics",
      description: "Get instant insights into your finances with live dashboards.",
    },
    
    
  ];

  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.financialexpressdigital.com/2025/06/AI-in-laptop.jpg?w=1200"
              alt="Dashboard preview"
              className="max-w-2xl w-full h-auto rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>
          
          {/* Right Side - Feature Cards */}
          <div className="flex-1 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border border-border bg-card hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {feature.icon}
                </div>
                
                {/* Text */}
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </Section>
  );
}