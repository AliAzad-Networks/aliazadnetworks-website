"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { FileText, PhoneCall, Code, Rocket, CheckCircle } from "lucide-react";

interface ProcessHorizontalProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function ProcessHorizontal({ className }: ProcessHorizontalProps) {
  const steps = [
    {
      step: 1,
      title: "Discovery Call",
      description: "We understand your vision, tech needs, timeline, and budget in detail.",
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "We design the system architecture, choose the right tech stack, and get your sign-off.",
      icon: <PhoneCall className="w-5 h-5" />,
    },
    {
      step: 3,
      title: "Build & Iterate",
      description: "Development begins. Weekly demo updates via WhatsApp. You review at every milestone.",
      icon: <Code className="w-5 h-5" />,
    },
    {
      step: 4,
      title: "Test & Refine",
      description: "Thorough QA testing, bug fixes, performance optimisation, and security checks.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      step: 5,
      title: "Deploy & Support",
      description: "Live deployment + full handover of code, docs, and credentials. 30 days free support.",
      icon: <Rocket className="w-5 h-5" />,
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            How We Deliver Your Product
          </h2>
          <p className="text-black text-md max-w-2xl mx-auto">
            A clear, structured process so you always know exactly what is happening and when.
          </p>
        </div>

        {/* Horizontal Timeline with Connectors */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 relative">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div key={step.step} className="flex-1 flex flex-col items-center text-center relative">
                {/* Circle */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground mb-4 relative z-10">
                  {step.icon}
                </div>

                {/* Step Number */}
                <span className="text-xs font-medium text-primary mb-2">
                  STEP {step.step}
                </span>

                {/* Title */}
                <h3 className="font-semibold text-foreground mb-2 px-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs px-2">
                  {step.description}
                </p>

                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden md:block absolute top-6 left-[50%] w-full h-0.5 bg-border -z-0"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}