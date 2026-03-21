import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Globe } from "lucide-react";

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
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Bring <span className="text-foreground">HanG.O</span> <span className="font-script text-5xl text-primary">Care</span> to{" "}
            <span className="italic text-primary">Your Clinic</span>
          </h2>
          <p className="mt-5 text-lg font-body font-light text-muted-foreground max-w-xl mx-auto">
            Join clinics and aesthetic professionals worldwide who trust HanG.O Care for non-invasive, multifunctional dermal treatments. Request your personalized demo today.
          </p>

          <Button
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-full px-12 h-16 text-lg group shadow-xl shadow-primary/20"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-sm font-body text-muted-foreground">
            <a href="tel:+420222224315" className="flex items-start gap-2 hover:text-foreground transition-colors">
              <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">Telephone</span>
                +420 222 224 315
              </div>
            </a>
            <a href="mailto:sales@hangocare.eu" className="flex items-start gap-2 hover:text-foreground transition-colors">
              <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">Email</span>
                sales@hangocare.eu
              </div>
            </a>
            <div className="flex items-start gap-2">
              <Globe className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <span className="block text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">Address</span>
                HanG.O Care s.r.o.<br />
                K Hajum 2606/2b<br />
                15500 Česko
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}