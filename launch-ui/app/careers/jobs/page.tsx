import Navbar from "@/components/sections/shared/navbar/default";
import Topbar from "@/components/sections/shared/topbar/default";
import Footer from "@/components/sections/shared/footer/default";
import { Section } from "@/components/ui/section";

import { JobList } from "../components/JobList";
import { getAllJobs, getActiveDepartments } from "@/lib/careers/queries";

export const metadata = {
  title: "Open Roles | AliAzad Networks Careers",
  description:
    "Browse all open positions at AliAzad Networks — engineering, AI, design, research, and more.",
  alternates: { canonical: "https://aliazadnetworks.com/careers/jobs" },
};

export default function JobsPage() {
  const jobs = getAllJobs();
  const departments = getActiveDepartments();

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Topbar />
      <Navbar />

      <Section className="py-16 md:py-20 bg-white">
        <div className="max-w-container mx-auto px-4">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Open Roles
            </span>
            <h1 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-foreground">
              Find your next role
            </h1>
            <p className="mt-3 text-muted-foreground">
              {jobs.length} open {jobs.length === 1 ? "position" : "positions"} across{" "}
              {departments.length} {departments.length === 1 ? "team" : "teams"}.
            </p>
          </div>

          <JobList jobs={jobs} departments={departments} />
        </div>
      </Section>

      <Footer />
    </main>
  );
}