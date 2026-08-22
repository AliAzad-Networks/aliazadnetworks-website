import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import ContactHero from "@/components/sections/contact/contact-form/default";
import FAQ from "@/components/sections/shared/faq/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Contact Us | AliAzad Networks",
  description: "Get in touch with AliAzad Networks. Let our design team craft a website that elevates your brand. Book a free session today.",
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <ContactHero />
      <FAQ />
      <Cta />
      <Footer />
    </main>
  );
}