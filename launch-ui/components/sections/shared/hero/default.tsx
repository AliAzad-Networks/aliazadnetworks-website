import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon, CalendarCheck } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Screenshot from "@/components/ui/screenshot";
import { Section } from "@/components/ui/section";
// Import the FlipWords component
import { FlipWords } from "@/components/ui/flip-words";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title = "We Can Help You Reimagine Your Business Through A Digital Lens",
  description = "AliAzad Networks helps companies modernize technology reimagine processes and transform experiences so they stay ahead in a fast changing world.",
  mockup = (
    <Screenshot
      srcLight="/dashboard-light.png"
      srcDark="/dashboard-dark.png"
      alt="AliAzad Networks app screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge variant="outline" className="animate-appear">
      <span className="text-muted-foreground">
        Get your business automated in 30 days
      </span>
      <a href={siteConfig.getStartedUrl} className="flex items-center gap-1">
        Claim Your Slot
        <ArrowRightIcon className="size-3" />
      </a>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get Started with AliAzad",
      variant: "default",
    },
    {
      href: siteConfig.page.contact,
      text: "Talk to an Expert",
      variant: "glow",
      icon: <CalendarCheck className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  // 👇 Define the words that will flip
  const flipWords = ["Business", "Innovation", "Software"];

  return (
    <Section
      className={cn(
        "overflow-hidden pb-0 sm:pb-0 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge !== false && badge}
          
          {/* Modified h1 with FlipWords */}
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-balance drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            We Can Help You Reimagine Your Business Through A{" "}
            <FlipWords 
              words={flipWords} 
              
            />
          </h1>

          <p className="text-md animate-appear text-black relative z-10 max-w-6xl text-balance opacity-0 delay-100 sm:text-xl">
            {description}
          </p>
          
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 opacity-0 delay-300 w-full sm:w-auto px-4 sm:px-0">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || "default"}
                  size="lg"
                  asChild
                  className="w-full sm:w-auto"
                >
                  <a href={button.href}>
                    {button.icon}
                    {button.text}
                    {button.iconRight}
                  </a>
                </Button>
              ))}
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-6">
              {/* <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                {mockup}
              </MockupFrame> */}
              <Glow
                variant="top"
                className="animate-appear-zoom opacity-0 delay-1000"
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}