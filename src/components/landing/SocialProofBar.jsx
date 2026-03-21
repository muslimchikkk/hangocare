import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Microscope, Sparkles, Leaf } from "lucide-react";

const badges = [
  { icon: Award, label: "By Cluederm" },
  { icon: ShieldCheck, label: "Medical Grade" },
  { icon: Microscope, label: "Clinically Proven" },
  { icon: Sparkles, label: "Non-Invasive" },
  { icon: Leaf, label: "Skin-Safe Formula" },
];

export default function SocialProofBar() {
  return (
    <section className="py-8 bg-background border-y border-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
        >
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm font-medium text-muted-foreground tracking-wide">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}