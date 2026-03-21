import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const clinicalResults = [
  {
    gender: "Female",
    age: 35,
    program: "Anti-aging",
    outcome: "After 4 treatments — visible reduction in fine lines and improved skin firmness.",
    tag: "Anti-aging Program",
    color: "bg-pink-50 border-pink-200",
  },
  {
    gender: "Male",
    age: 30,
    program: "Acne Skin",
    outcome: "Immediately post-treatment — significant pore reduction and sebum control.",
    tag: "Acne Program",
    color: "bg-rose-50 border-rose-200",
  },
  {
    gender: "Female",
    age: 39,
    program: "Sensitive Skin",
    outcome: "Immediately post-treatment — calmer, more even skin tone with no irritation.",
    tag: "Sensitive Skin Program",
    color: "bg-fuchsia-50 border-fuchsia-200",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="results" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Clinical Results
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Real Patients,{" "}
            <span className="italic text-primary">Real Results</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            AQUAPURE delivers immediate visible results across diverse skin types, ages, and conditions — from acne-prone and sensitive to anti-aging programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {clinicalResults.map((r, i) => (
            <motion.div
              key={r.program}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`border rounded-2xl p-8 ${r.color}`}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">"{r.outcome}"</p>
              <div className="pt-5 border-t border-border/60">
                <span className="inline-block text-xs font-body font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full px-3 py-1 mb-3">
                  {r.tag}
                </span>
                <p className="font-body text-sm font-semibold text-foreground">{r.gender}, Age {r.age}</p>
                <p className="font-body text-xs text-muted-foreground">Skin Program: {r.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}