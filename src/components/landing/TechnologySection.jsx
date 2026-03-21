import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEVICE_IMG = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/73ba438d0_generated_image.png";

const devices = [
  {
    tag: "The Device",
    heading: "AQUAPURE II —",
    headingItalic: "8 Functions in 1",
    description:
      "A complete face & body treatment system combining 8 advanced modalities in a single clinical-grade device — delivering visible results from the very first session.",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/0d6ab5707_generated_image.png",
    features: [
      { title: "Skin Rejuvenation & Skin Boost", description: "Restores vitality and radiance with deep nourishment and cellular renewal." },
      { title: "Deep Exfoliation, Extraction & Skin Texture", description: "Removes dead cells, clears pores, and refines overall skin texture for a smoother, cleaner surface." },
      { title: "Transdermal Delivery & Skin Whitening", description: "Delivers active ingredients deep into skin layers while reducing pigmentation and brightening tone." },
      { title: "Acne & Anti-Bacteria + Skin Relaxation", description: "Eliminates acne-causing bacteria and soothes skin with cooling and calming technology." },
    ],
  },
  {
    tag: "The Handpieces",
    heading: "Designed for",
    headingItalic: "Every Skin",
    description:
      "Four specialized handpieces work in synergy to deliver a fully customized treatment experience — targeting deep cleansing, nourishment, lifting, and soothing in a single session.",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/f4caddd96_generated_image.png",
    features: [
      { title: "AQUAPEEL Handpiece", description: "Removes dead skin cells and impurities via non-irritating hydro-dermabrasion." },
      { title: "Electroporation Handpiece", description: "Nourishes and brightens skin with precision-controlled stimulation." },
      { title: "Micro-Current Handpiece", description: "Lifts jowls and eyebrows, stimulates collagen and elastin regeneration." },
      { title: "Cooling / Heating Handpiece", description: "Soothes, desensitizes, firms and tones for complete skin relaxation." },
    ],
  },
  {
    tag: "The Solutions",
    heading: "Science-Grade",
    headingItalic: "Formulas",
    description:
      "AQUASOLUTION products are formulated with Hyaluronic Acid, Peptide Complex, Seaweed Complex, Propolis Extract, and Centella Asiatica TECA to complement and amplify every treatment step.",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b60bab0be_generated_image.png",
    features: [
      { title: "PEEL+", description: "Accelerates exfoliation and removes dead skin cells and impurities in the first treatment step." },
      { title: "SEBO+", description: "Dissolves sebum, treats blackheads, and balances oily and moisture skin textures." },
      { title: "REJUVE+", description: "Promotes elasticity by inducing collagen and elastin regeneration and improving water retention." },
      { title: "CLEANSYS", description: "A specialized cleaning agent for easy and effective AQUAPURE device maintenance." },
    ],
  },
];

export default function TechnologySection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go((current - 1 + devices.length) % devices.length);
  const next = () => go((current + 1) % devices.length);

  const device = devices[current];

  return (
    <section id="technology" className="py-24 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text */}
            <div>
              <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
                {device.tag}
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {device.heading}{" "}
                <span className="italic text-primary">{device.headingItalic}</span>
              </h2>
              <p className="mt-5 text-lg font-body font-light text-muted-foreground">
                {device.description}
              </p>
              <div className="mt-8 space-y-5">
                {device.features.map((f, i) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm font-display font-bold text-primary">{i + 1}</span>
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{f.title}</p>
                      <p className="font-body text-sm text-muted-foreground mt-0.5">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/30 rounded-3xl blur-2xl" />
              <img
                src={device.image}
                alt={device.headingItalic}
                className="relative w-full rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-border bg-card hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {devices.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-border bg-card hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}