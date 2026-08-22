import CTA from "../components/sections/shared/cta/default";
import FAQ from "../components/sections/shared/faq/default";
import Footer from "../components/sections/shared/footer/default";
import Hero from "../components/sections/shared/hero/default";
import Items from "../components/sections/shared/items/default";
import Logos from "../components/sections/shared/logos/default";
import Process from "../components/sections/process/process/default";
import Navbar from "../components/sections/shared/navbar/default";
import Price from "../components/sections/pricing/price/default";
import Stats from "../components/sections/shared/stats/default";
import FeedbackButton from "../components/sections/shared/feedback-button/default"
import Services from "../components/sections/shared/services/default";
import Feature from "../components/sections/shared/feature-cards-with-text/default";
import WhoWeAre from "../components/sections/shared/who-we-are/default";
import AiWorks from "../components/sections/shared/ai-works/default";
import BentoGridSection from "../components/sections/shared/bento-grid/default";
import Testimonials from "../components/sections/shared/testimonial/default";
import Team from "../components/sections/team/team/default";
import Career from "../components/sections/shared/career/default";
import ForStartup from "../components/sections/shared/for-startup/default";
import Events from "../components/sections/shared/events/default"; 

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Hero />
      <Logos />
      <Services />
      <Feature />
      <WhoWeAre />
      {/* <Process /> */}
      <Items />
      <AiWorks />
      <ForStartup />
      <FeedbackButton />
      <Stats />
      <Testimonials />
      <Career />

      {/* <Team /> */}
      {/* <Price /> */}
      {/* <FAQ /> */}
      {/* <Events /> */}
      <BentoGridSection />
      <CTA />
      <Footer />
    </main>
  );
}
