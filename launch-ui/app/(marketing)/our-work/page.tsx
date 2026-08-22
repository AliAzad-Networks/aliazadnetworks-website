import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import OurWorkHero from "@/components/sections/our-work/our-work-hero/default";
import AboutService from "@/components/sections/about/about-service/default";
import OurWorkProjects from "@/components/sections/our-work/our-work-projects/default";
import CaseStudiesSteps from "@/components/sections/case-studies/case-studies-steps/default";
import OurWorkTestimonial from "@/components/sections/our-work/our-work-testimonial/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Our Work | AliAzad Networks",
  description: "Explore our portfolio and see how AliAzad Networks has helped businesses achieve their goals through innovative solutions.",
};

export default function OurWorkPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <OurWorkHero />
      <AboutService />
      <OurWorkProjects />
      <CaseStudiesSteps />
      <OurWorkTestimonial />
      <Cta />
      <Footer />
    </main>
  );
}