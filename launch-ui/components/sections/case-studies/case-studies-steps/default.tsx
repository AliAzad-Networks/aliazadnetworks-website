"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { FileText, PhoneCall, Code, Rocket } from "lucide-react";

export default function StepTabs({ className }: { className?: string }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      label: "Step 1 · Discovery",
      icon: <FileText className="w-5 h-5" />,
      title: "Automation Audit — Find Your Highest-Value Bottlenecks",
      description: "We spend the first week mapping every repetitive, manual process in your business. We score each one by time cost, frequency, and automability. You leave this phase with a prioritised list of exactly which processes will generate the fastest and largest ROI from AI automation. No assumptions — we audit what's actually slowing you down.",
      imageSrc: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=720&auto=format",
    },
    {
      id: 2,
      label: "Step 2 · Design",
      icon: <PhoneCall className="w-5 h-5" />,
      title: "AI System Design — Choose the Right Tools, Not the Trendiest Ones",
      description: "We design the technical architecture and select the AI models, APIs, and data pipelines that best fit your specific use case. Not every problem needs GPT-4o — sometimes a fine-tuned smaller model is faster, cheaper, and more accurate. We make the right choice for your business, not for our portfolio.",
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=720&auto=format",
    },
    {
      id: 3,
      label: "Step 3 · Build",
      icon: <Code className="w-5 h-5" />,
      title: "Production Engineering — AI Systems That Actually Work in the Real World",
      description: "We build with production-grade practices from Day 1: error handling, retry logic, logging, rate limit management, and graceful degradation. Your AI system will not break at 3am on a Monday. You get weekly demos via WhatsApp so you can see exactly what is being built and give feedback at every stage.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=720&auto=format",
    },
    {
      id: 4,
      label: "Step 4 · Deploy",
      icon: <Rocket className="w-5 h-5" />,
      title: "Live Deployment With Full Visibility Dashboard",
      description: "We deploy your AI system to cloud infrastructure (AWS, GCP, or your preferred provider) and build a simple monitoring dashboard so you can see every automated action, error rate, and performance metric in real time. You always know exactly what your AI is doing — and when it needs attention.",
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=720&auto=format",
    },
    {
      id: 5,
      label: "Step 5 · Handover",
      icon: <Rocket className="w-5 h-5" />,
      title: "Full Ownership Transfer + 30-Day Free Support",
      description: "You receive complete source code, documentation, API keys, deployment guides, and a recorded walkthrough video. The system is 100% yours — no lock-in, no monthly fees to us. We provide 30 days of free support for any bugs, questions, or tuning needed after go-live.",
      imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=720&auto=format",
    },
  ];

  const current = steps[activeStep];

  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Step Tabs */}
        <div className="flex flex-wrap justify-center mb-10">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={cn(
                "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 font-medium inline-flex items-center gap-2 transition-all duration-300",
                activeStep === index
                  ? "border-primary text-primary bg-muted/30"
                  : "border-border text-black hover:text-foreground hover:border-black"
              )}
            >
              {step.label}
            </button>
          ))}
        </div>

        {/* Content */}
        

        <div className="flex flex-col text-center w-full">
          <h1 className="text-xl font-semibold mb-4 text-foreground">
            {current.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">
            {current.description}
          </p>
        </div>
      </div>
    </Section>
  );
}