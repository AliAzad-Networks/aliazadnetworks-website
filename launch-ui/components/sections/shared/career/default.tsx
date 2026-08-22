"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function BannerSection({ className }: { className?: string }) {
  return (
    <Section className={cn("", className)}>
      <div className="mx-auto px-4">
        {/* Wrapper with relative positioning */}
        <div className="relative flex flex-col items-center justify-center text-center py-16 md:py-40 px-6 bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: `url('https://insights.techmahindra.com/images/join-team-img.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/90"></div>
          {/* Content with higher z-index */}
          <div className="relative z-10">
            <h1 className="text-2xl md:text-4xl font-medium text-white max-w-4xl">
              Build Smarter with Insights From Technical Leaders
            </h1>
            <div className="h-[3px] w-32 my-3 bg-gradient-to-l from-white/80 to-white/20 rounded-full mx-auto" />
            <p className="text-sm md:text-base text-white/90 max-w-3xl">
              AliAzad Networks is a global shifting leader in technology transformation, powered by AI.
            </p>
            <Link
              href={siteConfig.page.ourwork}
              className="inline-block px-8 py-3 mt-6 text-sm font-medium bg-white text-gray-900 hover:scale-105 transition duration-300 rounded-full shadow-lg hover:shadow-xl"
            >
              Explore Our All Portfolio
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}