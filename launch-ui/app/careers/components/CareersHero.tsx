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
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5 text-orange-400" />
          <span>We're hiring across {openCount} roles</span>
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
          Build the systems powering tomorrow's businesses.
        </h1>

        <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          At AliAzad Networks, we design AI-driven software for startups,
          enterprises, and research institutions. Join a team obsessed with
          craft, clarity, and impact.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
            <Link href="/careers/jobs">
              Explore Open Roles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/25 text-white hover:bg-white/10"
          >
            <Link href="/careers/life-at-aliazad">Life at AliAzad</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}