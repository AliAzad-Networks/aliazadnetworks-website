import { Section } from "@/components/ui/section";
import { CareerSectionHeading } from "@/components/careers/CareerSectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Application",
    body: "Send your résumé and a short note about what draws you to the role.",
  },
  {
    n: "02",
    title: "Intro call",
    body: "30 minutes to talk about your background, our work, and mutual fit.",
  },
  {
    n: "03",
    title: "Craft interview",
    body: "A focused, real-world exercise relevant to the role — no trick questions.",
  },
  {
    n: "04",
    title: "Team conversation",
    body: "Meet the people you'll work with. Ask anything.",
  },
  {
    n: "05",
    title: "Offer",
    body: "Transparent compensation, clear start date, and a warm welcome.",
  },
];

export function HiringProcess() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4">
        <CareerSectionHeading
          eyebrow="Process"
          title="How we hire"
          description="Our process is designed to be clear, human, and respectful of your time."
        />

        <ol className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {STEPS.map((step) => (
            <li key={step.n} className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Step {step.n}
              </span>
              <h3 className="mt-2 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}