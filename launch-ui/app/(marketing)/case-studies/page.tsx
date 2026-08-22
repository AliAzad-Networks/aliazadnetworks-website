import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import CaseStudiesHero from "@/components/sections/case-studies/case-studies-hero/default";
import AboutService from "@/components/sections/about/about-service/default";
import CaseStudiesFeature from "@/components/sections/case-studies/case-studies-feature/default";
import CaseStudiesResult from "@/components/sections/case-studies/case-studies-result/default";
import CaseStudiesList from "@/components/sections/case-studies/case-studies-list/default";
import CaseStudiesSteps from "@/components/sections/case-studies/case-studies-steps/default";
import CaseStudiesImpact from "@/components/sections/case-studies/case-studies-impact/default";
import CaseStudiesIndustries from "@/components/sections/case-studies/case-studies-industries/default";
import CaseStudiesOutcome from "@/components/sections/case-studies/case-studies-outcome/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Case Studies | AliAzad Networks",
  description: "Explore our detailed case studies and see how AliAzad Networks has helped startups and entrepreneurs leverage AI automation systems for measurable success.",
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <CaseStudiesHero />
      <AboutService />
      <CaseStudiesFeature />
      <CaseStudiesResult />
      <CaseStudiesList />
      <CaseStudiesSteps />
      <CaseStudiesImpact />
      <CaseStudiesIndustries />
      <CaseStudiesOutcome />
      <Cta />
      <Footer />
    </main>
  );
}