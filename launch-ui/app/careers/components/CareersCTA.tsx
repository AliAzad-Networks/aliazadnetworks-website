import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function CareersCTA() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground max-w-2xl mx-auto">
            Don't see the right role?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We're always looking for exceptional people. Send us your résumé
            and tell us how you'd like to contribute.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="mailto:careers@aliazadnetworks.com" className="inline-flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}