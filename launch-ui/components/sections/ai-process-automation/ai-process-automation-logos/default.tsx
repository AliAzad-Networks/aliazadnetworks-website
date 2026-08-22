"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

export default function MarqueeLogos({ className }: { className?: string }) {
  const logos = [
    { name: "Tech Corp", logo: "https://vectorseek.com/wp-content/uploads/2023/12/SRM-Institute-of-Science-and-Technology-Logo-Vector.svg-.png" },
    { name: "Startup X", logo: "https://chennai.vit.ac.in/wp-content/uploads/2021/08/vit_logo_colored.png" },
    { name: "Innovate", logo: "https://e7.pngegg.com/pngimages/636/41/png-clipart-manipal-academy-of-higher-education-manipal-institute-of-technology-kasturba-medical-college-manipal-international-university-manipal-university-dubai-manipal-university.png" },
    { name: "FutureSoft", logo: "https://qs-igauge.blr1.cdn.digitaloceanspaces.com/KCG%20College%20Logo.png" },
    { name: "NextGen", logo: "https://crescent.mastersofterp.in/Images/DEFAULT_BG/default_logo1.png" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <Section className={cn("py-12 md:py-16 bg-background overflow-hidden", className)}>
      <div className="max-w-container mx-auto px-4">
        <h3 className="text-base text-center text-black pb-8 font-medium">
          Trusted by leading brands, including —
        </h3>

        <div className="overflow-hidden select-none">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

          {/* Marquee */}
          <div className="flex marquee-inner will-change-transform">
            {duplicatedLogos.map((logo, index) => (
              <img
                key={index}
                className="mx-12 h-8 w-auto object-contain"
                src={logo.logo}
                alt={logo.name}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 10s linear infinite;
        }
        .marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>
    </Section>
  );
}