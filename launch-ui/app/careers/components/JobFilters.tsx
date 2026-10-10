"use client";

import { Search, X } from "lucide-react";
import type { JobFilters as Filters, Department, Workplace, EmploymentType, ExperienceLevel } from "@/lib/careers/types";

interface JobFiltersBarProps {
  filters: Filters;
  onChange: (next: Filters) => void;
  departments: Department[];
}

export function JobFiltersBar({ filters, onChange, departments }: JobFiltersBarProps) {
  const update = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    onChange({ ...filters, [key]: value });

  const hasActiveFilters =
    filters.search !== "" ||
    filters.department !== "all" ||
    filters.workplace !== "all" ||
    filters.employmentType !== "all" ||
    filters.experienceLevel !== "all";

  const reset = () =>
    onChange({
      search: "",
      department: "all",
      workplace: "all",
      employmentType: "all",
      experienceLevel: "all",
    });

  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          placeholder="Search by title, skill, or location…"
          className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <select
          value={filters.department}
          onChange={(e) => update("department", e.target.value as Filters["department"])}
          className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="all">All departments</option>
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select
          value={filters.workplace}
          onChange={(e) => update("workplace", e.target.value as Filters["workplace"])}
          className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="all">All locations</option>
          <option value="onsite">On-site</option>
          <option value="hybrid">Hybrid</option>
          <option value="remote">Remote</option>
        </select>

        <select
          value={filters.employmentType}
          onChange={(e) => update("employmentType", e.target.value as Filters["employmentType"])}
          className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="all">All types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>

        <select
          value={filters.experienceLevel}
          onChange={(e) => update("experienceLevel", e.target.value as Filters["experienceLevel"])}
          className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="all">All levels</option>
          <option value="graduate">Graduate</option>
          <option value="early-career">Early career</option>
          <option value="mid-level">Mid-level</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      {hasActiveFilters && (
        <button
          onClick={reset}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-3.5 w-3.5" />
          Clear filters
        </button>
      )}
    </div>
  );
}