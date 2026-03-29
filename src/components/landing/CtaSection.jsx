import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-body font-semibold text-primary uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-sm">
            For Clinics & Medical Professionals
          </span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Bring <span className="text-primary">HanG.O Care</span> to{" "}
            <span className="italic">Your Practice</span>
          </h2>
          <p className="mt-5 text-lg font-body font-light text-muted-foreground max-w-xl mx-auto">
            Join medical aesthetic clinics and certified professionals worldwide who rely on HanG.O Care's evidence-based, non-invasive protocols. Request a clinical demonstration today.
          </p>

          <Button
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-full px-12 h-16 text-lg group shadow-xl shadow-primary/20"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>


        </motion.div>
      </div>
    </section>
  );
}