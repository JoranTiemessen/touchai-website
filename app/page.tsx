import Navbar from "@/components/Navbar";
import ScrollBackground from "@/components/ScrollBackground";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AgentTypes from "@/components/AgentTypes";
import Results from "@/components/Results";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" style={{ isolation: "isolate" }}>
      <ScrollBackground />
      <Navbar />
      <Hero />
      <Services />
      <AgentTypes />
      <Results />
      <HowItWorks />
      <CaseStudies />
      <Testimonials />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
