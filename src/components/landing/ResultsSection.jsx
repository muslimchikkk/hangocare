import React from "react";
import { motion } from "framer-motion";

const LIFESTYLE_IMAGE = "/__generating__/img_05814f1f35a0.png";

const stats = [
  { value: "97%", label: "Saw firmer skin" },
  { value: "4x", label: "Faster absorption" },
  { value: "89%", label: "Reduced fine lines" },
  { value: "14", label: "Days to visible glow" },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl blur-2xl" />
            <img
              src={LIFESTYLE_IMAGE}
              alt="Woman using Lumière device"
              className="relative w-full rounded-3xl shadow-xl"
              loading="lazy"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
              Proven Results
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Real Women,{" "}
              <span className="italic text-primary">Real Results</span>
            </h2>
            <p className="mt-5 text-lg font-body font-light text-muted-foreground leading-relaxed">
              In a 12-week clinical study with 500 participants, Lumière delivered
              transformative results across all skin types and ages. No filters, no edits—just
              genuine, radiant skin.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-card border border-border/60 rounded-2xl p-5"
                >
                  <p className="font-display text-3xl lg:text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-body text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}