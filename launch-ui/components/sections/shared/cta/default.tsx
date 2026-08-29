import { type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { Calendar, MessageCircle, Clock, CheckCircle, Shield } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Section } from "@/components/ui/section";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface CTAProps {
  headline?: string;
  subline?: string;
  buttons?: CTAButtonProps[] | false;
  trustLine?: string;
  className?: string;
}

const WhatsAppIcon = () => (
  <svg 
    className="mr-2 h-4 w-4 text-[#25D366]" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.798 2 2.548 6.193 2.54 11.393c-.003 1.748.456 3.457 1.328 4.985L2.25 21.75l5.422-1.56c1.473.853 3.136 1.303 4.84 1.304h.004c5.198 0 9.456-4.195 9.464-9.396.004-2.51-.97-4.873-2.857-6.76zM12.034 19.79h-.003c-1.494 0-2.958-.403-4.228-1.16l-.303-.18-3.297.95 1.007-3.176-.177-.315c-.801-1.346-1.224-2.89-1.222-4.474.008-4.322 3.526-7.833 7.857-7.833 2.096 0 4.067.818 5.55 2.302 1.482 1.485 2.298 3.46 2.293 5.554-.008 4.322-3.526 7.832-7.85 7.832zm4.354-6.05c-.242-.12-1.43-.704-1.65-.784-.22-.08-.38-.12-.54.12-.16.24-.622.784-.763.945-.14.16-.28.18-.52.06-.24-.12-1.013-.372-1.928-1.186-.713-.635-1.194-1.418-1.334-1.658-.14-.24-.015-.37.105-.49.107-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.296-.74-1.776-.194-.466-.392-.403-.54-.41-.14-.007-.3-.007-.46-.007-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.56 4.06 3.6.568.248.99.396 1.33.508.56.186 1.07.16 1.474.098.45-.07 1.386-.566 1.58-1.113.195-.546.195-1.014.136-1.112-.06-.098-.22-.16-.46-.28z"/>
  </svg>
);

export default function CTA({
  headline = "Ready to build something great?",
  subline = "Book a free consultation with our experts and discover how we can help you turn your vision into reality.",
  buttons = [
    {
      href: siteConfig.calendlyUrl || "https://calendly.com/aliazadnetworks/consultation",
      text: "Book Free Consultation",
      variant: "default",
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      href: siteConfig.whatsappUrl || "https://wa.me/9636463361?text=Hi%20Aliazad%20Networks%2C%20I'd%20like%20to%20know%20more%20about%20your%20services",
      text: "Business Contacts",
      variant: "outline",
      icon: <WhatsAppIcon />,  // Use real WhatsApp icon
    },
  ],
  className,
}: CTAProps) {
  return (
    <Section className={cn("py-16 md:py-16 group relative overflow-hidden px-8", className)}>
      <div className="max-w-container relative z-10 mx-auto flex flex-col items-center gap-6 text-center sm:gap-8">
        {/* Headline */}
        <h2 className="max-w-[640px] text-3xl leading-tight font-semibold sm:text-4xl sm:leading-tight">
          {headline}
        </h2>
        
        {/* Subline */}
        <p className="max-w-[540px] text-black text-base">
          {subline}
        </p>
        
        {/* CTA Buttons */}
        {buttons !== false && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || "default"}
                size="lg"
                asChild
                className="w-full sm:w-auto"
              >
                <a 
                  href={button.href}
                  target={button.href.startsWith('http') ? '_blank' : undefined}
                  rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {button.icon}
                  {button.text}
                  {button.iconRight}
                </a>
              </Button>
            ))}
          </div>
        )}
                
      </div>
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 h-full w-full translate-y-[1rem] opacity-80 transition-all duration-500 ease-in-out group-hover:translate-y-[-2rem] group-hover:opacity-100">
        <Glow variant="bottom" />
      </div>
    </Section>
  );
}