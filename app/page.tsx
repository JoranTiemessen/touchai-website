import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Groeipartner from "@/components/Groeipartner";
import AgentTeam from "@/components/AgentTeam";
import Keten from "@/components/Keten";
import Systemen from "@/components/Systemen";
import HowItWorks from "@/components/HowItWorks";
import Cases from "@/components/Cases";
import Results from "@/components/Results";
import Oprichters from "@/components/Oprichters";
import NietDoen from "@/components/NietDoen";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
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
      <Reveal><Groeipartner /></Reveal>
      <Reveal><AgentTeam /></Reveal>
      <Reveal><Keten /></Reveal>
      <Reveal><Systemen /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Cases /></Reveal>
      <Reveal><Results /></Reveal>
      <Reveal><Oprichters /></Reveal>
      <Reveal><NietDoen /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Footer />
      <StickyCta />
    </main>
  );
}
