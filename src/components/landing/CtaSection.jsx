import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
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
            Contact <span className="text-primary italic">Us</span>
          </h2>
          <p className="mt-5 text-lg font-body font-light text-muted-foreground max-w-xl mx-auto">
            Get in touch with our clinical team for professional consultations, technical documentation, and tailored information for your practice.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <a
              href="tel:+420222224315"
              className="group flex flex-col items-center gap-3 bg-secondary/60 border border-border/60 rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-body font-semibold text-primary uppercase tracking-widest mb-1">Telephone</p>
                <p className="font-body font-medium text-foreground">+420 222 224 315</p>
              </div>
            </a>

            <a
              href="mailto:sales@hangocare.eu"
              className="group flex flex-col items-center gap-3 bg-secondary/60 border border-border/60 rounded-2xl p-7 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-body font-semibold text-primary uppercase tracking-widest mb-1">Email</p>
                <p className="font-body font-medium text-foreground">sales@hangocare.eu</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-3 bg-secondary/60 border border-border/60 rounded-2xl p-7">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-body font-semibold text-primary uppercase tracking-widest mb-1">Address</p>
                <p className="font-body font-medium text-foreground leading-snug">
                  HanG.O Care s.r.o.<br />
                  K Hajum 2606/2b<br />
                  15500 Česko
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}