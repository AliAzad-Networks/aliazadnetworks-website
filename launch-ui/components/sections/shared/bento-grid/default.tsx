"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import {
  FileText,
  CodeXml,
  MessageCircle,
  UserRoundCog,
  BadgePercent,
  Shield,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";



const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
header: (
  <div className="relative w-full h-48 overflow-hidden">
    <img src="https://ddi-dev.com/uploads/create-ai-software.png" alt="Description" className="w-full h-full object-cover" />
  </div>
),      icon: <UserRoundCog className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "9 Best AI App Builders in 2026",
    description: "Dive into the transformative power of technology.",
header: (
  <div className="relative w-full h-48 overflow-hidden">
    <img src="https://www.dronahq.com/wp-content/uploads/2025/06/top_ai_app_builders-1-scaled.webp" alt="Description" className="w-full h-full object-cover" />
  </div>
),    icon: <BadgePercent className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Artificial Intelligence Software: A New Frontier",
    description: "Discover the beauty of thoughtful and functional design.",
header: (
  <div className="relative w-full h-48 overflow-hidden">
    <img src="https://s7494.pcdn.co/coop-career-centre/files/2023/09/AI-Software-Dev-1200x628-1.jpg" alt="Description" className="w-full h-full object-cover" />
  </div>
),      icon: <Shield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
header: (
  <div className="relative w-full h-48 overflow-hidden">
    <img src="https://media.licdn.com/dms/image/v2/D4E12AQE3dBkbf0eqVQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1696955087706?e=2147483647&v=beta&t=IWdgf0naVbzQ1YH_zE4eBGrX-VlfgJl9rDZHVsFPPEc" alt="Description" className="w-full h-full object-cover" />
  </div>
),      icon: <ShieldCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "AI for Engineering: A Paradigm Shift",
    description: "Join the quest for understanding and enlightenment.",
header: (
  <div className="relative w-full h-48 overflow-hidden">
    <img src="https://ai-build.com/wp-content/uploads/2026/01/Post-Tile-Sizerelease.png" alt="Description" className="w-full h-full object-cover" />
  </div>
),      icon: <FileText className="h-4 w-4 text-neutral-500" />,
  },
];

export default function BentoGridSection({ className }: { className?: string }) {
  return (
    <Section className={cn("py-16 md:py-24 bg-gray-50", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Research, Announcements & Thought Leadership</h2>
            <p className="text-black mx-auto mt-2">
              Connecting ideas, to impact - bringing together news, insights, perspectives, and decisions that shape the future
            </p>
          </div>
          <Link 
            href={siteConfig.page.blog}  // or use a specific insights/blog page URL
            className="text-primary hover:text-primary/80 flex items-center whitespace-nowrap group mt-4 md:mt-0"
          >
            Explore all Tech Blogs
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <BentoGrid className="max-w-container mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </Section>
  );
}