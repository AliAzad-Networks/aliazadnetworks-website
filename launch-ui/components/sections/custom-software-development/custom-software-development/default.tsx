"use client";

import { ArrowRight, CalendarCheck, Check } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: "default" | "outline" | "ghost" | "glow";
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  buttons?: HeroButtonProps[] | false;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function Hero({
  title = "We Build the Full Stack Software",
  description = "Your startup idea deserves more than a template. We build custom software from scratch - with AI intelligence built in from day one - so your product is smarter, faster, and harder to compete with from launch.",
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Start Free Research Consultation",
      variant: "default",
      icon: <ArrowRight className="mr-2 h-4 w-4" />,
    },
    {
      href: siteConfig.page.ourwork,
      text: "View Published Papers",
      variant: "outline",
      icon: <CalendarCheck className="mr-2 h-4 w-4" />,
    },
  ],
  imageSrc = "/assets/images/CSD_Avtar.webp",
  imageAlt = "Hero illustration",
  className,
}: HeroProps) {
  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Content */}
          <div className="flex flex-col items-center md:items-start flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-foreground">
              {title} <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Your Startup Actually Needs</span>
            </h1>
            <p className="mb-8 max-w-lg mx-auto md:mx-0">
              {description}
            </p>
            
            {/* Buttons */}
            {buttons !== false && buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    asChild
                  >
                    <Link href={button.href}>
                      {button.icon}
                      {button.text}
                      {button.iconRight}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
          
          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}