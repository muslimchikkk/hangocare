import React from "react";
import { motion } from "framer-motion";

const DEVICE_IMG = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/2357edd06_generated_image.png";

const features = [
  { title: "Smart Auto-Reaction Interface", description: "Detects and enables automatic recognition to all activated handpieces for a seamless workflow." },
  { title: "Uniform Spray Control", description: "The AQUAPEEL spray control knob delivers equal distribution at a range of 10 levels — customizable per skin type." },
  { title: "Subtle & Stable Electroporation", description: "Precision handpiece transfers controlled stimulation to skin without signs of irritation." },
  { title: "Head-to-Toe Coverage", description: "Specialized scalp and body tips extend treatment to hair follicles, broader body areas, and hard-to-reach regions." },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
              The Device
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Engineered for{" "}
              <span className="italic text-primary">Precision</span>
            </h2>
            <p className="mt-5 text-lg font-body font-light text-muted-foreground">
              AQUAPURE combines cutting-edge dermabrasion science with an intuitive, user-focused design — empowering clinicians to deliver consistent, professional-grade results.
            </p>
            <div className="mt-8 space-y-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-display font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">{f.title}</p>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">{f.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/30 rounded-3xl blur-2xl" />
            <img
              src={DEVICE_IMG}
              alt="AQUAPURE device"
              className="relative w-full rounded-3xl shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}