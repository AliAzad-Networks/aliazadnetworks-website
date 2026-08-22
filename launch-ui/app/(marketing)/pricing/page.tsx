import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import Price from "@/components/sections/pricing/price/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Pricing | AliAzad Networks",
  description: "Explore our pricing plans and find the best solution for your business needs. AliAzad Networks offers competitive pricing for top-notch services.",
};

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Price />
      <Cta />
      <Footer />
    </main>
  );
}