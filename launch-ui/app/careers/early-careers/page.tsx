import Navbar from "@/components/sections/shared/navbar/default";
import Topbar from "@/components/sections/shared/topbar/default";
import Footer from "@/components/sections/shared/footer/default";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Early Careers | AliAzad Networks Careers",
  description:
    "Graduate programs, internships, and early-career opportunities at AliAzad Networks.",
  alternates: { canonical: "https://aliazadnetworks.com/careers/early-careers" },
};

export default function EarlyCareersPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Topbar />
      <Navbar />

      <Section className="py-16 md:py-24">
        <div className="max-w-container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Early Careers
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Start your career where it matters.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Our graduate and internship programs give you real production
              experience — not busywork. You'll ship features that reach real
              users, guided by engineers who care about your growth.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground">
                Graduate Program
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A 12-month structured program for final-year students and
                recent graduates. Rotate across teams, build a portfolio, and
                grow into a full-time engineer or designer.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <h2 className="text-xl font-semibold text-foreground">
                Internships
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                3–6 month paid internships with real ownership. You'll work on
                live client projects with dedicated mentorship and clear
                deliverables.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/careers/jobs?experienceLevel=graduate" className="inline-flex items-center gap-2">
                View Graduate & Intern Roles <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}