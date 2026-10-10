import type { Job } from "@/lib/careers/types";
import { validateJobs } from "@/lib/careers/schema";

/* ------------------------------------------------------------------ */
/*  Job catalogue                                                      */
/*  Add new roles here. Validation runs at build time — the site       */
/*  will fail to build if a required field is missing.                 */
/* ------------------------------------------------------------------ */

export const jobs: Job[] = [
  {
    id: "swe-001",
    slug: "software-engineer",
    title: "Software Engineer",
    department: "Engineering",
    location: "Bengaluru, India",
    workplace: "hybrid",
    employmentType: "full-time",
    experienceLevel: "early-career",
    description:
      "Help build reliable software and AI-powered business systems for startups and enterprises.",
    responsibilities: [
      "Design and implement maintainable, well-tested software.",
      "Write unit and integration tests and participate in peer code reviews.",
      "Collaborate on technical decisions, architecture, and documentation.",
      "Work closely with product and design to ship high-quality features.",
    ],
    qualifications: [
      "Strong programming fundamentals in TypeScript, Python, or Go.",
      "Experience with a modern frontend framework (React, Next.js).",
      "Ability to debug complex issues and communicate technical trade-offs.",
      "Comfortable working in a fast-moving, collaborative environment.",
    ],
    preferredQualifications: [
      "Exposure to AI/LLM APIs and agentic workflows.",
      "Experience with cloud platforms (AWS, GCP, or Azure).",
    ],
    skills: ["TypeScript", "React", "Next.js", "Node.js"],
    postedAt: "2026-10-01",
    closingAt: null,
    status: "published",
    applicationMethod: "email",
    applicationEmail: "careers@aliazadnetworks.com",
    applicationInstructions:
      "Send your résumé and a short note about why this role interests you. Include links to any relevant work (GitHub, portfolio, etc.).",
    salaryRange: "₹6–10 LPA",
  },
  {
    id: "ai-001",
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer",
    department: "AI & Data",
    location: "Bengaluru, India",
    workplace: "hybrid",
    employmentType: "full-time",
    experienceLevel: "mid-level",
    description:
      "Design and deploy AI agents and intelligent systems that automate real business workflows.",
    responsibilities: [
      "Build production-grade LLM and ML pipelines.",
      "Design agentic workflows with tool calling, memory, and guardrails.",
      "Evaluate, monitor, and improve model performance in production.",
      "Collaborate with engineering and product to ship AI features.",
    ],
    qualifications: [
      "2+ years building ML/AI systems in production.",
      "Strong Python skills and experience with ML frameworks.",
      "Familiarity with LLMs, prompt engineering, and evaluation methods.",
      "Solid understanding of data pipelines and deployment.",
    ],
    preferredQualifications: [
      "Experience with LangChain, LlamaIndex, or similar agent frameworks.",
      "Publications or open-source contributions in AI.",
    ],
    skills: ["Python", "PyTorch", "LLMs", "Vector Databases"],
    postedAt: "2026-10-02",
    closingAt: null,
    status: "published",
    applicationMethod: "email",
    applicationEmail: "careers@aliazadnetworks.com",
    salaryRange: "₹12–20 LPA",
  },
  {
    id: "des-001",
    slug: "product-designer",
    title: "Product Designer",
    department: "Product & Design",
    location: "Remote (India)",
    workplace: "remote",
    employmentType: "full-time",
    experienceLevel: "mid-level",
    description:
      "Shape the experience of AI-powered products used by startups and enterprises worldwide.",
    responsibilities: [
      "Design end-to-end product experiences from concept to launch.",
      "Create wireframes, prototypes, and production-ready UI.",
      "Collaborate with engineering to ensure pixel-perfect implementation.",
      "Contribute to the design system and brand language.",
    ],
    qualifications: [
      "2+ years designing digital products (SaaS or B2B preferred).",
      "Strong portfolio showcasing UX thinking and visual craft.",
      "Proficiency with Figma and modern design tooling.",
      "Excellent written and verbal communication.",
    ],
    skills: ["Figma", "Design Systems", "Prototyping", "User Research"],
    postedAt: "2026-10-03",
    closingAt: null,
    status: "published",
    applicationMethod: "email",
    applicationEmail: "careers@aliazadnetworks.com",
    salaryRange: "₹8–14 LPA",
  },
  {
    id: "intern-001",
    slug: "software-engineering-intern",
    title: "Software Engineering Intern",
    department: "Engineering",
    location: "Bengaluru, India",
    workplace: "hybrid",
    employmentType: "internship",
    experienceLevel: "graduate",
    description:
      "A 6-month paid internship for final-year students and recent graduates who want real production experience.",
    responsibilities: [
      "Contribute to live client projects under mentor guidance.",
      "Write code, tests, and documentation.",
      "Participate in team standups, code reviews, and retrospectives.",
    ],
    qualifications: [
      "Currently pursuing or recently completed a degree in CS/IT.",
      "Basic familiarity with at least one programming language.",
      "Strong willingness to learn and ask questions.",
    ],
    skills: ["JavaScript", "Python", "Git"],
    postedAt: "2026-10-05",
    closingAt: null,
    status: "published",
    applicationMethod: "email",
    applicationEmail: "careers@aliazadnetworks.com",
    salaryRange: "₹25,000/month stipend",
  },
];

/* ------------------------------------------------------------------ */
/*  Fail loudly at build time if any job is malformed                  */
/* ------------------------------------------------------------------ */

validateJobs(jobs);