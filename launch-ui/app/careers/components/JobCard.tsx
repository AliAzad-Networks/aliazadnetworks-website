import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JobMetadata } from "@/components/careers/JobMetadata";
import type { Job } from "@/lib/careers/types";

export function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/careers/jobs/${job.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {job.department}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {job.title}
          </h3>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
      </div>

      <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
        {job.description}
      </p>

      <div className="mt-5">
        <JobMetadata job={job} />
      </div>

      {job.salaryRange && (
        <p className="mt-4 text-sm font-medium text-foreground">
          {job.salaryRange}
        </p>
      )}
    </Link>
  );
}