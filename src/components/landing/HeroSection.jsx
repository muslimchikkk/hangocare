import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Zap } from "lucide-react";

const HERO_IMAGE = "/__generating__/img_76dfe83c57c0.png";

export default function HeroSection() {
  const scrollToCta = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-accent">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
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
              <Zap className="w-3.5 h-3.5" />
              Limited Time — 40% Off
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Radiance,{" "}
              <span className="text-primary italic">Redefined</span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl font-body font-light text-muted-foreground leading-relaxed max-w-lg">
              Professional-grade skin rejuvenation in the comfort of your home.
              Clinically proven to restore your natural glow in just 4 weeks.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToCta}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-full px-8 h-14 text-base group"
              >
                Get Yours Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
                className="font-body font-medium rounded-full px-8 h-14 text-base border-border hover:bg-secondary"
              >
                Learn More
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm font-body text-muted-foreground">4.9/5 (2,847 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                90-day guarantee
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl blur-2xl scale-105" />
              <img
                src={HERO_IMAGE}
                alt="Lumière beauty device with rose gold finish"
                className="relative w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
                loading="eager"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-card shadow-xl rounded-2xl px-5 py-3 border border-border/50"
              >
                <p className="text-xs font-body text-muted-foreground">Sold out 3x</p>
                <p className="text-lg font-display font-bold text-foreground">50,000+</p>
                <p className="text-xs font-body text-muted-foreground">Happy customers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}