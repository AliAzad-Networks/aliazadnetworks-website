import { MapPin, Briefcase, Clock, Calendar } from "lucide-react";
import type { Job } from "@/lib/careers/types";
import {
  formatWorkplace,
  formatEmploymentType,
  formatExperienceLevel,
  formatPostedDate,
} from "@/lib/careers/filters";

export function JobMetadata({ job }: { job: Job }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <MapPin className="h-4 w-4" />
        {job.location} · {formatWorkplace(job.workplace)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Briefcase className="h-4 w-4" />
        {formatEmploymentType(job.employmentType)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="h-4 w-4" />
        {formatExperienceLevel(job.experienceLevel)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Calendar className="h-4 w-4" />
        Posted {formatPostedDate(job.postedAt)}
      </span>
    </div>
  );
}