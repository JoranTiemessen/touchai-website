import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AgentCatalog from "@/components/AgentCatalog";
import AgentInAction from "@/components/AgentInAction";
import Integrations from "@/components/Integrations";
import TijdlekCheck from "@/components/TijdlekCheck";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Advisors from "@/components/Advisors";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustSection />
      <Reveal><AgentCatalog /></Reveal>
      <Reveal><AgentInAction /></Reveal>
      <Reveal><Integrations /></Reveal>
      <Reveal><TijdlekCheck /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Results /></Reveal>
      <Reveal><Comparison /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><Advisors /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Footer />
      <StickyCta />
    </main>
  );
}
