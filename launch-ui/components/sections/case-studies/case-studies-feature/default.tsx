"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";
import Link from "next/link";

// Card Component
const Card = () => {
  return (
    <div className="w-full dark:bg-slate-800 relative rounded-xl flex sm:flex-row flex-col gap-[20px] p-4 shadow-lg mx-auto mt-8">
      <div className="flex justify-center sm:justify-start">
        <img
          src="/assets/images/client/faizan.png"
          alt="Client testimonial"
          className="w-full sm:w-[100px] h-[100px] object-cover sm:rounded-full rounded-xl"
          loading="lazy"
        />
      </div>

      <div className="flex-1 sm:text-left">
        <h1 className="text-xl font-bold text-foreground leading-6">
          Faizan Khan · Mission Market
        </h1>
        <span className="text-sm text-muted-foreground">DELIVERY TIME · <span className="text-bold text-green-800">6 Weeks</span></span>

        <p className="text-muted-foreground mt-3 text-sm">
          YouTuber · Content Entrepreneur · 150K+ Subscribers · India
        </p>
      </div>
    </div>
  );
};

export default function FeatureList({ className }: { className?: string }) {
  const features = [
    "Content & Media",
    "Solo Creator",
    "GPT-4o + YouTube API",
    "Python · FastAPI · Cron",
    "Growth Plan",
    "14× in 3 months",
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-container mx-auto px-4">
        <button className="inline-block text-xs text-foreground bg-card rounded-full px-4 py-1.5 mb-4 border border-border">Case Study 01</button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            YouTube Channel AI Automation — Full Pipeline
          </h1>
          <p className="text-black text-base mx-auto">
            Faizan Khan runs Mission Market, a YouTube channel focused on business and marketing with over 150,000 subscribers. His biggest bottleneck was not content quality - it was the 30+ hours every week consumed by manual, repetitive operational tasks that required no real creativity but consumed all his time.
          </p>
          
          {/* Card Component - Testimonial */}
          <Card />
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap lg:w-4/5 mx-auto -mx-2 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-muted/50 rounded-xl flex p-4 h-full items-center border border-border hover:border-primary/30 transition-colors">
                <Check className="text-primary w-5 h-5 flex-shrink-0 mr-3" strokeWidth={2.5} />
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}