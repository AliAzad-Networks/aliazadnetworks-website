import { siteConfig } from "@/config/site";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

export default function Stats({
  items = [
    {
      label: "used by",
      value: "50+",
      suffix: "",
      description: "Projects Delivered Startups & Businesses Across India",
    },
    {
      label: "over",
      value: "5.0★",
      description: "Rated on Google of client retention rate since founding",
    },
    {
      label: "already",
      value: "15+",
      suffix: "",
      description: "certified engineers & technology specialists",
    },
    {
      label: "includes",
      value: "24/7",
      description: "proactive monitoring & rapid response for support",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={cn("py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 px-8", className)}>
      <div className="container mx-auto max-w-6xl">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-3 text-left"
              >
                {item.label && (
                  <div className="text-black text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_var(--brand-foreground)] transition-all duration-300 sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-black text-sm font-medium text-pretty">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
