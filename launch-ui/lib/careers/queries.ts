import { jobs } from "../../content/careers/jobs";
import type { Job } from "./types";

/* ------------------------------------------------------------------ */
/*  Read-only queries for the whole app                                */
/* ------------------------------------------------------------------ */

/** All published jobs, newest first. */
export function getAllJobs(): Job[] {
  return jobs
    .filter((job) => job.status === "published")
    .sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
}

/** Single job by slug. Returns null if not found or not published. */
export function getJobBySlug(slug: string): Job | null {
  const job = jobs.find((j) => j.slug === slug && j.status === "published");
  return job ?? null;
}

/** Every published slug — used by generateStaticParams. */
export function getAllJobSlugs(): string[] {
  return getAllJobs().map((job) => job.slug);
}

/** Total number of published openings. */
export function getOpenJobsCount(): number {
  return getAllJobs().length;
}

/** Unique departments that currently have at least one published role. */
export function getActiveDepartments(): Job["department"][] {
  const set = new Set(getAllJobs().map((j) => j.department));
  return Array.from(set).sort();
}