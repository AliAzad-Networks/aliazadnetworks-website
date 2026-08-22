"use client";

import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

export default function FeatureCardsAI({ className }: { className?: string }) {
  const features = [
    {
      category: "E-Commerce / D2C",
      title: "AI Customer Support Bot That Handles 85% of Queries Without a Human",
      description: "A D2C clothing startup was drowning in 400+ customer support messages per day — shipping queries, size guides, return requests. A single support agent was overwhelmed and response times hit 48 hours, killing conversions. We built an AI support system trained on their exact product catalogue, shipping policies, and FAQ database.",
      button1: "RAG Chatbot",
      button2: "LangChain",
      button3: "GPT-4o",
      button4: "WhatsApp Business API",
      button5: "Pinecone",
      button6: "FastAPI",
    },
    {
      category: "SaaS / B2B Sales",
      title: "AI Sales Forecasting System That Predicted Revenue with 91% Accuracy",
      description: "A B2B SaaS startup's sales team was making pipeline decisions on gut feeling, leading to missed targets every quarter. We built an ML-powered forecasting model that ingests CRM data, deal history, and market signals to predict which deals will close, when, and at what value — with 91% historical accuracy.",
      button1: "Predictive ML",
      button2: "Python",
      button3: "Scikit-learn",
      button4: "CRM Integration",
      button5: "Tableau Dashboard",
      button6: "AWS Deployment",
    },
    {
      category: "Legal Tech / Startup",
      title: "Legal Document AI — Contract Review in 90 Seconds Instead of 3 Hours",
      description: "A legal-tech startup needed to review hundreds of vendor contracts weekly for risk clauses, payment terms, and liability caps. Their lawyers were spending 3+ hours per document. We built a RAG-powered document intelligence system that extracts, flags, and summarises key clauses in under 90 seconds per contract.",
      button1: "Document AI",
      button2: "RAG Pipeline",
      button3: "LlamaIndex",
      button4: "Claude API",
      button5: "PDF Extraction",
      button6: "Flask API",
    },
    {
      category: "Retail / Supply Chain",
      title: "Computer Vision Inventory System That Eliminated Manual Stock Counting",
      description: "A retail startup with 3 warehouse locations was doing manual inventory counts twice daily — 6 people, 4 hours each time. Errors caused stockouts and overordering costing ₹4L+ monthly. We built a computer vision system using ceiling-mounted cameras and a YOLO-based model that counts, identifies, and tracks inventory in real-time.",
      button1: "Computer Vision",
      button2: "YOLO v8",
      button3: "OpenCV",
      button4: "Real-time Processing",
      button5: "Dashboard",
      button6: "AWS",
    },
    {
      category: "FinTech / Lending",
      title: "AI Lead Scoring Engine That Tripled Conversion Rate for a Lending Startup",
      description: "A fintech lending startup was calling every lead with equal priority — wasting their sales team's time on unqualified prospects. We built an ML scoring model that analyses 40+ behavioural and demographic signals to rank every incoming lead by conversion probability, so sales calls the right people first.",
      button1: "ML Lead Scoring",
      button2: "XGBoost",
      button3: "Feature Engineering",
      button4: "CRM Integration",
      button5: "Real-time API",
      button6: "Heroku Deployment",
    },
    {
      category: "Professional Services",
      title: "WhatsApp AI Business Assistant That Books, Answers, and Follows Up Automatically",
      description: "A consulting startup's founder was spending 4+ hours daily answering WhatsApp queries, booking calls, sending proposals, and following up with leads. We built an intelligent WhatsApp business assistant using GPT-4o and the WhatsApp Business API that handles the entire pre-sales conversation — qualification to booking — without the founder typing a word.",
      button1: "WhatsApp AI",
      button2: "GPT-4o",
      button3: "LangChain Agents",
      button4: "Calendly Integration",
      button5: "CRM Sync",
      button6: "AWS Lambda",
    },
  ];

  return (
    <Section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-container mx-auto px-4">
        {/* Header */}


        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-card to-card/80 border border-border rounded-lg p-6 space-y-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <p className="text-[10px] font-medium text-primary uppercase tracking-wider mt-2">{feature.category}</p>

              <p className="font-medium text-lg text-foreground">{feature.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button1}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button2}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button3}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button4}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button5}</button>
                <button className="inline-block text-[10px] text-foreground bg-card rounded-md px-2 py-1 border border-border">{feature.button6}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}