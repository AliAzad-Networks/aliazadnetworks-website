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
import { cn } from "@/lib/utils";

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
        "Do I own the code completely after delivery?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Yes — 100% ownership transfers to you upon final payment. 
            You receive full source code via a private GitHub repository, 
            complete documentation, and all credentials. You can modify, 
            deploy, sell, or publish it in any way. We retain zero rights 
            over your deliverable.
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
      question: "How does the payment structure work?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            We follow a milestone-based model: 15% advance after consultation 
            and scope agreement, and 75% in middle of the project and 15% only after you review and approve 
            the final delivery. If we fail to deliver as agreed, you get a 100% refund — 
            no conditions. We accept UPI, bank transfer, PayPal, and Wise for international clients.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            To check our payment structure, Click Here{" "}
            <Link href="/pricing" className="text-foreground underline">
              Project payment structure
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question:
        "Is my business idea kept confidential?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely. We sign a Non-Disclosure Agreement (NDA) 
            before any project discussion begins — free of charge, on request. 
            Your idea, architecture, business logic, and all project details are never 
            shared with any third party. We are DPIIT registered and legally bound by the NDA.
          </p>
        </>
      ),
    },
    {
      question: 'What if I want to add features mid-project?',
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Small scope changes within the agreed plan are handled without extra 
            charge. For significant additions, we discuss openly and provide a 
            transparent quote before starting. We never surprise you with hidden fees. 
            All additions are documented and agreed in writing first.
          </p>
        </>
      ),
    },
    {
      question: "Can you maintain and update the product after delivery?",
      answer: (
        <>
        <p className="text-muted-foreground mb-4 max-w-[580px]">
          Yes. After the free support period, we offer affordable monthly 
          maintenance retainers for bug fixes, security updates, and new 
          feature additions. Many of our startup clients stay with us long-term 
          as their product grows. Ask about our retainer plans during consultation.
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
      question: "I have no technical background. Can I still work with you?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
          This is exactly who we work best with. You bring the business vision — 
          we handle 100% of the technical execution. We explain everything in plain language, 
          keep you updated via WhatsApp, and never use jargon without explaining it. 
          Many of our best client relationships are with non-technical founders.
        </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Contact us for a free consultation. We'll discuss your needs, provide a clear proposal, and guide you every step of the way, please fill this form{" "}
            <a
              href={siteConfig.page.contact}
              className="text-black underline underline-offset-2"
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
    <Section className={cn("py-16 md:py-24 px-8", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
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
