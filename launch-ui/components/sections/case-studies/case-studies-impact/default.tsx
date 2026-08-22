"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingTable({ className }: { className?: string }) {
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  const plans = [
    { name: "Manual task hours per week",  storage: "30–50 hrs", price: "2–5 hrs", priceValue: 0 },
    { name: "Customer response time",  storage: "24–48 hrs", price: "< 3 seconds", priceValue: 49, isPopular: true },
    { name: "Operational cost",  storage: "100%", price: "32–40%", priceValue: 99 },
    { name: "Human errors in process",  storage: "12–18%", price: "0.3–1%", priceValue: null },
    { name: "Team size needed to scale 2×",  storage: "2× headcount", price: "Same team", priceValue: 49, isPopular: true },
    { name: "Payback period on investment",  storage: "Never", price: "6–14 weeks", priceValue: 99 },
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
            Before AI vs. After AI — The Actual Numbers
          </h1>
          <p className="text-sm text-muted-foreground">
            Based on averages across our six case studies. Your numbers will vary — but the direction is always the same.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="max-w-container w-full mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 font-semibold text-muted-foreground">Process</th>
                <th className="px-4 py-3 font-semibold text-muted-foreground">Before</th>
                <th className="px-4 py-3 font-semibold text-muted-foreground">After AI</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr 
                  key={plan.name} 
                  className={cn(
                    "border-b border-border hover:bg-muted/30 transition-colors",
                  )}
                >
                  <td className="px-4 py-3 font-small text-foreground">
                    {plan.name}
                  </td>
                  <td className="px-4 py-3 font-semibold text-red-700">{plan.storage}</td>
                  <td className="px-4 py-3 font-semibold text-green-700 text-foreground">{plan.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}