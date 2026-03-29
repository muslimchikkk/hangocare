import React from "react";
import { motion } from "framer-motion";
import { Droplets, Layers, Radio, Zap } from "lucide-react";

const devices = [
  {
    icon: Droplets,
    name: "HanG.O Care",
    subtitle: "FACE & BODY SYSTEM",
    color: "bg-sky-50 text-sky-500",
    iconBg: "bg-sky-100",
    benefits: [
      "Deep hydro-exfoliation & pore extraction",
      "Transdermal delivery & skin whitening",
      "Micro-current facial lifting",
      "Cooling / heating skin relaxation",
    ],
  },
  {
    icon: Layers,
    name: "SECRET DUO",
    subtitle: "FRACTIONAL LASER + RF",
    color: "bg-cyan-50 text-cyan-500",
    iconBg: "bg-cyan-100",
    benefits: [
      "Micro-needle fractional RF",
      "1540nm erbium glass laser",
      "Combination treatment flexibility",
      "Significantly reduced downtime",
    ],
  },
  {
    icon: Radio,
    name: "VOLNEWMER",
    subtitle: "MONOPOLAR RF LIFTING",
    color: "bg-blue-50 text-blue-500",
    iconBg: "bg-blue-100",
    benefits: [
      "Safest non-invasive skin tightening",
      "Radial RF energy with curved surface tip",
      "Continuous water cooling system",
      "Effective lifting for face & body",
    ],
  },
  {
    icon: Zap,
    name: "SCIZER",
    subtitle: "HIFU BODY CONTOURING",
    color: "bg-teal-50 text-teal-400",
    iconBg: "bg-teal-100",
    benefits: [
      "Powerful HIFU fat reduction",
      "Slim D13 handpiece — 13mm depth",
      "Dual cooling & heating technology",
      "Multi-area body treatment",
    ],
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
            Complete Device Portfolio
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Advanced Technology for{" "}
            <span className="italic text-primary">Every Treatment</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            From deep skin hydration to body contouring, Cluederm's portfolio of clinical-grade devices addresses the full spectrum of aesthetic and dermatological needs — visible results from the very first session.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border/60 rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-500"
            >
              <div className={`w-11 h-11 rounded-xl ${d.iconBg} flex items-center justify-center mb-4`}>
                <d.icon className={`w-5 h-5 ${d.color.split(" ")[1]}`} />
              </div>
              <p className="font-display text-lg font-semibold text-foreground">{d.name}</p>
              <p className="text-xs font-body font-semibold text-primary uppercase tracking-wider mb-3">{d.subtitle}</p>
              <ul className="space-y-1.5">
                {d.benefits.map((b) => (
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