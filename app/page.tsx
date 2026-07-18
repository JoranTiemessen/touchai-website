import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import AgentCatalog from "@/components/AgentCatalog";
import RoiMeter from "@/components/RoiMeter";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Advisors from "@/components/Advisors";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustSection />
      <Reveal><Services /></Reveal>
      <Reveal><AgentCatalog /></Reveal>
      <Reveal><RoiMeter /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Results /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Advisors /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Footer />
    </main>
  );
}
