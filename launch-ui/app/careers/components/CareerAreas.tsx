import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { CareerSectionHeading } from "@/components/careers/CareerSectionHeading";

const AREAS = [
  {
    title: "Engineering",
    href: "/careers/jobs?department=Engineering",
  },
  {
    title: "AI & Data",
    href: "/careers/jobs?department=AI%20%26%20Data",
  },
  {
    title: "Product & Design",
    href: "/careers/jobs?department=Product%20%26%20Design",
  },
  {
    title: "Research",
    href: "/careers/jobs?department=Research",
  },
  {
    title: "Operations",
    href: "/careers/jobs?department=Operations",
  },
  {
    title: "Sales & Marketing",
    href: "/careers/jobs?department=Sales%20%26%20Marketing",
  },
];

export function CareerAreas() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4">
        <CareerSectionHeading
          eyebrow="Teams"
          title="Where you could make an impact"
          description="We organise around outcomes, not org charts. Find the team that matches your craft."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-border">
          {AREAS.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group flex flex-col gap-2 p-6 border-b border-border sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {area.title}
                </h3>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary transition-all" />
              </div>
              
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}