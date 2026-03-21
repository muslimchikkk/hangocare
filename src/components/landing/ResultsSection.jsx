import React from "react";
import { motion } from "framer-motion";

const SOLUTIONS_IMG = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b60bab0be_generated_image.png";

const solutions = [
  {
    step: "1",
    name: "PEEL+",
    description: "The first step of treatment is the process of non-irritating skin scaling which facilitates accelerated exfoliation, the removal of dead skin cells and other impurities.",
    color: "bg-rose-50 border-rose-200",
    tag: "Step 1",
  },
  {
    step: "2",
    name: "SEBO+",
    description: "The second step of treatment is for sebum dissolution, treatment of blackheads, and effective pore control. This assists the skin to balance between oily and moisture textures.",
    color: "bg-pink-50 border-pink-200",
    tag: "Step 2",
  },
  {
    step: "3",
    name: "REJUVE+",
    description: "The final step of treatment promotes skin elasticity by inducing collagen and elastin regeneration and improving the inhibition of moisture loss by improving water retention.",
    color: "bg-fuchsia-50 border-fuchsia-200",
    tag: "Step 3",
  },
  {
    step: "C",
    name: "CLEANSYS",
    description: "To provide a convenient cleaning agent specifically made for the needs of the system, CLEANSYS assists in easy maintenance of AQUAPURE.",
    color: "bg-orange-50 border-orange-200",
    tag: "Maintenance",
  },
];

const stats = [
  { value: "Immediate", label: "Visible results after 1st session" },
  { value: "4-in-1", label: "Multifunctional handpieces" },
  { value: "All", label: "Skin types & profiles" },
  { value: "Non-Invasive", label: "Zero downtime treatment" },
];

export default function ResultsSection() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            AQUASOLUTION
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Science-Grade{" "}
            <span className="italic text-primary">Skincare Solutions</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            A combination of natural extracts, Hyaluronic Acid, and a complex of Peptides complement the patented technology — Seaweed Complex · Propolis Extract · Centella Asiatica TECA · Peptide Complex.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {solutions.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border rounded-2xl p-5 ${s.color}`}
              >
                <span className="text-xs font-body font-semibold text-primary uppercase tracking-wider">{s.tag}</span>
                <p className="font-display text-xl font-bold text-foreground mt-1 mb-2">{s.name}</p>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={SOLUTIONS_IMG}
              alt="AQUASOLUTION skincare products"
              className="w-full rounded-3xl shadow-xl mb-8"
              loading="lazy"
            />
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-card border border-border/60 rounded-2xl p-5">
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs font-body text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}