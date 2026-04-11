import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Microscope, Activity, FlaskConical } from "lucide-react";

const badges = [
  { icon: Award, label: "By Cluederm" },
  { icon: ShieldCheck, label: "CE Certified" },
  { icon: Microscope, label: "Clinically Validated" },
  { icon: Activity, label: "Non-Invasive Protocol" },
  { icon: FlaskConical, label: "Evidence-Based" },
];

export default function SocialProofBar() {
  return (
    <section
      className="py-8 bg-primary"
    >
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
  );
}