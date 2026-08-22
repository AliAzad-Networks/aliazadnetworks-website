"use client";

import React from "react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Team() {
  
  const teamImages = {
    column1: [
      {
        src: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
        alt: "Team Member 1",
      },
      {
        src: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop",
        alt: "Team Member 5",
      },
    ],
    column2: [
      {
        src: "../assets/images/client/armaan.jpeg",
        alt: "Team Member 2",
      },
      {
        src: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop",
        alt: "Team Member 4",
      },
      {
        src: "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop",
        alt: "Team Member 1",
      },
    ],
    column3: [
      {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop",
        alt: "Team Member 3",
      },
      {
        src: "../assets/images/client/hamdan-ahmed.jpg",
        alt: "Team Member 5",
      },
    ],
  };

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16 lg:px-24 xl:px-32 flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content - Text and Button */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <h2 className="text-center lg:text-left text-4xl md:text-5xl/16 max-w-lg leading-tight">
            Meet the team shaping the future.
          </h2>
          <p className="text-center lg:text-left text-sm text-gray-100 max-w-md">
            Our diverse team of engineers, designers and innovators is dedicated to building AI agents that simplify work and empower businesses worldwide.
          </p>
          <Button asChild className="text-sm text-slate-50 rounded-full bg-indigo-500 hover:bg-indigo-600 px-4 py-2 mt-2">
            <Link href={siteConfig.page.team}>Join our team</Link>
          </Button>
        </div>

        {/* Right Content - Image Gallery */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 pt-12">
            {teamImages.column1.map((image, index) => (
              <div key={`col1-${index}`} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden transform transition hover:-translate-y-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {teamImages.column2.map((image, index) => (
              <div key={`col2-${index}`} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden transform transition hover:-translate-y-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 pt-8">
            {teamImages.column3.map((image, index) => (
              <div key={`col3-${index}`} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden transform transition hover:-translate-y-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}