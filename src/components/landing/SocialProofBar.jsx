import React from "react";
import { motion } from "framer-motion";

const logos = ["Cluederm", "Classys", "Medical Grade", "Clinically Proven", "Non-Invasive"];

export default function SocialProofBar() {
  return (
    <section className="py-10 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-body text-sm font-semibold text-primary-foreground/70 uppercase tracking-widest"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}