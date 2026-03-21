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

const FILL = "hsl(346, 60%, 32%)";

export default function SocialProofBar() {
  return (
    <div className="relative" style={{ filter: "drop-shadow(0 8px 24px rgba(100,20,40,0.35))" }}>
      {/* Top wave */}
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ fill: FILL, marginBottom: "-1px" }}>
        <path d="M0,60 L0,40 C360,0 720,80 1080,40 C1260,20 1380,30 1440,40 L1440,60 Z" />
      </svg>

      {/* Main bar */}
      <section className="py-7" style={{ backgroundColor: FILL }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-14"
          >
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-body text-base font-semibold text-white/90 tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom wave */}
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ fill: FILL, marginTop: "-1px" }}>
        <path d="M0,0 L0,20 C360,60 720,-20 1080,20 C1260,40 1380,30 1440,20 L1440,0 Z" />
      </svg>
    </div>
  );
}