import React from "react";
import { motion } from "framer-motion";

const logos = ["Vogue", "Elle", "Allure", "Harper's Bazaar", "Cosmopolitan"];

export default function SocialProofBar() {
  return (
    <section className="py-12 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-body font-medium text-muted-foreground uppercase tracking-widest mb-8">
            As featured in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {logos.map((logo) => (
              <span
                key={logo}
                className="font-display text-xl lg:text-2xl font-semibold text-muted-foreground/40 italic select-none"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}