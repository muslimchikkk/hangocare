import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How soon will I see results?",
    a: "Most users notice a visible glow and smoother skin texture within 14 days of consistent daily use. Full results, including reduced fine lines and improved firmness, are typically seen after 6–8 weeks.",
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "Absolutely. Lumière was developed alongside board-certified dermatologists and has been tested on all skin types, including sensitive and acne-prone skin. It's completely non-invasive and pain-free.",
  },
  {
    q: "How does the 90-day guarantee work?",
    a: "If you don't love your results within 90 days, simply contact our support team for a full refund — no questions asked. We'll even cover return shipping.",
  },
  {
    q: "What's included in the box?",
    a: "Your Lumière kit includes the device, a USB-C charging cable, a premium travel pouch, a quick-start guide, and a complimentary 30-day supply of our Activation Serum.",
  },
  {
    q: "Can I use it with my existing skincare products?",
    a: "Yes! Lumière works beautifully with your favorite serums and moisturizers. In fact, our sonic massage mode helps your products absorb up to 4x more effectively.",
  },
  {
    q: "How long does the battery last?",
    a: "A full charge lasts approximately 30 days of daily 5-minute sessions. The device charges in under 2 hours via USB-C.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Questions? <span className="italic text-primary">Answered.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border/60 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}