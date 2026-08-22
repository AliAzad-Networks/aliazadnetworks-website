"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import LaunchUI from "../logos/launch-ui";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
  isLink?: boolean;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Services",
      content: "default",
    },
    {
      title: "Industries",
      content: "components",
    },
    {
      title: "Insights",
      content: "insights",
    },
    {
      title: "About AliAzad",
      isLink: true,
      href: siteConfig.page.about,
    },
    {
      title: "Contact Sales",
      isLink: true,
      href: siteConfig.page.contact,
    },
  ],
  components = [
    {
      title: "Technology & SaaS",
      href: siteConfig.page.AiProcessAutomation,
      description:
        "AI solutions for software development, IT operations, and SaaS innovation.",
    },
    {
      title: "Healthcare & Life Sciences",
      href: siteConfig.page.AiProcessAutomation,
      description:
        "AI solutions for patient care, drug discovery, and healthcare operations.",
    },
    {
      title: "Finance & FinTech",
      href: siteConfig.page.AiProcessAutomation,
      description:
        "AI solutions for financial analysis, risk management, and fintech innovation.",
    },
    {
      title: "Retail & E-commerce",
      href: siteConfig.page.AiProcessAutomation,
      description: "AI solutions for personalized shopping experiences, inventory management, and customer engagement.",
    },
    {
      title: "Real Estate & Construction",
      href: siteConfig.page.AiProcessAutomation,
      description:
        "AI solutions for property management, construction planning, and real estate analytics.",
    },
    {
      title: "Education & EdTech",
      href: siteConfig.page.AiProcessAutomation,
      description:
        "AI solutions for personalized learning experiences, educational content management, and student engagement.",
    },
  ],
  insights = [
    {
      title: "Our Work",
      href: siteConfig.page.ourwork,
      description: "Explore our portfolio of projects showcasing our expertise and impact.",
    },
    {
      title: "Our Team",
      href: siteConfig.page.team,
      description: "Meet the experts behind AliAzad Networks certified engineers, researchers, and tech enthusiasts.",
    },
    {
      title: "Case Studies",
      href: siteConfig.page.casestudies,
      description: "Client success stories that demonstrate our partnership approach.",
    },
    {
      title: "Blogs & News",
      href: "/blog",
      isLink: true,
      description: "Stay informed on threats, innovations, and best practices.",
    },
    {
      title: "View All insights →",
      href: "/insights",
      description: "Browse all expert content in one convenient location",
    },
  ],
  logo = <LaunchUI />,
  logoTitle = "India's trusted project partner for Startups and Business.",
  logoHref = siteConfig.url,
  introItems = [
    {
      title: "AI-Drivien Process Automation",
      href: siteConfig.page.AiProcessAutomation,
      description:
        "Eliminate manual work with intelligent AI systems",
    },
    {
      title: "Custom Software Development",
      href: siteConfig.page.CustomSoftwareDevelopment,
      description: "Full-stack AI products built from idea to launch",
    },
    {
      title: "Scalable Digital Transformation",
      href: siteConfig.page.DigitalTransformation,
      description: "End-to-end AI infrastructure for growing businesses",
    },
  ],
}: NavigationProps& { insights?: ComponentItem[] }) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href={item.href || ""}>{item.title}</Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={siteConfig.homeUrl}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                    ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "insights" ? ( // New insights dropdown
                    <ul className="grid w-[280px] gap-3 p-4 md:w-[320px] md:grid-cols-1">
                      {insights.map((industry) => (
                        <ListItem
                          key={industry.title}
                          title={industry.title}
                          href={industry.href}
                        >
                          {industry.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
