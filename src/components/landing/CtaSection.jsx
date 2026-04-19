import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
import { useTranslation } from "react-i18next";

export default function CtaSection() {
  const { t } = useTranslation();
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
    <section id="cta" className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
            {t("cta.label")}
          </span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            {t("cta.heading")} <span className="text-primary italic">{t("cta.heading_highlight")}</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            {t("cta.description")}
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
              <p className="font-display text-2xl font-bold text-foreground mb-2">{t("cta.thank_you")}</p>
              <p className="font-body text-muted-foreground">{t("cta.thank_you_desc")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">{t("cta.field_name")} *</label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("cta.field_name_placeholder")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">{t("cta.field_email")} *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("cta.field_email_placeholder")}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">{t("cta.field_clinic")}</label>
                <input
                  name="clinic"
                  value={form.clinic}
                  onChange={handleChange}
                  placeholder={t("cta.field_clinic_placeholder")}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>

              <div>
                <label className="block text-xs font-body font-semibold text-foreground/70 uppercase tracking-wider mb-1.5">{t("cta.field_message")} *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("cta.field_message_placeholder")}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-lg h-12"
              >
                {status === "sending" ? t("cta.sending") : t("cta.send")}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}