import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import DigitalTransformation from "@/components/sections/digital-transformation/digital-transformation/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Scalable Digital Transformation | AliAzad Networks",
  description: "Transform your business with our scalable digital solutions. From AI-driven automation to custom software development, we help you innovate and grow in the digital age.",
};

export default function DigitalTransformationPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <DigitalTransformation />
      <Cta />
      <Footer />
    </main>
  );
}