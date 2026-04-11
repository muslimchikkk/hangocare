import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles, Sun, ShieldCheck, Activity } from "lucide-react";

const HERO_WOMEN = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/7fbd129b0_generated_image.png";

// Subtle animated data-point nodes for a clinical/technical feel
const DATA_NODES = [
  { x: "6%",  y: "18%", size: 4, delay: 0,   duration: 4.5 },
  { x: "91%", y: "12%", size: 3, delay: 0.8,  duration: 5 },
  { x: "72%", y: "80%", size: 4, delay: 1.4,  duration: 4.8 },
  { x: "18%", y: "82%", size: 3, delay: 0.3,  duration: 5.2 },
  { x: "86%", y: "50%", size: 3, delay: 2.1,  duration: 4.3 },
  { x: "40%", y: "5%",  size: 3, delay: 1,    duration: 5.5 },
  { x: "3%",  y: "55%", size: 4, delay: 1.7,  duration: 4.6 },
  { x: "60%", y: "92%", size: 3, delay: 0.5,  duration: 5.1 },
];

export default function HeroSection() {
  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(175,35%,30%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(175,35%,30%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow centers */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none bg-primary/10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none bg-primary/8" />

      {/* Animated data nodes */}
      {DATA_NODES.map((n, i) => (
        <motion.div
          key={i}
          style={{ position: "absolute", left: n.x, top: n.y }}
          animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.6, 1] }}
          transition={{ duration: n.duration, repeat: Infinity, ease: "easeInOut", delay: n.delay }}
          className="pointer-events-none"
        >
          <div
            style={{ width: n.size, height: n.size }}
            className="rounded-full bg-primary/50"
          />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-body font-semibold uppercase tracking-widest mb-6 border border-primary/30 bg-primary/10 text-primary"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Medical-Grade Aesthetic Technology
            </motion.div>

            <div className="mb-6">
              <img src="https://media.base44.com/images/public/69be488f616a63ca33a2e564/6929e9011_ChatGPTImageApr11202611_18_33AM.png" alt="HanG.O Care" className="h-20 sm:h-24 lg:h-28 w-auto" />
            </div>

            <h1 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-foreground/90">
              Clinical-Grade{" "}
              <span className="text-primary">Aesthetic Devices</span>{" "}
              for Medical Professionals
            </h1>

            <p className="mt-6 text-base lg:text-lg font-body font-light text-foreground/60 leading-relaxed max-w-lg">
              A portfolio of twelve clinically validated, CE-certified aesthetic platforms — covering laser epilation, skin rejuvenation, fractional resurfacing, RF lifting, cryolipolysis, and HIFU body contouring. Backed by peer-reviewed evidence and designed for dermatologists and aesthetic physicians.
            </p>

            {/* Clinical stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-8">
              {[
                { value: "12", label: "Clinical Platforms" },
                { value: "CE", label: "Certified Devices" },
                { value: "0", label: "Downtime Required" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs font-body text-foreground/50 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => document.getElementById("devices")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-sm px-8 h-14 text-base"
              >
                View Device Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToCta}
                className="font-body font-medium rounded-sm px-8 h-14 text-base bg-transparent border-primary/40 text-primary"
              >
                Contact Us
              </Button>
            </div>

            {/* Modality tags */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: Droplets, label: "LASER EPILATION" },
                { icon: Sparkles, label: "HIFU / MMFU" },
                { icon: Sun, label: "FRACTIONAL RF" },
                { icon: Activity, label: "CRYOLIPOLYSIS" },
              ].map(({ icon: IconComp, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-body rounded-sm px-3 py-1.5 text-primary/80 border border-primary/20 bg-white/60">
                  <IconComp className="w-3.5 h-3.5 text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              {/* Border frame accent */}
              <div className="absolute -inset-[1px] rounded-lg pointer-events-none z-10" style={{ background: 'linear-gradient(to bottom right, hsl(175,35%,30%,0.35), transparent, hsl(175,35%,30%,0.15))' }} />

              {/* Corner markers */}
              {[
                "top-0 left-0 border-t-2 border-l-2",
                "top-0 right-0 border-t-2 border-r-2",
                "bottom-0 left-0 border-b-2 border-l-2",
                "bottom-0 right-0 border-b-2 border-r-2",
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`absolute w-6 h-6 z-20 border-primary/60 ${cls}`}
                  style={{ margin: "-1px" }}
                />
              ))}

              {/* Animated glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-lg blur-xl scale-105 bg-primary/10"
              />

              <motion.img
                src={HERO_WOMEN}
                alt="HanG.O Care — clinical skin treatment results"
                className="relative w-full rounded-lg shadow-2xl"
                loading="eager"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Info badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white shadow-xl rounded-sm p-3 flex items-center gap-3 border border-primary/20"
              >
                <div className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 bg-primary/10 border border-primary/25">
                  <span className="font-display text-lg font-bold leading-none text-center text-primary">12<br /><span className="text-[10px] font-body font-normal text-foreground/50">Devices</span></span>
                </div>
                <div>
                  <p className="text-[10px] font-body text-foreground/40 uppercase tracking-widest">by Cluederm</p>
                  <p className="text-sm font-display font-bold text-foreground">Complete Clinical <span className="text-primary">Platform</span></p>
                  <p className="text-[10px] font-body uppercase tracking-wider text-primary">Full Aesthetic Portfolio</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}