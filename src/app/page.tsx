import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import Ecosystem from "@/components/Ecosystem";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Services />
      <Ecosystem />
      <Packages />
      <Process />
      <Results />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
