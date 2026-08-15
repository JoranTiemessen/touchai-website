import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Keten from "@/components/Keten";
import Systemen from "@/components/Systemen";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
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
      <Reveal><Keten /></Reveal>
      <Reveal><Systemen /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Results /></Reveal>
      <Reveal><Pricing /></Reveal>
      <Reveal><Faq /></Reveal>
      <Reveal><Advisors /></Reveal>
      <Reveal><FinalCTA /></Reveal>
      <Footer />
      <StickyCta />
    </main>
  );
}
