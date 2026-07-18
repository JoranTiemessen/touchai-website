import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Services from "@/components/Services";
import AgentTypes from "@/components/AgentTypes";
import AgentCatalog from "@/components/AgentCatalog";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import Advisors from "@/components/Advisors";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <AgentTypes />
      <AgentCatalog />
      <HowItWorks />
      <Results />
      <Pricing />
      <Advisors />
      <FinalCTA />
      <Footer />
    </main>
  );
}
