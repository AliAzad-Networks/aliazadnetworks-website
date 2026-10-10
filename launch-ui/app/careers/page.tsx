import Navbar from "@/components/sections/shared/navbar/default";
import TopBar from "@/components/sections/shared/topbar/default";

import Footer from "@/components/sections/shared/footer/default";
import Cta from "@/components/sections/shared/cta/default";

import { CareersHero } from "./components/CareersHero";
import { CareerAreas } from "./components/CareerAreas";
import { CultureSection } from "./components/CultureSection";
import { HiringProcess } from "./components/HiringProcess";
import { CareersCTA } from "./components/CareersCTA";

export const metadata = {
  title: "Careers | AliAzad Networks",
  description:
    "Join AliAzad Networks. We build AI-powered software for startups, enterprises, and research institutions. Explore open roles across engineering, AI, design, and more.",
  alternates: { canonical: "https://aliazadnetworks.com/careers" },
};

export default function CareersPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <TopBar />
      <Navbar />
      <CareersHero />
      <CareerAreas />
      <CultureSection />
      <HiringProcess />
      <CareersCTA />
      <Cta />
      <Footer />
    </main>
  );
}