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
  title = "Stop Doing Manually ",
  description = "We map your most time-consuming manual processes, then build AI systems that handle them automatically 24/7, with zero errors and no extra headcount.",
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Start Free Consultation",
      variant: "default",
      icon: <ArrowRight className="mr-2 h-4 w-4" />,
    },
    {
      href: siteConfig.page.ourwork,
      text: "View Portfolio",
      variant: "outline",
      icon: <CalendarCheck className="mr-2 h-4 w-4" />,
    },
  ],
  imageSrc = "https://f1.madcapsoftware.com/websiteImages/illustrations/ill-IXIACCMS-hero1.png",
  imageAlt = "Hero illustration",
  className,
}: HeroProps) {
  return (
    <Section className={cn("py-16 md:py-24 bg-[#f9f9f9]", className)}>
      <div className="max-w-container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side - Content */}
          <div className="flex flex-col items-center md:items-start flex-1">
            {/* Badge */}
            <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-white/50 dark:bg-card/50 border border-border backdrop-blur-sm">
                    <div className="relative flex size-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
                    <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
                    </div>
                    <p className="text-sm text-foreground">AI Driven Process Automation</p>
                </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {title}<span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">What AI Can Do Automatically</span>
            </h1>
            <p className="text-black text-lg mb-8 max-w-lg mx-auto md:mx-0">
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
                className="w-full h-auto object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
          
        </div>
      </div>
    </Section>
  );
}