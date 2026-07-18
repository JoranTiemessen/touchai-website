import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import AgentCatalog from "@/components/AgentCatalog";
import AgentInAction from "@/components/AgentInAction";
import Integrations from "@/components/Integrations";
import RoiMeter from "@/components/RoiMeter";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CaseStudy from "@/components/CaseStudy";
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
      <StatsBar />
      <Reveal><Services /></Reveal>
      <Reveal><AgentCatalog /></Reveal>
      <Reveal><AgentInAction /></Reveal>
      <Reveal><Integrations /></Reveal>
      <Reveal><RoiMeter /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><CaseStudy /></Reveal>
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
