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
    q: "What is AQUAPURE and how does it work?",
    a: "AQUAPURE is a non-invasive, multifunctional facial care device by Cluederm. It uses four specialized handpieces — AQUAPEEL, ELECTROPORATION, MICRO-CURRENT, and COOLING/HEATING — to treat a variety of skin conditions across diverse skin profiles, delivering immediate visible results.",
  },
  {
    q: "What skin conditions does AQUAPURE treat?",
    a: "AQUAPURE effectively treats acne-prone skin, sensitive skin, anti-aging concerns, pigmentation, excess sebum, blackheads, and more. Its multi-program system is customizable to each patient's specific skin type and condition.",
  },
  {
    q: "Is it safe for all skin types?",
    a: "Yes. AQUAPURE is designed for patients with diverse skin profiles. The ELECTROPORATION handpiece transfers controlled stimulation without signs of irritation, and the COOLING/HEATING mode desensitizes and soothes skin during and after treatment.",
  },
  {
    q: "What are the AQUASOLUTION products?",
    a: "AQUASOLUTION includes PEEL+ for exfoliation, SEBO+ for sebum and pore control, REJUVE+ for collagen/elastin regeneration and hydration, and CLEANSYS for device maintenance. Each solution uses Hyaluronic Acid, Peptide Complex, Seaweed Complex, Propolis Extract, and Centella Asiatica TECA.",
  },
  {
    q: "Can AQUAPURE be used on the body and scalp?",
    a: "Absolutely. AQUAPURE offers head-to-toe treatment. The scalp application promotes hair growth and scalp health, while body treatment exfoliates skin, removes impurities, and helps control acne and pigmentation using specialized wider and balance tips.",
  },
  {
    q: "How soon do patients see results?",
    a: "Many patients see visible improvement immediately post-treatment. For anti-aging programs, measurable skin firming and fine line reduction are typically observed after 4 sessions of consistent treatment.",
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
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Questions?{" "}
            <span className="italic text-primary">Answered.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
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