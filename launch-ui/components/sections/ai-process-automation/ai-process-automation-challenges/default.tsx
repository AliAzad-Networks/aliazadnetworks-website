"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { ChevronDown } from "lucide-react";
import { Cpu, Heart, TrendingUp, ShoppingBag, Building, GraduationCap } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  image: string;
  imageAlt: string;
  icon: React.ElementType;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "Technology & SaaS",
      icon: Cpu,
      answer: "We build AI‑powered automation, intelligent analytics, and scalable SaaS platforms. Our solutions include custom LLM integrations (GPT‑4o, Claude, Gemini), predictive maintenance models, user behavior analytics, and AI‑driven DevOps pipelines. We help you ship faster, reduce manual ops, and deliver smarter features to your users.",
      image: "https://codal.com/wp-content/uploads/2025/10/fc7d8f0b7acfc202ea5458601edf4aaad675291b-2356x1585-1.webp",
      imageAlt: "Referral program illustration",
    },
    {
      question: "Healthcare & Life Sciences",
      icon: Heart,
      answer: "We develop HIPAA‑ready AI for medical imaging analysis, patient risk prediction, drug discovery acceleration, and clinical trial optimization. Our solutions include computer‑vision diagnostics, electronic health record (EHR) mining, and real‑time patient monitoring systems that improve outcomes while reducing administrative burden.",
      image: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-backgrounds/hlssm-feature.sm.png",
      imageAlt: "Custom software development",
    },
    {
      question: "Finance & Fintech",
      icon: TrendingUp,
      answer: "We deliver AI for fraud detection, credit scoring, algorithmic trading signals, and automated regulatory reporting. Our machine learning models process transaction streams, identify anomalies, and predict cash flow needs. We also build secure, explainable AI systems that comply with financial regulations.",
      image: "https://codal.com/wp-content/uploads/2025/10/8bbaca35d87f34ea1798866763475a68bfe32dbb-2235x1620-1.webp",
      imageAlt: "Post-delivery support",
    },
    {
      question: "Retail & E-commerce",
      icon: ShoppingBag,
      answer: "We implement AI for personalised product recommendations, dynamic pricing, inventory demand forecasting, and visual search. Our solutions include customer sentiment analysis, automated returns processing, and supply chain optimisation – helping you increase conversion rates and reduce operational costs.",
      image: "https://syndigo.com/wp-content/uploads/2020/10/Retail-E-commerce-Strategy-1.png",
      imageAlt: "Academic project assistance",
    },
    {
      question: "Real Estate & Construction",
      icon: Building,
      answer: "We build AI for property valuation, predictive maintenance of buildings, construction site safety monitoring, and intelligent document extraction from blueprints and contracts. Our computer vision models detect progress and hazards on construction sites, while our NLP engines automate lease and purchase agreement reviews.",
      image: "https://www.jobtread.com/images/who-we-serve/real-estate-investors/fig-real-estate-investors-hero-img.webp",
      imageAlt: "Academic project assistance",
    },
    {
      question: "Education & EdTech",
      icon: GraduationCap,
      answer: "We create AI for adaptive learning paths, automatic quiz generation, student dropout prediction, and plagiarism detection. Our solutions include virtual teaching assistants, real‑time performance dashboards, and content recommendation engines that personalise the learning experience for every student.",
      image: "https://d2ms8rpfqc4h24.cloudfront.net/stock_photo_caucasian_boy_writing_in_book_while_learning_through_online_class_over_video_on_laptop_at_home_2173359509_1_ce5e5f6ff0.png",
      imageAlt: "Academic project assistance",
    },
  ];

  const currentImage = openIndex !== null ? faqs[openIndex].image : faqs[0].image;
  const currentImageAlt = openIndex !== null ? faqs[openIndex].imageAlt : faqs[0].imageAlt;

  return (
    <Section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Now centered at the top */}
        <div className="mb-12">
          <p className="text-primary text-sm font-medium">Industries we serve</p>
          <h2 className="text-2xl md:text-4xl font-md text-foreground leading-tight mt-1 max-w-xl">
            Our capabilities are designed to solve your problems
          </h2>
        </div>

        {/* Two-column layout: FAQ list (left) and Image (right) */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-12">
          {/* Left side: FAQ list */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="space-y-1">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const IconComponent = faq.icon;
                return (
                  <div
                    key={index}
                    className="border-b border-border py-4 cursor-pointer group"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={cn(
                        "text-base font-medium flex items-center gap-2",
                        isOpen ? "text-primary" : "text-foreground",
                        "group-hover:text-primary"
                      )}>
                        <IconComponent className="w-5 h-5" />
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                          isOpen && "rotate-180"
                        )}
                      />
                    </div>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isOpen ? "max-h-40 mt-3" : "max-h-0"
                      )}
                    >
                      <p className="text-sm text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side: Image that changes */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={currentImage}
                alt={currentImageAlt}
                className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}