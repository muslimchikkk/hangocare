import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, RotateCcw } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Limited Offer
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Ready for Your{" "}
            <span className="italic text-primary">Best Skin Ever?</span>
          </h2>
          <p className="mt-5 text-lg font-body font-light text-muted-foreground max-w-xl mx-auto">
            Join 50,000+ women who've transformed their skincare routine. Get 40% off today with free shipping.
          </p>

          {/* Pricing */}
          <div className="mt-10 inline-flex items-baseline gap-3">
            <span className="font-body text-lg text-muted-foreground line-through">$299</span>
            <span className="font-display text-5xl lg:text-6xl font-bold text-foreground">$179</span>
          </div>
          <p className="mt-2 text-sm font-body text-primary font-medium">
            Save $120 — Sale ends soon
          </p>

          <Button
            size="lg"
            className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold rounded-full px-12 h-16 text-lg group shadow-xl shadow-primary/20"
          >
            Claim Your 40% Off
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, label: "90-Day Guarantee" },
              { icon: Truck, label: "Free Shipping" },
              { icon: RotateCcw, label: "Hassle-Free Returns" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                <badge.icon className="w-4 h-4 text-primary" />
                {badge.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}