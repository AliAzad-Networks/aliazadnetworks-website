import Navbar from "@/components/sections/shared/navbar/default";
import Footer from "@/components/sections/shared/footer/default"; 
import Team from "@/components/sections/team/team/default";
import TeamTop from "@/components/sections/team/team-top/default";
import Cta from "@/components/sections/shared/cta/default";

export const metadata = {
  title: "Our Team | AliAzad Networks",
  description: "Meet our dedicated team and learn how AliAzad Networks delivers top-notch services to meet your business needs.",
};

export default function TeamPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar />
      <Team />
      <TeamTop />
      <Cta />
      <Footer />
    </main>
  );
}