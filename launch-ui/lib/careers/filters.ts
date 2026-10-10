import type { Job, JobFilters } from "./types";

/* ------------------------------------------------------------------ */
/*  Pure, client-safe filter function                                  */
/* ------------------------------------------------------------------ */

export function filterJobs(jobs: Job[], filters: JobFilters): Job[] {
  const search = filters.search.trim().toLowerCase();

  return jobs.filter((job) => {
    if (filters.department !== "all" && job.department !== filters.department) {
      return false;
    }
    if (filters.workplace !== "all" && job.workplace !== filters.workplace) {
      return false;
    }
    if (
      filters.employmentType !== "all" &&
      job.employmentType !== filters.employmentType
    ) {
      return false;
    }
    if (
      filters.experienceLevel !== "all" &&
      job.experienceLevel !== filters.experienceLevel
    ) {
      return false;
    }

    if (search) {
      const haystack = [
        job.title,
        job.description,
        job.location,
        job.department,
        ...job.skills,
      ]
        .join(" ")
        .toLowerCase();

      if (!haystack.includes(search)) return false;
    }

    return true;
  });
}

/* ------------------------------------------------------------------ */
/*  Human-readable labels for use in UI                                */
/* ------------------------------------------------------------------ */

export function formatWorkplace(value: Job["workplace"]): string {
  return { onsite: "On-site", hybrid: "Hybrid", remote: "Remote" }[value];
}

export function formatEmploymentType(value: Job["employmentType"]): string {
  return {
    "full-time": "Full-time",
    "part-time": "Part-time",
    contract: "Contract",
    internship: "Internship",
  }[value];
}

export function formatExperienceLevel(value: Job["experienceLevel"]): string {
  return {
    graduate: "Graduate",
    "early-career": "Early career",
    "mid-level": "Mid-level",
    senior: "Senior",
  }[value];
}

export function formatPostedDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}