import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const devices = [
  {
    id: "veloce-4800",
    name: "VELOCE 4800",
    category: "Broadband Light Technology",
    tag: "IPL / Broadband Light",
    color: "bg-amber-50 border-amber-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/62aec25f2_ChatGPTImageApr6202609_02_24PM.png",
    highlights: ["IPDL Technology", "Dual Xenon", "Multi-filter"],
  },
  {
    id: "ultraformer-mpt",
    name: "ULTRAFORMER MPT",
    category: "Bidirectional Circular & Linear Pulse",
    tag: "MMFU / HIFU",
    color: "bg-stone-50 border-stone-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/617caf10f_ChatGPTImageApr20202611_12_44PM.png",
    highlights: ["MMFU", "Ultra-Booster", "10 cartridges"],
  },
  {
    id: "fraxis-duo",
    name: "FRAXIS DUO",
    category: "Fractional CO² Laser + Microneedle RF",
    tag: "Fractional Laser + RF",
    color: "bg-amber-50 border-amber-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/fd362d670_ChatGPTImageApr11202611_58_35AM.png",
    highlights: ["CO² Laser", "Microneedle RF", "FDA Approved"],
  },
  {
    id: "volnewmer",
    name: "VOLNEWMER",
    category: "Face Reformer — Monopolar RF",
    tag: "RF Lifting",
    color: "bg-stone-50 border-stone-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/4e3af0373_volnewmer_cut05_.png",
    highlights: ["Monopolar RF", "Hidden Edge Tip", "FDA Approved"],
  },
  {
    id: "curas",
    name: "CURAS",
    category: "Q-Switched Nd:YAG Laser",
    tag: "Laser / Pigment",
    color: "bg-amber-50 border-amber-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/441ea4734_Gemini_Generated_Image_ficyxzficyxzficy.png",
    highlights: ["1064 nm / 532 nm", "Zoom-MLA & DOE", "FDA Approved"],
  },
  {
    id: "secret-rf",
    name: "SECRET RF",
    category: "Fractional Microneedle + Cannula RF",
    tag: "Fractional RF",
    color: "bg-stone-50 border-stone-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dcac82341_ChatGPTImageApr19202611_05_55AM.png",
    highlights: ["2 MHz RF", "0.5–3.5 mm depth", "FDA Approved"],
  },
  {
    id: "secret-duo",
    name: "SECRET DUO",
    category: "Er-Glass + Microneedle RF + Cannula RF",
    tag: "Dual Fractional",
    color: "bg-amber-50 border-amber-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a3e43fdf3_secret_duo_2p.png",
    highlights: ["1540nm Er:Glass", "Microneedle RF", "FDA Approved"],
  },
  {
    id: "ultraformer-iii",
    name: "ULTRAFORMER III",
    category: "Macro & Micro Focused Ultrasound",
    tag: "HIFU",
    color: "bg-stone-50 border-stone-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a67c1fb91_image.png",
    highlights: ["Micro & Macro HIFU", "7 cartridges", "Face & Body"],
  },
  {
    id: "pento",
    name: "PENTO",
    category: "755nm Alexandrite + 1064nm Nd:YAG Laser",
    tag: "Dual Wavelength Laser",
    color: "bg-amber-50 border-amber-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/bf5734eb9_ChatGPTImageApr20202611_17_01PM.png",
    highlights: ["755nm + 1064nm", "31g Rod", "FDA Approved"],
  },
  {
    id: "ncore",
    hidden: true,
    name: "N.CORE 3D",
    category: "Diode Laser — Three Wavelengths",
    tag: "Diode Laser",
    color: "bg-stone-50 border-stone-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/8e08eccb5_ChatGPTImageApr19202611_00_19AM.png",
    highlights: ["755 / 808 / 1064nm", "1400W", "3D Lifting"],
  },
  {
    id: "aquapure-ii",
    name: "AQUAPURE II",
    category: "Deep Skin Care System",
    tag: "Hydradermabrasion",
    color: "bg-amber-50 border-amber-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/564499f98_AcuaPure_25copy.png",
    highlights: ["AD Peeling", "MF Microneedling", "LightPure LED"],
  },
  {
    id: "clatuu-alpha",
    name: "CLATUU ALPHA",
    category: "Cryolipolysis",
    tag: "Fat Freezing",
    color: "bg-stone-50 border-stone-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/cfa646f7c_ChatGPTImageApr19202611_03_52AM.png",
    highlights: ["360° Cooling", "20% Stronger Vacuum", "Dual-area treat."],
  },
];

export default function DevicesSection() {
  const { t } = useTranslation();
  return (
    <section id="devices" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            {t("devices_section.label")}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            {t("devices_section.heading")}{" "}
            <span className="italic text-primary">{t("devices_section.heading_highlight")}</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            {t("devices_section.description")} <button onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })} className="text-primary font-medium underline underline-offset-2 hover:text-primary/80 transition-colors">{t("devices_section.description_link")}</button> {t("devices_section.description_end")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {devices.filter(d => !d.hidden).map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
            >
              <Link
                to={`/devices/${d.id}`}
                className={`group flex flex-col h-full border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300 cursor-pointer ${d.color}`}
              >
                {/* Device image */}
                <div className="w-full h-44 bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-body font-bold text-primary uppercase tracking-widest mb-1">
                    {d.tag}
                  </span>
                  <p className="font-display text-base font-bold text-foreground">{d.name}</p>
                  <p className="text-xs font-body font-semibold text-primary uppercase tracking-wide mb-3">
                    {d.category}
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">
                    {t(`devices.${d.id}.shortDesc`)}
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

                  <div className="mt-4 flex items-center gap-1 text-xs font-body font-semibold text-primary group-hover:gap-2 transition-all">
                    {t("devices_section.view_details")}
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