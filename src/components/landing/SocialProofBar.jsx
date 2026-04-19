import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Microscope, Activity, FlaskConical } from "lucide-react";
import { useTranslation } from "react-i18next";

const badgeKeys = [
  { icon: Award, key: "social_proof.by_cluederm" },
  { icon: ShieldCheck, key: "social_proof.ce_certified" },
  { icon: Microscope, key: "social_proof.clinically_validated" },
  { icon: Activity, key: "social_proof.non_invasive" },
  { icon: FlaskConical, key: "social_proof.evidence_based" },
];

export default function SocialProofBar() {
  const { t } = useTranslation();
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
          {badgeKeys.map(({ icon: Icon, key }, i) => (
            <motion.div
              key={key}
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
                {t(key)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}