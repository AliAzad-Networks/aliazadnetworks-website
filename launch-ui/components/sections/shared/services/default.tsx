import React from "react";
import { cn } from "@/lib/utils";
import { 
  Activity, 
  TrendingUp, 
  Code,
  ArrowRight 
} from "lucide-react";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

const ServiceCard = ({ title, description, icon: Icon, href, imageSrc, imageAlt }: ServiceCardProps) => {
  return (
    <Link href={href} className="group block w-full mb-12 sm:mb-4">
      <div className="relative w-full h-[500px] overflow-hidden cursor-pointer">
        {/* Background Image - using regular img tag */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Icon
          <div className="mb-3 transform transition-transform duration-500">
            <Icon className="w-10 h-10" strokeWidth={1.5} />
          </div> */}
          
          {/* Title */}
          <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-500">
            {title}
          </h3>
          
          {/* Description - hidden on mobile, visible on hover on desktop */}
          <p className="text-sm text-white/90 mb-4 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            {description}
          </p>
          
          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium transform translate-y-0 group-hover:translate-y-[-4px] transition-transform duration-500">
            <span className="relative inline-block">
              View industry
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white group-hover:w-full transition-all duration-500"></span>
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Services({ className }: { className?: string }) {
  
  const services = [
    {
      title: "AI-Drivien Process Automation",
      description: "From a simple workflow, to managing AI automation systems across your entire business, make it happen with intelligent systems",
      icon: Activity,
      href: siteConfig.page.AiProcessAutomation,
      imageSrc: "https://d341ezm4iqaae0.cloudfront.net/hiringlaborg/sites/3/2026/07/07185539/Office_paneldiscussionaboutAIinfrontofgroup_Gettyperp-1.jpg",
      imageAlt: "AI-Drivien Process Automation"
    },
    {
      title: "Custom Software Development",
      description: "Design, develop, and optimize custom software from solution architecture to core engineering to product evoution and support.",
      icon: Code,
      href: siteConfig.page.CustomSoftwareDevelopment,
      imageSrc: "https://www.perfectiongeeks.com/image/top-custom-software-companies.webp",
      imageAlt: "Custom Software Development"
    },
    {
      title: "Scalable Digital Transformation",
      description: "A complete, end-to-end upgrade of how your business runs - replacing outdated manual systems with intelligent, automated infrastructure that handles 10× the workload without 10× the team.",
      icon: TrendingUp,
      href: siteConfig.page.DigitalTransformation,
      imageSrc: "https://cdn.scopicsoftware.com/wp-content/uploads/2024/08/custom-software-development-companies.webp",
      imageAlt: "Scalable Digital Transformation"
    }
  ];

  return (
    <Section className={cn("bg-white", className)}>
      <div className="max-w-container mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-md mb-4 text-foreground leading-tight">Get started with AliAzad Networks</h2>
          <p className="text-black mx-auto">
            Strategic Solutions to Scale Your Business for the Future.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </Section>
  );
}