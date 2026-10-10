import { Mail, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Job } from "@/lib/careers/types";

export function ApplyInstructions({ job }: { job: Job }) {
  const { applicationMethod, applicationEmail, applicationUrl, applicationInstructions } = job;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <h3 className="text-lg font-semibold text-foreground mb-2">
        How to apply
      </h3>
      {applicationInstructions && (
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {applicationInstructions}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        {applicationMethod === "email" && applicationEmail && (
          <Button asChild size="lg">
            <a
              href={`mailto:${applicationEmail}?subject=Application: ${job.title}`}
              className="inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Apply via Email
            </a>
          </Button>
        )}

        {applicationMethod === "external" && applicationUrl && (
          <Button asChild size="lg">
            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Apply on External Site
            </a>
          </Button>
        )}

        {applicationMethod === "form" && (
          <Button asChild size="lg">
            <a href={`/careers/jobs/${job.slug}/apply`} className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Fill Application Form
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}