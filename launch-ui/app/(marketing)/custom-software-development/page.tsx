import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import CustomSoftwareDevelopment from "@/components/sections/custom-software-development/custom-software-development/default";
import WhatWeDo from "@/components/sections/custom-software-development/what-we-do/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Custom Software Development | AliAzad Networks",
  description: "Discover our Custom Software Development and learn how AliAzad Networks supports your research needs.",
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <CustomSoftwareDevelopment />
      <WhatWeDo />
      <Cta />
      <Footer />
    </main>
  );
}