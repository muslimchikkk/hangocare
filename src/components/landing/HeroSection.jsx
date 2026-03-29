import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles, Sun, ShieldCheck, Activity } from "lucide-react";

const HERO_WOMEN = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/2742fe782_generated_image.png";

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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[hsl(214,30%,8%)] via-[hsl(210,28%,11%)] to-[hsl(199,40%,13%)]">

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(199,80%,70%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(199,80%,70%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow centers */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated data nodes */}
      {DATA_NODES.map((n, i) => (
        <motion.div
          key={i}
          style={{ position: "absolute", left: n.x, top: n.y }}
          animate={{ opacity: [0.15, 0.7, 0.15], scale: [1, 1.6, 1] }}
          transition={{ duration: n.duration, repeat: Infinity, ease: "easeInOut", delay: n.delay }}
          className="pointer-events-none"
        >
          <div
            style={{ width: n.size, height: n.size }}
            className="rounded-full bg-primary"
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
              className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-1.5 rounded-sm text-xs font-body font-semibold uppercase tracking-widest mb-6 border border-primary/20"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Medical-Grade Aesthetic Technology
            </motion.div>

            <div className="mb-4">
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-none tracking-tight">HanG.O</span>
              <span className="font-grotesk text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary ml-3 leading-none">Care</span>
            </div>

            <h1 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight text-white/90">
              Advanced{" "}
              <span className="text-primary">Face & Body</span>{" "}
              Treatment System
            </h1>

            <p className="mt-6 text-base lg:text-lg font-body font-light text-white/60 leading-relaxed max-w-lg">
              A non-invasive, multifunctional clinical platform delivering deep exfoliation, skin rejuvenation, transdermal delivery, whitening, acne control, and full-body relaxation — with measurable, evidence-based results from the first session.
            </p>

            {/* Clinical stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {[
                { value: "8-in-1", label: "Treatment Modalities" },
                { value: "CE", label: "Certified Device" },
                { value: "0", label: "Downtime Required" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs font-body text-white/50 mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToCta}
                className="bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-sm px-8 h-14 text-base group"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
                className="font-body font-medium rounded-sm px-8 h-14 text-base border-white/20 text-white/80 hover:bg-white/5 hover:text-white bg-transparent"
              >
                Explore Technology
              </Button>
            </div>

            {/* Modality tags */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { icon: Droplets, label: "AQUAPEEL" },
                { icon: Sparkles, label: "ELECTROPORATION" },
                { icon: Sun, label: "MICRO-CURRENT" },
                { icon: Activity, label: "RF ENERGY" },
              ].map(({ icon: IconComp, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs font-body text-white/40 border border-white/10 rounded-sm px-3 py-1.5">
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
              <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-br from-primary/40 via-transparent to-primary/20 pointer-events-none z-10" />

              {/* Corner markers */}
              {[
                "top-0 left-0 border-t-2 border-l-2",
                "top-0 right-0 border-t-2 border-r-2",
                "bottom-0 left-0 border-b-2 border-l-2",
                "bottom-0 right-0 border-b-2 border-r-2",
              ].map((cls, i) => (
                <div
                  key={i}
                  className={`absolute w-6 h-6 border-primary/60 z-20 ${cls}`}
                  style={{ margin: "-1px" }}
                />
              ))}

              {/* Animated glow */}
              <motion.div
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent rounded-lg blur-xl scale-105"
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
                className="absolute -bottom-5 -left-5 bg-[hsl(214,30%,10%)] shadow-xl rounded-sm p-3 border border-primary/30 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-sm bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                  <span className="font-display text-lg font-bold text-primary leading-none text-center">4<br /><span className="text-[10px] font-body font-normal text-white/50">Devices</span></span>
                </div>
                <div>
                  <p className="text-[10px] font-body text-white/40 uppercase tracking-widest">by Cluederm</p>
                  <p className="text-sm font-display font-bold text-white">Complete Clinical <span className="text-primary">Platform</span></p>
                  <p className="text-[10px] font-body text-primary uppercase tracking-wider">Full Aesthetic Portfolio</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}