/* ------------------------------------------------------------------ */
/*  Job domain types                                                   */
/* ------------------------------------------------------------------ */

export type Workplace = "onsite" | "hybrid" | "remote";
export type EmploymentType = "full-time" | "part-time" | "contract" | "internship";
export type ExperienceLevel = "graduate" | "early-career" | "mid-level" | "senior";
export type JobStatus = "draft" | "published" | "paused" | "closed";
export type ApplicationMethod = "email" | "form" | "external";

export type Department =
  | "Engineering"
  | "AI & Data"
  | "Product & Design"
  | "Operations"
  | "Sales & Marketing"
  | "Research";

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: Department;
  location: string;
  workplace: Workplace;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  preferredQualifications?: string[];
  skills: string[];
  postedAt: string;        // ISO date "YYYY-MM-DD"
  closingAt: string | null;
  status: JobStatus;
  applicationMethod: ApplicationMethod;
  applicationEmail?: string;
  applicationUrl?: string;
  applicationInstructions?: string;
  salaryRange?: string;
}

/* ------------------------------------------------------------------ */
/*  Filter + search types                                              */
/* ------------------------------------------------------------------ */

export interface JobFilters {
  search: string;
  department: Department | "all";
  workplace: Workplace | "all";
  employmentType: EmploymentType | "all";
  experienceLevel: ExperienceLevel | "all";
}

export const DEFAULT_FILTERS: JobFilters = {
  search: "",
  department: "all",
  workplace: "all",
  employmentType: "all",
  experienceLevel: "all",
};