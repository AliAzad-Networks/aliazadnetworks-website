import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default";
import { Section } from "@/components/ui/section";
import { CultureSection } from "../components/CultureSection";

export const metadata = {
  title: "Life at AliAzad | AliAzad Networks Careers",
  description:
    "Inside the culture, values, and working environment at AliAzad Networks.",
  alternates: { canonical: "https://aliazadnetworks.com/careers/life-at-aliazad" },
};

export default function LifeAtAliAzadPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />

      <Section className="py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Life at AliAzad
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're engineers, designers, researchers, and operators building
            something we're proud of. Here's how we work.
          </p>
        </div>
      </Section>

      <CultureSection />

      <Footer />
    </main>
  );
}