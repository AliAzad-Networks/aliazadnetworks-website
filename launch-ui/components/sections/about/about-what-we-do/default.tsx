"use client";

import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function WhatWeDo({ className }: { className?: string }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <Section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          
          {/* Left Side - Video */}
          <div className="relative shadow-2xl shadow-primary/20 rounded-2xl overflow-hidden shrink-0 w-full max-w-md">
            <div 
              className="relative w-full cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setActiveVideo("intro")}
            >
              <div className="relative pt-[100%]">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/077/973/122/small/business-people-laugh-and-team-outdoor-in-city-for-discussion-funny-conversation-or-deal-happy-men-woman-or-corporate-colleagues-together-for-friendship-partnership-or-networking-for-work-photo.jpg"
                  alt="Team collaboration"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary fill-primary/10 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Community Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center gap-3">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-background"
                />
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center border-2 border-background">
                  50+
                </div>
              </div>
              <p className="text-xs font-medium text-foreground">
                Join 200+ satisfied clients
              </p>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="text-sm text-muted-foreground max-w-lg">
            <h1 className="text-xl uppercase font-semibold text-foreground">
              What we do?
            </h1>
            <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary/30 mt-2"></div>
            
            <div className="mt-6 space-y-4">
              <p>
                AliAzad Networks was founded in Bangalore, Karnataka with one observation: Entrepreneurs across India were full of ambition but had no reliable, affordable partner to help them build real technology projects.
              </p>
              <p>
                India is on the verge of its largest technology transformation since the IT boom of the 2000s — except this time, it is powered by artificial intelligence. By 2030, India's AI market is projected to exceed $17 billion. The companies, products, and graduates who build AI fluency today will own that future.
              </p>
              <p> 
                We made a deliberate choice in 2024: to position AliAzad Networks not as a general software shop, but as a specialist AI engineering company. Every service we offer — from a B.Tech project to a SaaS platform to a research paper — is designed with AI at its core.
              </p>
              <p>
                This means our Scalable Digital Transformation score higher because they implement real machine learning. Our startup products grow faster because they are intelligent from day one. Our research papers get accepted because they contribute genuine AI methodology — not recycled ideas.
              </p>
            </div>
            
            <Button
              asChild
              className="mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 rounded-full"
            >
              <Link href="/about">
                Read more
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Video Embed */}
            <div className="relative pt-[56.25%]">
              <iframe
                src="https://www.youtube.com/embed/G_XygxgIPnU"
                title="Intro Video"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}