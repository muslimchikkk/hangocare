import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Clock, ShieldCheck, Heart, Leaf, Waves } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Visible Results in 14 Days",
    description: "Clinically proven micro-current technology stimulates collagen production for firmer, more youthful skin.",
  },
  {
    icon: Clock,
    title: "5-Minute Routine",
    description: "Effortlessly fits into your morning or evening ritual. No appointments, no downtime, no hassle.",
  },
  {
    icon: ShieldCheck,
    title: "Dermatologist Approved",
    description: "Developed with leading dermatologists and tested across all skin types for safe, effective results.",
  },
  {
    icon: Heart,
    title: "Pain-Free Technology",
    description: "Gentle sonic pulses and LED therapy work below the surface without any discomfort or irritation.",
  },
  {
    icon: Leaf,
    title: "Clean & Sustainable",
    description: "Cruelty-free, vegan-friendly materials with recyclable packaging. Beauty that cares for the planet.",
  },
  {
    icon: Waves,
    title: "3-in-1 Treatment",
    description: "Combines micro-current, red LED therapy, and sonic massage in one elegant, portable device.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Why Lumière
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Science Meets <span className="italic text-primary">Self-Care</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            Everything you need for a professional-grade skincare experience, designed for the modern woman.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative bg-card border border-border/60 rounded-2xl p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}