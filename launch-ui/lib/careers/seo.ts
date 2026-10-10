import type { Metadata } from "next";
import type { Job } from "./types";

const SITE_URL = "https://aliazadnetworks.com";

export function generateJobMetadata(job: Job): Metadata {
  const url = `${SITE_URL}/careers/jobs/${job.slug}`;
  const title = `${job.title} — ${job.location}`;

  return {
    title: `${title} | AliAzad Networks Careers`,
    description: job.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: job.description,
      url,
      type: "article",
      siteName: "AliAzad Networks",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: job.description,
    },
  };
}