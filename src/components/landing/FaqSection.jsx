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
    q: "What is the Cluederm device portfolio?",
    a: "Cluederm offers four clinical-grade aesthetic devices: AQUAPURE II (multifunctional face & body hydro system), SECRET DUO (fractional laser + RF), VOLNEWMER (monopolar RF lifting), and SCIZER (HIFU body contouring). Each device targets a distinct set of aesthetic concerns, allowing clinics to offer a complete non-invasive treatment menu.",
  },
  {
    q: "What does AQUAPURE II do?",
    a: "AQUAPURE II is an 8-in-1 face and body treatment system. It combines AQUAPEEL deep exfoliation and extraction, ELECTROPORATION for transdermal delivery and skin whitening, MICRO-CURRENT facial lifting, and COOLING/HEATING skin relaxation. It delivers immediate visible results from the very first session and is suitable for all skin types.",
  },
  {
    q: "What is SECRET DUO and who is it for?",
    a: "SECRET DUO combines two non-ablative fractional technologies: micro-needle RF for deep dermal remodeling and collagen induction, and a 1540nm erbium glass laser for skin resurfacing and pigment correction. Both can be used independently or together for customized treatment protocols with significantly reduced downtime compared to ablative lasers.",
  },
  {
    q: "How does VOLNEWMER tighten the skin?",
    a: "VOLNEWMER uses monopolar radiofrequency energy delivered via a curved surface tip to safely heat the deep dermis and stimulate collagen remodeling. Its continuous water cooling system protects the epidermis while delivering high-level RF energy, making it the safest non-invasive option for face and body lifting.",
  },
  {
    q: "What areas can SCIZER treat?",
    a: "SCIZER uses powerful HIFU ultrasound energy to permanently destroy subcutaneous fat cells in areas such as the abdomen, lower abdomen, flanks, and love handles. Its Slim D13 handpiece reaches 13mm depth for effective body contouring without surgery, downtime, or discomfort.",
  },
  {
    q: "Are these treatments safe for all skin types?",
    a: "Yes. All four Cluederm devices are designed for diverse skin profiles. AQUAPURE II is suitable for sensitive, acne-prone, and aging skin. SECRET DUO's non-ablative approach minimizes risk across skin tones. VOLNEWMER's cooling system ensures epidermal safety, and SCIZER targets fat tissue without affecting the skin surface.",
  },
  {
    q: "How quickly can patients expect results?",
    a: "AQUAPURE II delivers immediate visible radiance after the first session. SECRET DUO and VOLNEWMER show progressive improvement over 4–6 sessions as collagen remodeling occurs. SCIZER results typically appear within 8–12 weeks as the body naturally clears destroyed fat cells.",
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