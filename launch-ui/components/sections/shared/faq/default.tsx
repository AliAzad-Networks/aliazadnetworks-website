import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "@/components/ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Questions and Answers",
  items = [
    {
      question:
        "What specific services does Aliazad Networks provide?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Aliazad Networks offers a wide range of IT & Tech services, including
            custom software development, cloud solutions, and
            IT consulting. Our team of experts is dedicated to helping your
            business leverage technology to achieve its goals.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            AliAzad Networks helps you ship faster without compromising on quality.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            To get registered your project, Fill the form{" "}
            <Link href="/pricing" className="text-foreground underline">
              Request a service
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question: "Do you work with small businesses or only large enterprises?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Aliazad Networks works with businesses of all sizes, from small startups to large enterprises. 
            We tailor our solutions to meet the unique needs of each client, 
            ensuring that you get the most value from our services.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Our solutions are modular and scalable, meaning we can design a package that fits your current budget 
            and requirements while leaving room for future growth.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
             Whether you need a complete software overhaul or ongoing managed IT support, we have a solution that fits your stage of business.
          </p>
        </>
      ),
    },
    {
      question:
        "What is your typical project timeline and process?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Every project follows our proven four-phase methodology: Discovery, Design, Deployment, and Support. 
            The timeline depends on the scope and complexity of your needs.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            During the Discovery phase (usually 3–5 days), we assess your environment and requirements. 
            Design takes 1–2 weeks, followed by Deployment (1–4 weeks) with minimal disruption to your daily operations. 
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Most projects take 2–8 weeks, following our Discovery → Design → Deployment → Support methodology with minimal business disruption.
          </p>
        </>
      ),
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely. We believe technology needs continuous care, not just a one-time setup. 
            Aliazad Networks offers flexible managed IT services that include 24/7 network monitoring, 
            proactive maintenance, patch management, helpdesk support, and regular health checks. 
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            You can choose from basic monitoring packages to comprehensive full-service agreements. 
            Our support team is always accessible via phone, email, or our client portal, ensuring 
            any issues are resolved quickly – often before you even notice them.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            To get support with our tech expert, check out{" "}
            <Link href="/pricing" className="text-foreground underline">
              Contact tech support
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question: "Will I receive complete source code? Can i use it modify it freely?",
      answer: (
        <>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Yes - 100% ownership transfers to you upon final payment. You receive:
        </p>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Full source code via a private GitHub repository clean, well-commented, and documented
        </p>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Complete documentation README, architecture explanation, and setup guide
        </p>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          You can modify, deploy, publish, or submit the code in any way you choose. We retain no rights over the deliverable.{" "}
          <Link
            href="https://www.figma.com/community/file/1420131743903900629/launch-ui-landing-page-components-ui-kit"
            className="text-foreground underline"
          >
            Check it out
          </Link>
          .
        </p>
        </>
      ),
    },
    {
      question: "How do I get started with Aliazad Networks?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
          Getting started is simple. Just contact us via our website, email, or phone to schedule a free initial consultation.
        </p>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          We'll arrange a convenient time to discuss your business, current IT challenges, and future goals. 
        </p>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          From there, we'll conduct a discovery assessment (if needed), provide a clear proposal and timeline, and work with you to implement the right solution. 
        </p>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          We're here to make the process smooth, transparent, and hassle-free from day one.
        </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Contact us for a free consultation. We'll discuss your needs, provide a clear proposal, and guide you every step of the way, please fill this form{" "}
            <a
              href={siteConfig.page.contact}
              className="underline underline-offset-2"
            >
              Request service
            </a>
            .
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="relative overflow-hidden py-16 md:py-24 max-w-container mx-auto flex flex-col items-center gap-8 px-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
