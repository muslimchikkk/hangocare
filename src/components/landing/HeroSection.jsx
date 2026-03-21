import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles, Sun } from "lucide-react";

// Floating petal/particle config with flowers & leaves
const PETALS = [
  { x: "8%", y: "12%", size: 12, delay: 0, duration: 7, shape: "flower" },
  { x: "85%", y: "8%", size: 12, delay: 1.2, duration: 6.5, shape: "leaf" },
  { x: "70%", y: "78%", size: 11, delay: 0.5, duration: 8.5, shape: "flower" },
  { x: "18%", y: "85%", size: 10.5, delay: 2, duration: 7.2, shape: "leaf" },
  { x: "92%", y: "52%", size: 9, delay: 0.8, duration: 7.8, shape: "flower" },
  { x: "42%", y: "2%", size: 9, delay: 1.5, duration: 6.8, shape: "leaf" },
  { x: "2%", y: "48%", size: 10, delay: 2.5, duration: 8.2, shape: "flower" },
  { x: "78%", y: "88%", size: 10.5, delay: 0.3, duration: 6.5, shape: "leaf" },
  { x: "25%", y: "30%", size: 8, delay: 1.8, duration: 7.5, shape: "flower" },
  { x: "65%", y: "15%", size: 9, delay: 2.2, duration: 6.8, shape: "leaf" },
  { x: "15%", y: "65%", size: 9, delay: 0.6, duration: 8, shape: "flower" },
  { x: "88%", y: "72%", size: 10.5, delay: 1.4, duration: 7.2, shape: "leaf" },
  { x: "35%", y: "58%", size: 12, delay: 0.9, duration: 7.8, shape: "leaf" },
  { x: "55%", y: "35%", size: 10, delay: 1.6, duration: 8.3, shape: "flower" },
  { x: "10%", y: "40%", size: 7, delay: 2.3, duration: 6.9, shape: "leaf" },
  { x: "75%", y: "28%", size: 9, delay: 0.4, duration: 7.6, shape: "flower" },
  { x: "48%", y: "72%", size: 7, delay: 1.1, duration: 7.3, shape: "leaf" },
  { x: "22%", y: "22%", size: 11, delay: 2.4, duration: 8, shape: "flower" },
  { x: "80%", y: "45%", size: 8, delay: 0.7, duration: 7.5, shape: "leaf" },
  { x: "38%", y: "8%", size: 9, delay: 1.9, duration: 8.1, shape: "flower" },
];

const HERO_WOMEN = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/2742fe782_generated_image.png";

export default function HeroSection() {
  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/60 rounded-full blur-3xl" />

      {/* Floating flowers & leaves */}
      {PETALS.map((p, i) => {
        const isFlower = p.shape === "flower";
        return (
          <motion.div
            key={i}
            style={{ position: "absolute", left: p.x, top: p.y }}
            animate={{ 
              y: [0, -22, 0], 
              x: [0, isFlower ? 8 : -6, isFlower ? -5 : 4, 0], 
              rotate: [0, isFlower ? 360 : -45, isFlower ? 180 : 90, 0], 
              opacity: [0.25, 0.8, 0.25] 
            }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            className="pointer-events-none"
          >
            {isFlower ? (
              // Flower shape
              <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="currentColor" className="text-primary/50" />
                {[0, 72, 144, 216, 288].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 12 + 8 * Math.cos(rad);
                  const y = 12 + 8 * Math.sin(rad);
                  return (
                    <ellipse key={angle} cx={x} cy={y} rx="3" ry="5" fill="currentColor" className="text-primary/60" transform={`rotate(${angle} ${x} ${y})`} />
                  );
                })}
              </svg>
            ) : (
              // Leaf shape
              <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 2C12 2 6 8 6 14C6 18.4183 8.68629 22 12 22C15.3137 22 18 18.4183 18 14C18 8 12 2 12 2Z" 
                  fill="currentColor" 
                  className="text-primary/50"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-primary/70"
                />
                <line x1="12" y1="4" x2="12" y2="18" stroke="currentColor" strokeWidth="0.5" className="text-primary/40" />
              </svg>
            )}
          </motion.div>
        );
      })}

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
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-body font-medium mb-6"
            >
              <Droplets className="w-3.5 h-3.5" />
              Hydrate · Exfoliate · Radiate
            </motion.div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-none">HanG.O</span>
              <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-primary leading-none">Care</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-foreground">
              The Ultimate{" "}
              <span className="text-primary italic">Face & Body</span>{" "}
              Experience
            </h1>

            <p className="mt-6 text-lg lg:text-xl font-body font-light text-muted-foreground leading-relaxed max-w-lg">
              HanG.O Care is a non-invasive, multifunctional face & body treatment system delivering deep exfoliation, skin rejuvenation, transdermal delivery, whitening, acne control, and full-body relaxation — visible results from the very first session.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToCta}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-full px-8 h-14 text-base group"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" })}
                className="font-body font-medium rounded-full px-8 h-14 text-base border-border hover:bg-secondary"
              >
                Explore Technology
              </Button>
            </div>

            {/* Pillars */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: Droplets, label: "AQUAPEEL" },
                { icon: Sparkles, label: "ELECTROPORATION" },
                { icon: Sun, label: "MICRO-CURRENT" },
              ].map(({ icon: IconComp, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <IconComp className="w-4 h-4 text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              {/* Animated glow blobs */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/40 rounded-3xl blur-2xl scale-105"
              />
              <motion.div
                animate={{ scale: [1.05, 1, 1.05], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 w-48 h-48 bg-primary/15 rounded-full blur-2xl"
              />

              {/* Floating particles */}
              {[
                { top: "15%", left: "8%", delay: 0 },
                { top: "70%", left: "5%", delay: 1 },
                { top: "30%", right: "6%", delay: 0.5 },
                { top: "80%", right: "10%", delay: 1.5 },
                { top: "50%", left: "50%", delay: 2 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  style={{ position: "absolute", ...pos, width: 8, height: 8 }}
                  animate={{ y: [0, -14, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
                  className="rounded-full bg-primary/40"
                />
              ))}

              {/* Main image with subtle float */}
              <motion.img
                src={HERO_WOMEN}
                alt="AQUAPURE — radiant skin results"
                className="relative w-full rounded-3xl shadow-2xl"
                loading="eager"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Shimmer overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              />

              {/* Brand badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card shadow-xl rounded-2xl p-3 border border-border/50 flex items-center gap-3"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-lg font-bold text-primary leading-none text-center">4<br/><span className="text-xs font-body font-normal">Devices</span></span>
                </div>
                <div>
                  <p className="text-xs font-body text-muted-foreground">By Cluederm</p>
                  <p className="text-sm font-display font-bold text-foreground">Complete <span className="font-script text-lg text-primary">Care</span></p>
                  <p className="text-xs font-body text-primary">Full Aesthetic Portfolio</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}