import {
  FileText,
  CodeXml,
  MessageCircle,
  UserRoundCog,
  BadgePercent,
  Shield,
  ShieldCheck,
  KanbanSquare,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "@/components/ui/item";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Your Board's Information Security is important to Us",
  items = [
    {
      title: "First service, then full payment",
      description: "50% advance only. Final payment after you're satisfied. No Surprise Bills. Ever",
      icon: <ShieldCheck className="size-5 stroke-1" />,
    },
    {
      title: "100% money-back guarantee ",
      description: "If we fail to deliver as agreed, you get a full refund. No conditions. In writing.",
      icon: <BadgePercent className="size-5 stroke-1" />,
    },
    {
      title: "You own all the code",
      description:
        "Full source code on GitHub. No watermarks, no locks, no \"rent the code\" model. Yours forever.",
      icon: <CodeXml className="size-5 stroke-1" />,
    },
    {
      title: "Bank-Level Security & ISO Compliance",
      description: "Your data is protected with enterprise-grade encryption, ISO 27001 standards, and strict NDAs.",
      icon: <FileText className="size-5 stroke-1" />,
    },
    {
      title: "24/7 WhatsApp support",
      description: "Communicate directly with our team anytime through WhatsApp for quick responses and updates.",
      icon: <MessageCircle className="size-5 stroke-1" />,
    },
    {
      title: "DPIIT certified company",
      description: "Officially recognised startup. You get proper invoice, agreement, and legal protection.",
      icon: <Shield className="size-5 stroke-1" />,
    },
    {
      title: "Dedicated Project Manager",
      description:
        "A dedicated project manager ensures smooth communication and timely delivery of your project.",
      icon: <UserRoundCog className="size-5 stroke-1" />,
    },
    {
      title: "30-Day Free Maintenance",
      description:
        "Free bug fixes, security updates, and priority support for 2 months after delivery.",
      icon: <KanbanSquare className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={cn("bg-[#f9f9f9] py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center py-2 gap-6 sm:gap-20">
        <h2 className="max-w-3xl text-center text-2xl leading-tight sm:text-4xl sm:leading-tight text-foreground">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
