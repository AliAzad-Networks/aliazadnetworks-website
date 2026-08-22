import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import AiProcessAutomation from "@/components/sections/ai-process-automation/ai-process-automation-hero/default";
import AiProcessAutomationLogos from "@/components/sections/ai-process-automation/ai-process-automation-logos/default";
import AiProcessAutomationChallanges from "@/components/sections/ai-process-automation/ai-process-automation-challenges/default";
import AiProcessAutomationBuild from "@/components/sections/ai-process-automation/ai-process-automation-build/default";
import AiProcessAutomationAdvantage from "@/components/sections/ai-process-automation/ai-process-automation-advantage/default";
import AiProcessAutomationStep from "@/components/sections/ai-process-automation/ai-process-automation-step/default";
import AiProcessAutomationReceive from "@/components/sections/ai-process-automation/ai-process-automation-receive/default";
import AiProcessAutomationPrice from "@/components/sections/ai-process-automation/ai-process-automation-price/default";
import Team from "@/components/sections/team/team/default";
import AiProcessAutomationFaq from "@/components/sections/ai-process-automation/ai-process-automation-faq/default";
import AiProcessAutomationTestimonials from "@/components/sections/ai-process-automation/ai-process-automation-testimonials/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "AI-Drivien Process Automation | AliAzad Networks",
  description: "Discover our AI-Drivien Process Automation and learn how AliAzad Networks delivers top-notch services to meet your business needs.",
};

export default function AiProcessAutomationChallengesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <AiProcessAutomation />
      <AiProcessAutomationLogos />
      <AiProcessAutomationChallanges />
      <AiProcessAutomationBuild />
      <AiProcessAutomationAdvantage />
      <AiProcessAutomationStep />
      <AiProcessAutomationReceive />
      <AiProcessAutomationTestimonials />
      <AiProcessAutomationPrice />
      <Team />
      <AiProcessAutomationFaq />
      <Cta />
      <Footer />
    </main>
  );
}