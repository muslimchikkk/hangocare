import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SocialProofBar from "../components/landing/SocialProofBar";
import BenefitsSection from "../components/landing/BenefitsSection";
import ResultsSection from "../components/landing/ResultsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FaqSection from "../components/landing/FaqSection";
import CtaSection from "../components/landing/CtaSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <BenefitsSection />
      <ResultsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}