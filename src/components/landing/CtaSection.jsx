import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";

export default function CtaSection() {
  const [form, setForm] = useState({ name: "", email: "", clinic: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await base44.integrations.Core.SendEmail({
      to: "sales@hangocare.eu",
      subject: `Contact form: ${form.name} — ${form.clinic}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nClinic: ${form.clinic}\n\nMessage:\n${form.message}`,
    });
    setStatus("sent");
  };

  return (
    <section id="cta" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-body font-semibold text-primary uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-sm">
            For Clinics & Medical Professionals
          </span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Contact <span className="text-primary italic">Us</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            Fill in the form and our clinical team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-card border border-border/60 rounded-2xl p-8 shadow-sm"
        >
          {status === "sent" ? (
            <div className="text-center py-10">
              <p className="font-display text-2xl font-bold text-foreground mb-2">Thank you!</p>
              <p className="font-body text-muted-foreground">We'll be in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">Full Name *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Dr. Jane Smith"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="doctor@clinic.com"
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">Clinic / Practice</label>
                <input
                  name="clinic"
                  value={form.clinic}
                  onChange={handleChange}
                  placeholder="Aesthetic Clinic Prague"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your practice and which devices you're interested in..."
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-lg h-12"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}