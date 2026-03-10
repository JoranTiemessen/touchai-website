import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AgentTypes from "@/components/AgentTypes";
import Results from "@/components/Results";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import Advisors from "@/components/Advisors";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <AgentTypes />
      <Results />
      <CaseStudies />
      <About />
      <Advisors />
      <FinalCTA />
      <Footer />
    </main>
  );
}
