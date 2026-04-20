import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import { useTranslation } from "react-i18next";

// Non-translatable static data (images, structure)
const deviceMeta = {
  "veloce-4800": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/7f85ed987_ChatGPTImageApr6202609_02_24PM.png",
    clinicalGraphics: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6cf65161f_Screenshot2026-04-05at100514.png",
  },
  "ultraformer-mpt": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/617caf10f_ChatGPTImageApr20202611_12_44PM.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e09db1435_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/154379072_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/da970045c_generated_image.png",
    ],
  },
  "fraxis-duo": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/fd362d670_ChatGPTImageApr11202611_58_35AM.png",
    handpieceImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/9189daab1_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a79f03270_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/f7ff870f4_generated_image.png",
    ],
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/88250c8a0_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/465ff3cea_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6ca44bc78_generated_image.png",
    ],
  },
  "volnewmer": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/4e3af0373_volnewmer_cut05_.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/9915b4042_Screenshot2026-04-11at213442.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6d76897f4_Screenshot2026-04-11at211939.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b7b7b421b_Screenshot2026-04-11at212214.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b59529e97_Screenshot2026-04-11at212423.png",
    ],
  },
  "curas": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/441ea4734_Gemini_Generated_Image_ficyxzficyxzficy.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/d21d5db44_generated_image.png",
    ],
    handpieceImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/c69ef2a64_Screenshot2026-04-11at213705.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/09eba5776_Screenshot2026-04-11at213912.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/9eef4a0ac_Untitleddesign.png",
    ],
  },
  "secret-rf": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dcac82341_ChatGPTImageApr19202611_05_55AM.png",
    clinicalGraphics: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/66b738edd_Screenshot2026-04-11at214958.png",
    handpieceImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/32acb55d5_Screenshot2026-04-11at214710.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/8c692ee70_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/5bdbf554e_generated_image.png",
    ],
  },
  "secret-duo": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a3e43fdf3_secret_duo_2p.png",
    handpieceImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/32acb55d5_Screenshot2026-04-11at214710.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/5bdbf554e_generated_image.png",
    ],
  },
  "ultraformer-iii": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/2f872d977_ChatGPTImageApr20202611_25_24PM.png",
    clinicalGraphics: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/47265081e_Screenshot2026-04-11at215637.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/0eb2e724f_Screenshot2026-04-11at215333.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/c8ac20ebb_Screenshot2026-04-11at215455.png",
    ],
  },
  "pento": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/bf5734eb9_ChatGPTImageApr20202611_17_01PM.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/d71714e17_Screenshot2026-04-11at215933.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/afb2d1686_Screenshot2026-04-11at220027.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/c8d41c266_Screenshot2026-04-11at220134.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/09c8d0e05_Screenshot2026-04-11at220232.png",
    ],
  },
  "ncore": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/8e08eccb5_ChatGPTImageApr19202611_00_19AM.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/ff71cefe9_Screenshot2026-04-11at220347.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6ddfd3fb2_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/f087799eb_generated_image.png",
    ],
  },
  "aquapure-ii": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/9aebc867e_generated_image.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/ce76e233d_Screenshot2026-04-11at220629.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a5945574b_Screenshot2026-04-11at220728.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/ccc1969ac_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/1958fb30a_generated_image.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/acda1b1a6_Screenshot2026-04-11at220854.png",
    ],
  },
  "clatuu-alpha": {
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/cfa646f7c_ChatGPTImageApr19202611_03_52AM.png",
    clinicalFeatureImages: [
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/1fe6bf6fb_Screenshot2026-04-11at221356.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/d624f40c8_Screenshot2026-04-11at221731.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/17fe2e1f1_Screenshot2026-04-11at221815.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b8cae12c5_Screenshot2026-04-11at221618.png",
      "https://media.base44.com/images/public/69be488f616a63ca33a2e564/9ef3c4c16_Screenshot2026-04-11at221923.png",
    ],
  },
};

export default function DeviceDetail() {
  const { t } = useTranslation();
  const { deviceId } = useParams();
  const meta = deviceMeta[deviceId];

  // All text content comes from translations
  const d = t(`devices.${deviceId}`, { returnObjects: true });

  if (!meta || !d || typeof d === "string") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{t("device_detail.not_found")}</p>
            <Link to="/"><Button>{t("device_detail.back")}</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const clinicalFeatures = Array.isArray(d.clinicalFeatures) ? d.clinicalFeatures : [];
  const handpieces = Array.isArray(d.handpieces) ? d.handpieces : [];
  const clinicalTerms = Array.isArray(d.clinicalTerms) ? d.clinicalTerms : [];
  const modalities = Array.isArray(d.modalities) ? d.modalities : [];
  const indications = Array.isArray(d.indications) ? d.indications : [];
  const specs = Array.isArray(d.specs) ? d.specs : [];

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-0 border-b border-border/20" style={{ backgroundColor: 'rgb(234 240 239 / 50%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-0">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t("device_detail.back")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pb-16"
            >
              <span className="text-xs font-body font-semibold text-primary uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-sm">
                {d.tag}
              </span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {d.name}
              </h1>
              <p className="mt-2 font-grotesk text-lg text-primary font-semibold">{d.subtitle}</p>
              <p className="mt-5 text-base lg:text-lg font-body font-light text-foreground/60 leading-relaxed max-w-lg">
                {d.overview}
              </p>
              <Button
                size="lg"
                className="mt-8 bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-sm px-8 h-12"
                onClick={() => window.location.href = "/#cta"}
              >
                {t("device_detail.request_info")}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[420px] flex items-end justify-center"
            >
              <img
                src={meta.image}
                alt={d.name}
                className="max-h-[420px] w-full object-contain object-bottom"
                style={{ objectPosition: "bottom center" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: Mechanism + Features + Handpieces + Modalities + Indications */}
            <div className="lg:col-span-2 space-y-14">

              {d.mechanism && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    {t("device_detail.mechanism")}
                  </h2>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {d.mechanism}
                  </p>
                </motion.div>
              )}

              {clinicalFeatures.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    {t("device_detail.key_features")}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5 mb-8">
                    {clinicalFeatures.map((f, i) => (
                      <div key={i} className="bg-secondary/60 rounded-2xl overflow-hidden border border-border/40 flex flex-col">
                        {meta.clinicalFeatureImages?.[i] && (
                          <div className="bg-white h-40 flex items-center justify-center p-4">
                            <img src={meta.clinicalFeatureImages[i]} alt={f.title} className="h-full w-full object-contain" />
                          </div>
                        )}
                        <div className="p-5">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="w-7 h-7 rounded-full bg-primary/15 text-primary font-display font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                            <p className="font-display text-sm font-bold text-foreground">{f.title}</p>
                          </div>
                          <p className="font-body text-sm text-muted-foreground leading-relaxed pl-10">{f.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {clinicalTerms.length > 0 && (
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                      <p className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-3">{t("device_detail.terminology")}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {clinicalTerms.map((term) => (
                          <div key={term.abbr} className="font-body text-sm text-foreground/80">
                            <span className="font-semibold text-foreground">{term.abbr}</span>: {term.def}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {handpieces.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    {t("device_detail.handpieces")}
                  </h2>
                  <div className="space-y-6">
                    {handpieces.map((h, i) => (
                      <div key={i} className="bg-secondary/60 rounded-2xl overflow-hidden border border-border/40">
                        <div className="grid sm:grid-cols-3 gap-0">
                          <div className="bg-white flex items-center justify-center p-6 sm:rounded-l-2xl">
                            <img src={meta.handpieceImages?.[i]} alt={h.title} className="h-36 w-full object-contain" />
                          </div>
                          <div className="sm:col-span-2 p-6">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="w-7 h-7 rounded-full bg-primary/15 text-primary font-display font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                              <p className="font-display text-base font-bold text-foreground">{h.title}</p>
                            </div>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 pl-10">{h.description}</p>
                            {Array.isArray(h.specs) && (
                              <div className="space-y-2 pl-10">
                                {h.specs.map((s) => (
                                  <div key={s.label} className="text-sm">
                                    <span className="font-semibold text-primary">{s.label}: </span>
                                    <span className="text-foreground/70">{s.value}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {meta.clinicalGraphics && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    {t("device_detail.clinical_diagrams")}
                  </h2>
                  <div className="rounded-2xl overflow-hidden border border-border/40 bg-white">
                    <img src={meta.clinicalGraphics} alt="Clinical performance diagrams" className="w-full object-contain" />
                  </div>
                </motion.div>
              )}

              {modalities.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    {t("device_detail.modalities")}
                  </h2>
                  <ul className="space-y-3">
                    {modalities.map((m, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        <span className="font-body text-sm text-foreground/80 leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {indications.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    {t("device_detail.indications")}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {indications.map((ind, i) => (
                      <div key={i} className="flex gap-2 items-start bg-secondary/60 rounded-xl px-4 py-3">
                        <span className="text-primary mt-0.5 text-sm">·</span>
                        <span className="font-body text-sm text-foreground/80">{ind}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>

            {/* Right: Specs */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-secondary/50 rounded-2xl p-7 border border-border/60 sticky top-24">
                <h2 className="font-display text-xl font-bold text-foreground mb-5">
                  {t("device_detail.specs")}
                </h2>
                <div className="space-y-4">
                  {specs.map((s) => (
                    <div key={s.label} className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
                      <p className="text-xs font-body font-semibold text-primary uppercase tracking-wider mb-0.5">{s.label}</p>
                      <p className="font-body text-sm text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-sm"
                    onClick={() => window.location.href = "/#cta"}
                  >
                    {t("device_detail.request_datasheet")}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta-contact" className="py-16 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            {t("device_detail.cta_heading", { name: d.name })}
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            {t("device_detail.cta_desc")}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-full px-12 h-14"
            onClick={() => window.location.href = "/#cta"}
          >
            {t("device_detail.cta_button")}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}