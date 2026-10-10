import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { getOpenJobsCount } from "@/lib/careers/queries";

export function CareersHero() {
  const openCount = getOpenJobsCount();

  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 md:py-28">
      <div className="max-w-container mx-auto px-4 text-center">
        <h1 className="mt-6 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
          Build the systems powering tomorrow's businesses.
        </h1>

        
      </div>
    </Section>
  );
}