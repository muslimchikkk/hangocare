import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Skincare Enthusiast",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/0c9d4c685_generated_d3980922.png",
    text: "I was skeptical at first, but after two weeks my skin felt completely different. My fine lines around the eyes are visibly reduced and my skin glows naturally. I'm obsessed.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Wellness Coach",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/036459ff0_generated_c8aff843.png",
    text: "As someone who recommends wellness products for a living, I don't endorse lightly. Lumière is the real deal — professional results without the professional price tag.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Busy Mom of Three",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/8955b07aa_generated_007df88c.png",
    text: "Five minutes is all I have for myself each day, and Lumière makes every second count. My skin hasn't looked this good since my twenties. A total game-changer.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Loved by <span className="italic text-primary">Thousands</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-card border border-border/60 rounded-2xl p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-border/60">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}