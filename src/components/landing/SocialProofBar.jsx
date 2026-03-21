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
    <div className="relative">
      {/* Top wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ fill: "hsl(346 60% 32%)" }}>
          <path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <section className="py-8" style={{ backgroundColor: "hsl(346 60% 32%)" }}>
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
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-body text-sm font-medium text-white/80 tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom wave */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ fill: "hsl(346 60% 32%)" }}>
          <path d="M0,24 C240,0 480,48 720,24 C960,0 1200,48 1440,24 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </div>
  );
}