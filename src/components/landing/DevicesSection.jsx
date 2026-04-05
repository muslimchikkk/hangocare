import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Layers, Radio, Zap } from "lucide-react";

const devices = [
  {
    id: "aquapure-ii",
    icon: Droplets,
    name: "AQUAPURE II",
    category: "Hydro-Dermabrasion System",
    tag: "Skin Rejuvenation",
    color: "bg-sky-50 border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/d632426b4_generated_image.png",
    shortDesc:
      "8-in-1 multimodal platform combining hydro-exfoliation, electroporation, microcurrent, LED, and ultrasound in a single clinical-grade device.",
    highlights: ["8 modalities", "CE Certified", "Zero downtime"],
  },
  {
    id: "secret-duo",
    icon: Layers,
    name: "SECRET DUO",
    category: "Fractional RF + 1540nm Laser",
    tag: "Skin Resurfacing",
    color: "bg-cyan-50 border-cyan-200",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/c4e01f212_generated_image.png",
    shortDesc:
      "Dual non-ablative fractional platform uniting microneedle RF and 1540nm erbium glass laser for synergistic dermal remodeling and resurfacing.",
    highlights: ["Microneedle RF", "Er:Glass 1540nm", "Reduced downtime"],
  },
  {
    id: "volnewmer",
    icon: Radio,
    name: "VOLNEWMER",
    category: "Monopolar RF Lifting",
    tag: "Skin Tightening",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e78c755ab_generated_image.png",
    shortDesc:
      "Monopolar 448 kHz radiofrequency device for deep dermal heating with a patented curved electrode and continuous Peltier water cooling.",
    highlights: ["Monopolar RF", "448 kHz", "Epidermal cooling"],
  },
  {
    id: "scizer",
    icon: Zap,
    name: "SCIZER",
    category: "HIFU Body Contouring",
    tag: "Fat Reduction",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/91f4c2ff6_generated_image.png",
    shortDesc:
      "High-intensity focused ultrasound system targeting subcutaneous adipose at 13mm depth for permanent, non-surgical fat reduction.",
    highlights: ["2 MHz HIFU", "13mm focal depth", "Permanent adipolysis"],
  },
];

export default function DevicesSection() {
  return (
    <section id="devices" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Clinical Device Portfolio
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Evidence-Based{" "}
            <span className="italic text-primary">Technology</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            Four distinct clinical platforms — each engineered for specific dermatological and body contouring indications. Select a device to access full scientific specifications, mechanisms, and clinical references.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devices.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/devices/${d.id}`}
                className={`group flex flex-col h-full border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300 cursor-pointer ${d.color}`}
              >
                {/* Device image */}
                <div className="w-full h-44 bg-white/60 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-body font-bold text-primary uppercase tracking-widest mb-1">
                    {d.tag}
                  </span>
                  <p className="font-display text-lg font-bold text-foreground">{d.name}</p>
                  <p className="text-xs font-body font-semibold text-primary uppercase tracking-wide mb-3">
                    {d.category}
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">
                    {d.shortDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {d.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-body font-semibold bg-white/70 border border-border/40 text-foreground/70 rounded-full px-2 py-0.5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-xs font-body font-semibold text-primary group-hover:gap-2 transition-all">
                    View Clinical Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}