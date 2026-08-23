"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";

interface FeatureCard {
  image: string;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCards({ className }: { className?: string }) {
  const features: FeatureCard[] = [
    {
      image: "https://media.istockphoto.com/id/1419539600/photo/business-presentation-and-man-on-a-laptop-in-a-corporate-conference-or-office-collaboration.jpg?s=612x612&w=0&k=20&c=viDl-Gtp68kqaCeh0WbnqM0EERvGec4i5C_Vk84VHKE=",
      title: "Our Mission and Values",
      description: "Our values of impact, aspiration and trust make us who we are and guide everything we do.",
      href: siteConfig.page.AiProcessAutomation || "/features/feedback-analyser",
    },
    {
      image: "https://proficloud.io/wp-content/uploads/2023/07/Proficloud-DMS-Basic-Add-on-Newsblog-1024x682.jpg",
      title: "Smart user management",
      description: "Manage users, roles, and permissions with ease using our intuitive user management system.",
      href: siteConfig.page.AiProcessAutomation || "/features/user-management",
    },
    {
      image: "https://careers.expediagroup.com/wp-content/uploads/2024/06/230614-owenbphoto-ExpediaIBG-Group-0015770-scaled.jpg",
      title: "Our inclusive community",
      description: "From our vibrant employee to our trailblazing pay gap report where everyone can thrive.",
      href: siteConfig.page.AiProcessAutomation || "/features/better-invoicing",
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center gap-4 flex flex-col items-center">
          <h1 className="text-3xl md:text-4xl text-foreground">
            Who we are
          </h1>
          <p className="text-foreground text-base md:text-md max-w-5xl">
            We are a team of passionate developers, designers, and strategists dedicated to creating innovative solutions.
          </p>
        </div>

        {/* Cards grid - responsive 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full hover:-translate-y-1 transition duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-auto object-cover shadow-md"
                loading="lazy"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mt-4">
                {feature.title}
              </h3>
              <p className="text-base md:text-md text-muted-foreground mt-1">
                {feature.description}
              </p>
              <Link
                href={feature.href}
                className="inline-flex items-center text-primary text-sm font-medium mt-3 hover:gap-1 transition-all"
              >
                Find out more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}