// app/events/page.tsx
"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { Calendar, Clock, MapPin, User } from "lucide-react";

// ---------- Event Card Component ----------
interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  speaker: string;
  category: "Workshop" | "Webinar" | "Conference" | "Tech Talk" | "Startup Session";
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

const categoryStyles: Record<EventCardProps["category"], string> = {
  Workshop: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Webinar: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Conference: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "Tech Talk": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Startup Session": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
};

function EventCard({
  title,
  description,
  date,
  time,
  location,
  speaker,
  category,
  imageUrl,
  buttonText,
  buttonLink,
}: EventCardProps) {
  return (
    <div className="group flex flex-col md:flex-row bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative md:w-2/5 lg:w-1/3 h-56 md:h-auto overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 md:hidden">
          <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full shadow-sm", categoryStyles[category])}>
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-5 md:p-6 space-y-3">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">{title}</h3>
          <span className={cn("hidden md:inline-block text-xs font-medium px-2.5 py-1 rounded-full", categoryStyles[category])}>
            {category}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 shrink-0" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 shrink-0" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4 shrink-0" />
            <span className="truncate">{speaker}</span>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href={buttonLink}
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}

// ---------- Events Page ----------
export default function EventsPage() {
  const events: EventCardProps[] = [
    {
      title: "AI-Powered Business Growth 2026",
      description: "Learn how AI can transform your business operations, from automation to customer insights.",
      date: "June 15, 2026",
      time: "7:00 PM IST",
      location: "Online",
      speaker: "Dr. Sarah Khan, AI Lead at AliAzad",
      category: "Webinar",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format",
      buttonText: "Register Now",
      buttonLink: "/events/register/ai-business-growth-2026",
    },
  ];

  return (
    <Section className="py-16 md:py-24 bg-background">
      <div className="max-w-container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Upcoming Events</h1>
        </div>
        <div className="space-y-8">
          {events.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
      </div>
    </Section>
  );
}