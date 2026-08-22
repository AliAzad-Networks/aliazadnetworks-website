import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import LaunchUI from "@/components/logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Mail, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

interface FooterLink {
  text: string;
  href: string;
  external?: boolean;
  icon?: ReactNode;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <LaunchUI />,
  columns = [
    {
      title: "Services",
      links: [
        {
          text: "AI-Drivien Process Automation",
          href: siteConfig.page.AiProcessAutomation,
        },
        {
          text: "Custom Software Development",
          href: siteConfig.page.CustomSoftwareDevelopment,
        },
        {
          text: "Scalable Digital Transformation",
          href: siteConfig.page.DigitalTransformation,
        },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About AliAzad", href: siteConfig.page.about },
        { text: "Explore Events", href: siteConfig.page.events },
        { text: "Our Process", href: siteConfig.page.process },
        { text: "Contact Sales", href: siteConfig.page.contact },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Our Work", href: siteConfig.page.ourwork },
        { text: "Our Teams", href: siteConfig.page.team },
        { text: "Case Studies", href: siteConfig.page.casestudies },
        { text: "Blogs & News", href: siteConfig.page.blog },
      ],
    },
    {
      title: "Contact",
      links: [
        {
          text: "LinkedIn",
          href: siteConfig.links.linkedin,
          external: true,
          icon: <Linkedin className="h-4 w-4" />,
        },
        {
          text: "X (Twitter)",
          href: siteConfig.links.twitter,
          external: true,
          icon: <Twitter className="h-4 w-4" />,
        },
        {
          text: "Instagram",
          href: siteConfig.links.instagram,
          external: true,
          icon: <Instagram className="h-4 w-4" />,
        },
        {
          text: "YouTube",
          href: siteConfig.links.youtube,
          external: true,
          icon: <Youtube className="h-4 w-4" />,
        },
      ],
    },
  ],
  copyright = "© 2026 AliAzad Networks | All rights reserved",
  policies = [
    { text: "Privacy Policy", href: siteConfig.url },
    { text: "Terms of Service", href: siteConfig.url },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("w-full bg-white px-8", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">{logo}</div>
              <div className="space-y-4">
                {/* Company Description */}
                <p className="text-muted-foreground text-sm">
                  India's trusted project partner for Startups and Business.
                </p>
                {/* Email with Icon */}
                <div className="flex items-center gap-2">
                  <Mail className="text-muted-foreground h-4 w-4" />
                  <span className="text-muted-foreground text-sm">
                    connect@aliazadnetworks.com
                  </span>
                </div>
                {/* Button */}
                <Button
                  asChild
                  className="mt-2 w-full sm:w-auto"
                  size="default"
                >
                  <a href="https://tally.so/r/Nppjvj">Request service</a>
                </Button>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground flex items-center gap-2 text-sm"
                  >
                    {link.icon && link.icon}
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
