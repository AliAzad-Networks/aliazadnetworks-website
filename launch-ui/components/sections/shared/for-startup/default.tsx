"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function TrustedBanner({ className }: { className?: string }) {
  return (
    <Section className={cn("", className)}>
      <div className="px-4">
        {/* Full-width Banner Container */}
          {/* Background Blurs (stay full width) */}
          <div className="absolute pointer-events-none top-10 -z-10 left-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[180px] opacity-70" />
          <div className="absolute pointer-events-none bottom-10 -z-10 right-20 size-64 bg-gradient-to-br from-[#536DFF] to-[#F046FF] blur-[180px] opacity-70" />

          {/* Constrained content wrapper */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Column: Text Content */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
                {/* "NEW" Badge with Link */}
                

                {/* Headline */}
                <h1 className="text-3xl md:text-4xl font-medium max-w-xl mt-5 bg-[#1b3139] text-transparent bg-clip-text">
                  Built on real work: AI for Startups
                </h1>

                {/* Description */}
                <p className="text-base text-[#1b3139] max-w-4xl mt-4">
                  The AliAzad Networks for Startup Program - powered bu the AliAzad Networks Platform - allows startups to build and ship better AI at scale
                </p>

                {/* CTA Button */}
                <Link
                    href={siteConfig.page.contact || "/contact"}
                    className="flex items-center gap-1 text-sm px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition rounded-full mt-6"
                    >
                    Read the executive brief
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M12.4243 5.42426C12.6586 5.18995 12.6586 4.81005 12.4243 4.57574L8.60589 0.757359C8.37157 0.523045 7.99167 0.523045 7.75736 0.757359C7.52304 0.991674 7.52304 1.37157 7.75736 1.60589L11.1515 5L7.75736 8.39411C7.52304 8.62843 7.52304 9.00833 7.75736 9.24264C7.99167 9.47696 8.37157 9.47696 8.60589 9.24264L12.4243 5.42426ZM0 5L0 5.6L12 5.6V5V4.4L0 4.4L0 5Z"
                        fill="currentColor"
                        />
                    </svg>
                    </Link>
              </div>

              {/* Right Column: Image */}
              <div className="flex-1 flex justify-center md:justify-end z-10">
                <img
                  src="https://www.databricks.com/sites/default/files/2026-04/databricks-for-startups-header-graphic.png?v=1775190871"
                  alt="AliAzad Networks for Startups"
                  className="max-w-xs md:max-w-sm w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
}