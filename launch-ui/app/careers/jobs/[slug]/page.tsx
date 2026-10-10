import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/sections/shared/navbar/default";
import Topbar from "@/components/sections/shared/topbar/default";
import Footer from "@/components/sections/shared/footer/default";
import Cta from "@/components/sections/shared/cta/default";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JobMetadata } from "@/components/careers/JobMetadata";
import { ApplyInstructions } from "@/components/careers/ApplyInstructions";

import { getAllJobSlugs, getJobBySlug } from "@/lib/careers/queries";
import { generateJobMetadata } from "@/lib/careers/seo";

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};
  return generateJobMetadata(job);
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Topbar />
      <Navbar />

      <Section className="py-12 md:py-16">
        <div className="max-w-container mx-auto px-4">
          {/* Back */}
          <Link
            href="/careers/jobs"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all roles
          </Link>

          {/* Header */}
          <header className="mt-8 mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              {job.department}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              {job.title}
            </h1>
            <div className="mt-5">
              <JobMetadata job={job} />
            </div>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {job.description}
            </p>
          </header>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: content */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  What you'll do
                </h2>
                <BulletList items={job.responsibilities} />
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  What we're looking for
                </h2>
                <BulletList items={job.qualifications} />
              </section>

              {job.preferredQualifications && job.preferredQualifications.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Nice to have
                  </h2>
                  <BulletList items={job.preferredQualifications} />
                </section>
              )}

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Skills
                </h2>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right: sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Department
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {job.department}
                  </p>
                </div>
                {job.salaryRange && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Compensation
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {job.salaryRange}
                    </p>
                  </div>
                )}
              </div>

              <ApplyInstructions job={job} />
            </aside>
          </div>
        </div>
      </Section>

      <Cta />
      <Footer />
    </main>
  );
}