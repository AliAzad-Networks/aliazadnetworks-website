import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import Process from "@/components/sections/process/process/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Our Process | AliAzad Networks",
  description: "Learn about our process and how AliAzad Networks delivers top-notch services to meet your business needs.",
};

export default function ProcessPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Process />
      <Cta />
      <Footer />
    </main>
  );
}