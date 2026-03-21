import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Sparkles, Sun } from "lucide-react";

const HERO_WOMEN = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/af863d221_generated_image.png";
const HERO_DEVICE = "https://media.base44.com/images/public/69be488f616a63ca33a2e564/73ba438d0_generated_image.png";

export default function HeroSection() {
  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/60 rounded-full blur-3xl" />

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

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              The Ultimate{" "}
              <span className="text-primary italic">Face & Body</span>{" "}
              Experience
            </h1>

            <p className="mt-6 text-lg lg:text-xl font-body font-light text-muted-foreground leading-relaxed max-w-lg">
              AQUAPURE II is a non-invasive, multifunctional face & body treatment system delivering deep exfoliation, skin rejuvenation, transdermal delivery, whitening, acne control, and full-body relaxation — visible results from the very first session.
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

              {/* Device badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card shadow-xl rounded-2xl p-3 border border-border/50 flex items-center gap-3"
              >
                <img src={HERO_DEVICE} alt="AQUAPURE device" className="w-14 h-14 rounded-xl object-cover" />
                <div>
                  <p className="text-xs font-body text-muted-foreground">By Cluederm</p>
                  <p className="text-sm font-display font-bold text-foreground">AQUAPURE</p>
                  <p className="text-xs font-body text-primary">4-in-1 Technology</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}