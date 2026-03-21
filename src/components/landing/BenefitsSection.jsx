import React from "react";
import { motion } from "framer-motion";
import { Droplets, Zap, Activity, Thermometer } from "lucide-react";

const TREATMENT_IMG = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/112bbe1ba_generated_image.png";

const handpieces = [
  {
    icon: Droplets,
    name: "AQUAPEEL",
    subtitle: "PEELING",
    color: "bg-rose-50 text-rose-500",
    iconBg: "bg-rose-100",
    benefits: ["Removes dead skin cells and other impurities", "Deep cleansing", "AQUAPURE System Cleaning"],
  },
  {
    icon: Zap,
    name: "ELECTROPORATION",
    subtitle: "WHITENING",
    color: "bg-pink-50 text-pink-500",
    iconBg: "bg-pink-100",
    benefits: ["Nourishes skin", "Boosts circulation", "Brightens skin"],
  },
  {
    icon: Activity,
    name: "MICRO-CURRENT",
    subtitle: "FACIAL LIFTING",
    color: "bg-fuchsia-50 text-fuchsia-500",
    iconBg: "bg-fuchsia-100",
    benefits: ["Tightens skin", "Lifts jowls and eyebrows", "Elastin and collagen regeneration", "Stimulates blood circulation"],
  },
  {
    icon: Thermometer,
    name: "COOLING / HEATING",
    subtitle: "SKIN RELAXATION",
    color: "bg-orange-50 text-orange-400",
    iconBg: "bg-orange-100",
    benefits: ["Cooling: Reduces fine lines and wrinkles, enhances skin repair", "Heating: Desensitizes skin, firms and tones"],
  },
];

export default function BenefitsSection() {
  return (
    <section id="handpieces" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Multi-Functional Handpieces
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Optimized Technology for{" "}
            <span className="italic text-primary">Dermal Treatments</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            Each AQUAPURE Handpiece works to promote skin tightness and rejuvenation with skin-nourishing solutions that deliver immediate results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={TREATMENT_IMG}
            alt="AQUAPURE treatment in clinic"
            className="rounded-3xl shadow-xl w-full"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">User-Focused Smart Technology</h3>
            <p className="font-body text-muted-foreground">The Smart Auto-Reaction Interface detects and enables automatic recognition to all activated handpieces.</p>
            <p className="font-body text-muted-foreground">The AQUAPEEL spray control knob delivers equal distribution of applied solutions at a range of 10 levels — customizable for each patient and skin type to maximize treatment efficiency.</p>
            <p className="font-body text-muted-foreground">The Precision Electroporation Handpiece transfers controlled stimulation to skin without signs of irritation.</p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {handpieces.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-500"
            >
              <div className={`w-11 h-11 rounded-xl ${h.iconBg} flex items-center justify-center mb-4`}>
                <h.icon className={`w-5 h-5 ${h.color.split(" ")[1]}`} />
              </div>
              <p className="font-display text-lg font-semibold text-foreground">{h.name}</p>
              <p className="text-xs font-body font-semibold text-primary uppercase tracking-wider mb-3">{h.subtitle}</p>
              <ul className="space-y-1.5">
                {h.benefits.map((b) => (
                  <li key={b} className="text-xs font-body text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5">·</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}