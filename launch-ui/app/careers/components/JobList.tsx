"use client";

import { useMemo, useState } from "react";
import { JobCard } from "./JobCard";
import { JobFiltersBar } from "./JobFilters";
import { EmptyJobsState } from "@/components/careers/EmptyJobsState";
import { filterJobs } from "@/lib/careers/filters";
import { DEFAULT_FILTERS, type Job, type JobFilters } from "@/lib/careers/types";

interface JobListProps {
  jobs: Job[];
  departments: Job["department"][];
}

export function JobList({ jobs, departments }: JobListProps) {
  const [filters, setFilters] = useState<JobFilters>(DEFAULT_FILTERS);

  const filtered = useMemo(() => filterJobs(jobs, filters), [jobs, filters]);

  return (
    <div>
      <JobFiltersBar filters={filters} onChange={setFilters} departments={departments} />

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "role" : "roles"} found
        </p>
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <EmptyJobsState onReset={() => setFilters(DEFAULT_FILTERS)} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}