import type { Job } from "./types";

/* ------------------------------------------------------------------ */
/*  Lightweight runtime validation (no external deps)                  */
/* ------------------------------------------------------------------ */

const REQUIRED_STRING_FIELDS: Array<keyof Job> = [
  "id",
  "slug",
  "title",
  "department",
  "location",
  "workplace",
  "employmentType",
  "experienceLevel",
  "description",
  "postedAt",
  "status",
  "applicationMethod",
];

const REQUIRED_ARRAY_FIELDS: Array<keyof Job> = [
  "responsibilities",
  "qualifications",
  "skills",
];

export function validateJob(job: unknown, index: number): asserts job is Job {
  if (!job || typeof job !== "object") {
    throw new Error(`[careers] Job at index ${index} is not an object.`);
  }

  const j = job as Record<string, unknown>;

  for (const field of REQUIRED_STRING_FIELDS) {
    if (typeof j[field] !== "string" || (j[field] as string).trim() === "") {
      throw new Error(
        `[careers] Job "${j.slug ?? index}" is missing required field: ${field}`
      );
    }
  }

  for (const field of REQUIRED_ARRAY_FIELDS) {
    if (!Array.isArray(j[field])) {
      throw new Error(
        `[careers] Job "${j.slug}" field "${field}" must be an array.`
      );
    }
  }

  // Slug format check — kebab-case only
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(j.slug as string)) {
    throw new Error(
      `[careers] Job slug "${j.slug}" must be kebab-case (a-z, 0-9, hyphens).`
    );
  }
}

export function validateJobs(jobs: unknown[]): asserts jobs is Job[] {
  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();

  jobs.forEach((job, index) => {
    validateJob(job, index);

    const { id, slug } = job as Job;

    if (seenIds.has(id)) {
      throw new Error(`[careers] Duplicate job id: ${id}`);
    }
    if (seenSlugs.has(slug)) {
      throw new Error(`[careers] Duplicate job slug: ${slug}`);
    }

    seenIds.add(id);
    seenSlugs.add(slug);
  });
}