import { Section } from "@/components/ui/section";
import { CareerSectionHeading } from "@/components/careers/CareerSectionHeading";
import { Heart, Rocket, Users, BookOpen } from "lucide-react";

const VALUES = [
  {
    icon: Heart,
    title: "Craft over speed",
    body: "We'd rather ship one excellent feature than five mediocre ones.",
  },
  {
    icon: Rocket,
    title: "Own the outcome",
    body: "Every engineer talks to clients. Every designer sees production.",
  },
  {
    icon: Users,
    title: "Small teams, big trust",
    body: "We hire people we trust and give them room to do their best work.",
  },
  {
    icon: BookOpen,
    title: "Always learning",
    body: "We invest in books, courses, and conference budgets for everyone.",
  },
];

export function CultureSection() {
  return (
    <Section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-container mx-auto px-4">
        <CareerSectionHeading
          eyebrow="Culture"
          title="How we work"
          description="We're building a company we'd want to work at — deliberate, thoughtful, and human."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}