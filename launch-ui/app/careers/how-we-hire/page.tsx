import Navbar from "@/components/sections/shared/navbar/default";
import Topbar from "@/components/sections/shared/topbar/default";
import Footer from "@/components/sections/shared/footer/default";
import { Section } from "@/components/ui/section";
import { HiringProcess } from "../components/HiringProcess";

export const metadata = {
  title: "How We Hire | AliAzad Networks Careers",
  description:
    "Our hiring process is clear, human, and respectful of your time. Learn what to expect at each step.",
  alternates: { canonical: "https://aliazadnetworks.com/careers/how-we-hire" },
};

export default function HowWeHirePage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Topbar />
      <Navbar />

      <Section className="py-16 md:py-24">
        <div className="max-w-container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            How we hire
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Five steps, honest feedback at every stage, and no trick questions.
            We treat candidates the way we'd want to be treated.
          </p>
        </div>
      </Section>

      <HiringProcess />

      <Footer />
    </main>
  );
}