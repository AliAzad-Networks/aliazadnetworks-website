import { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import Figma from "@/components/logos/figma";
import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/ui/logo";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

// Original Logos component (now named export)
export function Logos({
  title = "Trusted by world's leading companies",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Last updated: {siteConfig.stats.updated}
    </Badge>
  ),
  logos = [
    <Logo key="figma" image={Figma} name="Figma" />,
    <Logo key="react" image={React} name="React" version="19.2.1" />,
    <Logo
      key="typescript"
      image={TypeScript}
      name="TypeScript"
      version="5.9.3"
    />,
    <Logo
      key="shadcn"
      image={ShadcnUi}
      name="Shadcn/ui"
      version="3.6.3"
      badge="New"
    />,
    <Logo key="tailwind" image={Tailwind} name="Tailwind" version="4.1.18" />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}

// New SocialProofFullWidth component (now default export)
export default function SocialProofFullWidth() {
  const logos = [
    { src: "https://www.zpiceup.in/Company%20Logos%20-500%20x%20200%20px-%20-2-.png", alt: "Company 1", darkSrc: "https://www.startupindia.gov.in/sih/themes/custom/startup_india/images/header-icons/DPIIT-header.png" },
    { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=198,fit=crop/YX4y5nl4W4uOgE1e/bhaskar_logo-m6LwRagzzkfo6z96.png", alt: "BHASKAR", darkSrc: null },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Ministry_of_Electronics_and_Information_Technology.svg", alt: "MeitY", darkSrc: null },
    { src: "https://www.codingninjas.com/landing/wp-content/uploads/2022/06/logo-05.png", alt: "Coding Ninjas", darkSrc: null },
    { src: "https://wallpapers.com/images/featured/github-logo-png-s8wb6yxlatsyp8s1.jpg", alt: "GitHub", darkSrc: null },
    { src: "https://msmedevelopmentforum.com/wp-content/uploads/2022/06/Q1-MSME-LOGO.png", alt: "MSME", darkSrc: null },
    // Add any additional logos you need
  ];

  return (
    <Section
  className="py-16 md:py-24"
  style={{
    background: "linear-gradient(35deg, rgba(15,105,160,1) 0%, rgba(23,71,122,1) 15%, rgba(29,45,92,1) 30%, rgba(29,45,92,1) 60%, rgba(39,93,112,1) 85%, rgba(55,131,114,1) 100%)",
    backgroundSize: "cover",
  }}
>
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="flex flex-col gap-8">
          <div className="mb-1 sm:mb-2">
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-md font-bold text-white">
            Certified 100+ Startup India Recognised
          </h2>
          <p className="text-white sm:mx-auto">
            Bringing together the best of our partner network to create competitive advantage for your business.
          </p>
          </div>
          {/* Optional: add the "Leading companies rely on..." line if desired */}
          {/* <h3 className="text-lg text-center text-foreground/80">Leading companies rely on AliAzad Networks</h3> */}
          
          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-6 max-md:px-4 max-w-7xl mx-auto">
            {logos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center border shadow hover:shadow-lg transition-all border-slate-200 dark:border-slate-700 p-5 bg-card">
                {logo.darkSrc ? (
                  <>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-9 md:h-12 w-auto object-contain dark:hidden"
                      loading="lazy"
                    />
                    <img
                      src={logo.darkSrc}
                      alt={logo.alt}
                      className="h-9 md:h-12 w-auto object-contain hidden dark:block"
                      loading="lazy"
                    />
                  </>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-9 md:h-12 w-auto object-contain dark:opacity-80"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}