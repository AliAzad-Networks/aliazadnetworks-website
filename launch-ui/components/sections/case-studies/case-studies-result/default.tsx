"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeatureCardsProps {
  className?: string;
}

export default function FeatureCards({ className }: FeatureCardsProps) {
  const features = [
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "LLMs & AI APIs",
      description: "Hours saved monthly From 30 hrs/week to 2 hrs/week",
      button1: "GPT-4o",
      button2: "Claude 3.5",
      button3: "Gemini Pro",
      button4: "Mistral",
      button5: "Llama 3",
      button6: "Hugging Face",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Orchestration & RAG",
      description: "Sales forecasting, churn prediction, demand planning with ML.",
      button1: "LangChain",
      button2: "LlamaIndex",
      button3: "LangGraph",
      button4: "Pinecone",
      button5: "Weaviate",
      button6: "Chroma DB",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "ML & Deep Learning",
      description: "Object detection, face recognition, defect inspection, OCR.",
      button1: "PyTorch",
      button2: "TensorFlow",
      button3: "Scikit-learn",
      button4: "XGBoost",
      button5: "YOLO v8",
      button6: "OpenCV",
    },
    {
      icon: <ArrowRight className="w-6 h-6" />,
      title: "Backend & Deployment",
      description: "Get instant insights into your finances with live dashboards.",
      button1: "Python",
      button2: "FastAPI",
      button3: "Django",
      button4: "AWS Lambda",
      button5: "Docker",
      button6: "Celery + Redis",
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* Left Side - Headline & Content */}
          <div className="flex-1 space-y-6">
            <div>
                      <button className="inline-block text-xs text-foreground bg-card rounded-full px-4 py-1.5 mb-4 border border-border">Technology</button>

              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-foreground mb-4">
                The AI Stack We Build for <span className="text-primary">Startups</span>
              </h2>
              <p className="text-black text-lg leading-relaxed">Every tool below has been used in production across our case studies. Not theoretical — tested and deployed in live startup environments.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">We choose the right tool for your problem — not the most impressive-sounding one. Sometimes GPT-4o is overkill. Sometimes a fine-tuned BERT model is faster, cheaper, and more accurate. We always optimise for your outcome, not our demo.


</p>
              </div>
              
            </div>
          </div>
          
          {/* Right Side - Feature Cards */}
          <div className="flex-1 space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {feature.icon}
                </div>
                
                {/* Text */}
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground gap-2 mt-2 flex flex-wrap">
                    <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button1}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button2}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button3}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button4}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button5}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button6}</button>
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