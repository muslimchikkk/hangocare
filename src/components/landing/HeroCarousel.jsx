import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const devices = [
  { id: "veloce-4800", name: "VELOCE 4800", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/62aec25f2_ChatGPTImageApr6202609_02_24PM.png" },
  { id: "ultraformer-mpt", name: "ULTRAFORMER MPT", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/ae26d0b12_image.png" },
  { id: "fraxis-duo", name: "FRAXIS DUO", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/fd362d670_ChatGPTImageApr11202611_58_35AM.png" },
  { id: "volnewmer", name: "VOLNEWMER", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/4e3af0373_volnewmer_cut05_.png" },
  { id: "curas", name: "CURAS", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/441ea4734_Gemini_Generated_Image_ficyxzficyxzficy.png" },
  { id: "secret-rf", name: "SECRET RF", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dcac82341_ChatGPTImageApr19202611_05_55AM.png" },
  { id: "secret-duo", name: "SECRET DUO", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a3e43fdf3_secret_duo_2p.png" },
  { id: "ultraformer-iii", name: "ULTRAFORMER III", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a67c1fb91_image.png" },
  { id: "pento", name: "PENTO", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/bf5734eb9_ChatGPTImageApr20202611_17_01PM.png" },
  { id: "aquapure-ii", name: "AQUAPURE II", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/564499f98_AcuaPure_25copy.png" },
  { id: "clatuu-alpha", name: "CLATUU ALPHA", image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/cfa646f7c_ChatGPTImageApr19202611_03_52AM.png" },
];

const INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % devices.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const device = devices[current];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Border frame accent */}
      <div className="absolute -inset-[1px] rounded-lg pointer-events-none z-10" style={{ background: 'linear-gradient(to bottom right, hsl(175,35%,30%,0.35), transparent, hsl(175,35%,30%,0.15))' }} />

      {/* Corner markers */}
      {["top-0 left-0 border-t-2 border-l-2", "top-0 right-0 border-t-2 border-r-2", "bottom-0 left-0 border-b-2 border-l-2", "bottom-0 right-0 border-b-2 border-r-2"].map((cls, i) => (
        <div key={i} className={`absolute w-6 h-6 z-20 border-primary/60 ${cls}`} style={{ margin: "-1px" }} />
      ))}

      {/* Animated glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-lg blur-xl scale-105 bg-primary/10"
      />

      {/* Image area */}
      <Link to={`/devices/${device.id}`} className="block relative rounded-lg overflow-hidden bg-transparent aspect-[4/5]">
        <AnimatePresence mode="wait">
          <motion.img
            key={device.id}
            src={device.image}
            alt={device.name}
            className="absolute inset-0 w-full h-full object-contain p-4"
            style={{ mixBlendMode: "multiply", background: "transparent" }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Device name label */}
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-white/90 to-transparent pt-8 pb-4 px-4 text-center">
          <p className="font-display text-sm font-bold text-foreground tracking-widest uppercase">{device.name}</p>
          <p className="text-[10px] font-body text-primary font-semibold uppercase tracking-widest mt-0.5">View Details →</p>
        </div>
      </Link>

      {/* Dot indicators */}
      <div className="absolute -bottom-7 left-0 right-0 flex justify-center gap-1.5 z-20">
        {devices.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${i === current ? "bg-primary w-4 h-1.5" : "bg-primary/25 w-1.5 h-1.5"}`}
          />
        ))}
      </div>
    </div>
  );
}