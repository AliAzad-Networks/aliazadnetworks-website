"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, MoreVertical } from "lucide-react";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface ProjectType {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
  link?: string;
}

export default function Portfolio() {
  
  const projects: ProjectType[] = [
    // Scalable Digital Transformation (3)
    {
      id: "1",
      title: "AI-Powered Healthcare Diagnosis System",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
      description: "Developed an AI system that analyzes medical images to detect early signs of diseases with 94% accuracy.",
    },
    {
      id: "2",
      title: "Smart IoT Based Agriculture Monitoring",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop",
      description: "IoT system that monitors soil moisture, temperature, and humidity to optimize crop irrigation automatically.",
    },
    {
      id: "3",
      title: "Secure Blockchain-Based E-Voting System",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
      description: "Secure and transparent voting platform using blockchain technology to prevent fraud and ensure anonymity.",
    },
    
    // Startup Tech Projects (2)
    {
      id: "4",
      title: "EdTech Platform for Competitive Exams",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
      description: "Complete learning platform with live classes, mock tests, and performance analytics for competitive exam preparation.",
    },
    {
      id: "5",
      title: "AI-Powered Hiring Recruitment SaaS",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop",
      description: "AI platform that screens resumes, conducts initial interviews, and ranks candidates based on job requirements.",
    },
    
    // Research Paper (1)
    {
      id: "6",
      title: "Deep Learning for Early Cancer Detection",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop",
      description: "Novel deep learning architecture that detects cancerous cells from biopsy images with 97% accuracy.",
    },
    {
      id: "1",
      title: "AI Customer Support Bot That Handles 85% of Queries Without a Human",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://botphonic.ai/wp-content/uploads/2025/06/Customer-Support-Botphonic.webp",
      description: "A D2C clothing startup was drowning in 400+ customer support messages per day — shipping queries, size guides, return requests. A single support agent was overwhelmed and response times hit 48 hours, killing conversions. We built an AI support system trained on their exact product catalogue, shipping policies, and FAQ database.",
    },
    {
      id: "2",
      title: "Sales Forecasting AI — 91% Revenue Prediction Accuracy",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://www.oracle.com/a/ocom/img/rc24-a-day-in-the-life-smarter-demand-planning-with-ai-and-ml.jpg",
      description: "B2B SaaS startup missing pipeline targets every quarter. Built an XGBoost model ingesting CRM data, deal history, and market signals to predict deal close probability and timing with 91% historical accuracy.",
    },
    {
      id: "3",
      title: "Legal Contract AI — Review in 90 Seconds, Not 3 Hours",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://imgproxy.divecdn.com/0zMmA5e92XS8JDbLepXA2e3F7UFUeWVCyajQq_qFqLI/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9HZXR0eUltYWdlcy0xNjUyMDA2MDE4LmpwZw==.webp",
      description: "Legal-tech startup reviewing hundreds of vendor contracts weekly. Built a RAG pipeline using Claude API that extracts, flags, and summarises payment terms, risk clauses, and liability caps in under 90 seconds per document.",
    },
    
    // Startup Tech Projects (2)
    {
      id: "4",
      title: "AI Lead Scoring Engine — Tripled Conversion Rate for Lending Startup",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://cdn.prod.website-files.com/660f38f06a23cf2d2fb65170/6906bf2cdff94499032f2655_6906a2919cea6427b3143c2f-1762048512667.jpeg",
      description: "FinTech lending startup calling every lead with equal priority. Built an ML scoring model analysing 40+ behavioural signals to rank leads by conversion probability, delivered as a real-time API into their CRM.",
    },
    {
      id: "5",
      title: "WhatsApp AI Assistant — Books, Qualifies & Follows Up Automatically",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://s.yimg.com/ny/api/res/1.2/rsTp81K1MU9Objj.BYgzTg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTQ-/https://s.yimg.com/os/creatr-uploaded-images/2025-08/1b61dea0-8370-11f0-97fe-de0d6d3f8f74",
      description: "Consulting founder spending 4+ daily hours on WhatsApp queries. Built a GPT-4o powered AI assistant that qualifies leads, books Calendly calls, sends proposals, and follows up — without the founder typing a word.",
    },
    
    // Research Paper (1)
    {
      id: "6",
      title: "Inventory Vision AI — Real-Time Stock Counting, Zero Manual Work",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://imagevision.ai/wp-content/uploads/2025/10/Automated-Package-Counting-Using-Vision-AI-for-High-Volume-Facilities_Website.jpg",
      description: "Retail startup counting stock manually twice daily across 3 warehouses — 6 people, 4 hrs each. YOLO v8 + OpenCV ceiling-camera system now tracks inventory in real time with 96% accuracy, eliminating all manual counting.",
    },
    {
      id: "1",
      title: "Invoice Intelligence — Automated Data Extraction from 500+ PDFs Daily",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJIu6fbsPhhgNdjGiV0wovsJ1nApW68WPXA&s",
      description: "Accounts team manually entering data from 500+ supplier invoices every day — 8 hours of data entry per day, 12% error rate. Built a document AI pipeline that extracts, validates, and pushes structured data to their ERP in seconds.",
    },
    {
      id: "2",
      title: "AI Onboarding System — Personalised User Journey, Zero Manual Emails",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://epaouydin3q.exactdn.com/wp-content/uploads/2025/07/AI-Sales-Onboarding.jpeg?strip=all&lossy=1&ssl=1&fit=866,494",
      description: "SaaS startup sending the same generic onboarding email to every new user. Built an LLM-powered onboarding system that analyses each user's signup data and behaviour to send personalised, contextual emails and in-app messages at the perfect moment.",
    },
    {
      id: "3",
      title: "Review Intelligence AI — Auto-Respond, Detect Angry Customers, Prevent Churn",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://estyn.gov.wales/app/uploads/2025/01/iStock-2163352306.jpg",
      description: "D2C brand with 200+ daily reviews across Amazon, Google, and their own site. NLP model classifies sentiment, auto-responds to positives, and flags + escalates negatives to human support within 2 minutes before the customer churns.",
    },
    
    // Startup Tech Projects (2)
    {
      id: "4",
      title: "AI Demand Forecasting — Predicts Next 30-Day Inventory Needs",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://www.toolsgroup.com/wp-content/uploads/2025/03/AI-Powered-Demand-Forecasting-Transforms-New-Product-Introductions-COVER.jpg",
      description: "E-commerce startup regularly over/under-ordering stock, costing ₹2L+ monthly in waste and lost sales. Built a time-series ML model that forecasts demand per SKU for the next 30 days, accounting for seasonality, promotions, and trends.",
    },
    {
      id: "5",
      title: "Dynamic Pricing AI — Real-Time Price Optimisation for Maximum Revenue",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://linksture.b-cdn.net/wp-content/uploads/2025/09/real-world-examples-of-ai-dynamic-pricing.jpg",
      description: "D2C startup pricing products statically, leaving significant revenue on the table. Built an ML pricing engine that analyses demand elasticity, competitor pricing, inventory levels, and time-of-day to recommend optimal price per SKU in real time.",
    },
    
    // Research Paper (1)
    {
      id: "6",
      title: "AI Business Intelligence — Automated Weekly Reports Written by AI",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://conversight.ai/wp-content/uploads/2023/11/Updated-Resource-Covers-31-1024x536.png",
      description: "Startup founder spending 6+ hours every Monday morning pulling data and writing weekly business reports for investors and team. Built an AI pipeline that pulls live data from 8 sources, analyses trends, and writes a fully formatted investor-ready report — delivered automatically every Monday at 8AM.",
    },
    {
      id: "1",
      title: "AI-Powered Healthcare Diagnosis System",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://www.miquido.com/wp-content/uploads/2024/10/header-Exploring-the%E2%80%A8different-types-of-healthcare-software-1920x1280.jpg",
      description: "Developed an AI system that analyzes medical images to detect early signs of diseases with 94% accuracy.",
    },
    {
      id: "2",
      title: "Smart IoT Based Agriculture Monitoring",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://ubidots.com/blog/content/images/2021/12/iot-in-agriculture.jpg",
      description: "IoT system that monitors soil moisture, temperature, and humidity to optimize crop irrigation automatically.",
    },
    {
      id: "3",
      title: "Secure Blockchain-Based E-Voting System",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://scwcontent.affino.com/AcuCustom/Sitename/DAM/019/Digital_voting_AdobeStock_112206242_1.jpg",
      description: "Secure and transparent voting platform using blockchain technology to prevent fraud and ensure anonymity.",
    },
    
    // Startup Tech Projects (2)
    {
      id: "4",
      title: "EdTech Platform for Competitive Exams",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://www.digitalclassworld.com/blog/wp-content/uploads/2021/04/teach-online-classes-from-home.jpg",
      description: "Complete learning platform with live classes, mock tests, and performance analytics for competitive exam preparation.",
    },
    {
      id: "5",
      title: "AI-Powered Hiring Recruitment SaaS",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://webcdn.ringover.com/img/big/recruiting%20software-7fcb6.png",
      description: "AI platform that screens resumes, conducts initial interviews, and ranks candidates based on job requirements.",
    },
    
    // Research Paper (1)
    {
      id: "6",
      title: "Deep Learning for Early Cancer Detection",
      category: "AI-Drivien Process Automation",
      imageSrc: "https://junctionroadfp.com/wp-content/uploads/2023/10/shutterstock_764506135.jpg",
      description: "Novel deep learning architecture that detects cancerous cells from biopsy images with 97% accuracy.",
    },
  ];

  return (
    <Section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="max-w-container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-3">AI Agents That Automate and Accelerate Growth.</h2>
            <p className="text-black">
              Every project we deliver has the same 6-layer architecture. This is what makes our systems production-grade, not just demos.
            </p>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {projects.map((project) => (
            <div key={project.id} className="w-full bg-white dark:bg-slate-800 rounded-sm shadow-lg p-4 group overflow-hidden ">
         
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
                    loading="lazy"
                />
            </div>

                {/* Category - Now above title */}
                <span className={cn(
                "inline-block text-xs text-blue-900 font-medium px-3 rounded-full mt-4",
                )}>
                {project.category}
                </span>

                {/* Project Title */}
                <h2 className="font-normal dark:text-[#abc2d3] text-xl py-2 px-3">
                {project.title}
                </h2>

              {/* Project Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 px-3">
                {project.description}
              </p>

              {/* Footer with Client and Link */}
              <div className="w-full flex items-center justify-between mt-4 px-3">
                <Link 
                  href={`/portfolio/${project.id}`}
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                >
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </Link>                
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}