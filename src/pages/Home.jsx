import React, { useEffect } from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import SocialProofBar from "../components/landing/SocialProofBar";
import DevicesSection from "../components/landing/DevicesSection";
import FaqSection from "../components/landing/FaqSection";
import CtaSection from "../components/landing/CtaSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "#cta") {
      setTimeout(() => {
        document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="font-body">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <DevicesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}