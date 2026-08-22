import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import About from "@/components/sections/about/default";
import AboutService from "@/components/sections/about/about-service/default";
import AboutWhatWeDo from "@/components/sections/about/about-what-we-do/default";
import Stats from "@/components/sections/shared/stats/default";
import AboutTestimonial from "@/components/sections/about/about-testimonial/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "About AliAzad | AliAzad Networks",
  description: "Learn more about AliAzad Networks and how we deliver top-notch services to meet your business needs.",
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <About />
      <AboutService />
      <AboutWhatWeDo />
      <Stats />
      <AboutTestimonial />
      <Cta />
      <Footer />
    </main>
  );
}