import Navbar from "@/components/sections/shared/navbar/default";
import Topbar from "@/components/sections/shared/topbar/default";

import Footer from "@/components/sections/shared/footer/default";
import { CareersHero } from "./components/CareersHero";
import { CareerAreas } from "./components/CareerAreas";

export const metadata = {
  title: "Careers | AliAzad Networks",
  description:
    "Join AliAzad Networks. We build AI-powered software for startups, enterprises, and research institutions. Explore open roles across engineering, AI, design, and more.",
  alternates: { canonical: "https://aliazadnetworks.com/careers" },
};

export default function CareersPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Topbar />
      <Navbar />
      <CareersHero />
      <CareerAreas />
      <Footer />
    </main>
  );
}