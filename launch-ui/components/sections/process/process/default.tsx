import React from "react";
import { cn } from "@/lib/utils";
import { 
  FileEdit, Headset, Laptop, Check, CheckCircle2 
} from "lucide-react";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function HorizontalStepper({ className }: { className?: string }) {  
  const steps = [
    { number: 1, title: "Share Your Requirements", description: "Tell us what you want to build.", icon: FileEdit, active: true, completed: true },
    { number: 2, title: "Strategy Call & Project Plan", description: "Discuss your idea with our experts.", icon: Headset, active: true, completed: true },
    { number: 3, title: "Development & Progress Updates", description: "We build while keeping you involved.", icon: Laptop, active: true, completed: true },
    { number: 4, title: "Final Delivery & Support", description: "Get complete source code, plus 30 days of free support.", icon: Check, active: true, completed: true },
  ];
   

  return (
    <Section className={cn("bg-[#f9f9f9]", className)}>
    <div className=" py-16 md:py-20 max-w-container mx-auto px-8">
      <div className="text-center mb-12 sm:mb-20">
        <h2 className="text-2xl md:text-4xl">How Our Development Process Works</h2>
      </div>

      <div className="relative">       
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative ">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <React.Fragment key={index}>
                <div className="flex md:flex-col items-center md:text-center relative z-10 w-full md:w-auto">
                  <div className="relative">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-slate-900 border-2",
                      step.completed ? "border-primary text-primary" : "border-gray-300 dark:border-slate-700 text-gray-400"
                    )}>
                      {step.completed ? <IconComponent className="w-6 h-6" /> : <IconComponent className="w-6 h-6" />}
                    </div>
                    {step.completed && <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900" />}
                  </div>
                  
                  <div className="ml-4 md:ml-0 md:mt-4 flex-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">Step {step.number}</span>
                    <h3 className="font-semibold text-sm md:text-base mt-1">
                      {step.title === "Share Your Requirements" ? (
                        <Link href="https://tally.so/r/Nppjvj" className="hover:text-primary transition-colors">
                          {step.title}
                        </Link>
                      ) : (
                        step.title
                      )}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-[250px] mx-auto">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden md:block flex-1 h-[2px] mx-2 relative top-[-30px]">
                    <div className={cn("h-full", step.completed ? "bg-primary" : "bg-gray-300 dark:bg-slate-700")} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
    </Section>
  );
}