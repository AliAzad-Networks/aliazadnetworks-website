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
  description = "Your startup idea deserves more than a template. We build custom software from scratch — with AI intelligence built in from day one — so your product is smarter, faster, and harder to compete with from launch.",
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
  imageSrc = "https://www.adaptiv-networks.com/wp-content/uploads/2024/03/Branch-Office-1024x938.png",
  imageAlt = "Hero illustration",
  className,
}: HeroProps) {
  return (
    <Section className={cn("py-16 md:py-24", className)}>
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
                    <p className="text-sm text-foreground">Custom Software Development</p>
                </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              {title}<span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Your Startup Actually Needs</span>
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
          {/* Trust Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">GPT-4o</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">Python / FastAPI</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">OpenAI API</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">React</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">AWS / GCP</span>
                </div>
            </div>
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