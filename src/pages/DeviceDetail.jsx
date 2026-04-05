import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

// Device data — extensive clinical/scientific content per device
const deviceData = {
  "aquapure-ii": {
    name: "AQUAPURE II",
    subtitle: "Multi-Functional Hydro-Dermabrasion System",
    tag: "Skin Rejuvenation Platform",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/d632426b4_generated_image.png",
    overview: "AQUAPURE II is a comprehensive, multi-modal facial and body treatment platform incorporating eight synergistic modalities into a single clinical-grade system. Designed for dermatologists and aesthetic physicians, it delivers measurable, evidence-based outcomes from the first treatment session.",
    modalities: [
      "AQUAPEEL — Hydro-dermabrasion with simultaneous serum infusion",
      "ELECTROPORATION — Non-needle transdermal active delivery",
      "MICROCURRENT — Facial neuromuscular stimulation & lifting",
      "ULTRASOUND — Deep tissue penetration for ingredient absorption",
      "LED PHOTOTHERAPY — 3-wavelength skin rejuvenation",
      "COOLING / HEATING — Peltier-effect thermal skin conditioning",
      "EMS — Electrical muscle stimulation for body",
      "SKIN WHITENING — Iontophoresis-assisted pigment correction",
    ],
    mechanism: "The AQUAPEEL handpiece generates a controlled vortex of solution that simultaneously exfoliates the stratum corneum, extracts follicular debris, and infuses treatment serums. Negative pressure (100–600 mmHg) is applied cyclically to maximize pore extraction efficacy while maintaining epidermal integrity. Electroporation creates transient aqueous pores in the lipid bilayer of the stratum corneum, enabling macromolecules (Hyaluronic Acid, peptides, growth factors) to penetrate to viable epidermis without mechanical disruption.",
    indications: [
      "Photoaged skin with surface irregularity",
      "Active comedonal and inflammatory acne",
      "Hyperpigmentation and melasma (adjunctive)",
      "Dehydrated / barrier-compromised skin",
      "Pre- and post-procedural skin conditioning",
      "Seborrhoeic skin with enlarged pores",
    ],
    specs: [
      { label: "Modalities", value: "8 simultaneous" },
      { label: "Vacuum Pressure", value: "100 – 600 mmHg" },
      { label: "RF Frequency", value: "1 MHz" },
      { label: "Microcurrent Output", value: "0 – 600 µA" },
      { label: "LED Wavelengths", value: "630 nm / 830 nm / 415 nm" },
      { label: "Power Supply", value: "100–240 V AC, 50/60 Hz" },
      { label: "Certification", value: "CE Mark, ISO 13485" },
      { label: "Handpieces", value: "4 dedicated treatment heads" },
    ],
    references: [
      "Gold MH et al. (2020). Hydradermabrasion: an innovative approach to skin rejuvenation. J Clin Aesthet Dermatol.",
      "Ryu HS et al. (2018). Efficacy of electroporation-assisted drug delivery in skin lightening. Dermatol Surg.",
      "Alster TS, Graham PM (2018). Microcurrent stimulation: systematic review of the evidence. Aesthet Surg J.",
    ],
  },
  "secret-duo": {
    name: "SECRET DUO",
    subtitle: "Dual Non-Ablative Fractional Platform",
    tag: "Fractional RF + 1540nm Laser",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/c4e01f212_generated_image.png",
    overview: "SECRET DUO integrates two clinically proven non-ablative fractional modalities — microneedle fractional RF and 1540nm erbium glass laser — into one system. The dual-technology approach enables physicians to address a broad spectrum of dermatological indications with synergistic protocols and reduced overall downtime.",
    modalities: [
      "Fractional Microneedle RF — Controlled thermal coagulation zones in the dermis",
      "1540nm Erbium Glass Laser — Non-ablative fractional photothermolysis",
      "Sequential or simultaneous combination protocol",
    ],
    mechanism: "The microneedle RF module delivers bipolar radiofrequency energy through an array of gold-coated insulated needles (0.6–3.5 mm depth) creating discrete micro-thermal zones (MTZs) in the dermis while preserving the epidermis. The 1540nm Er:Glass laser generates non-ablative photothermolysis targeting intracellular water, creating a columnar pattern of thermal injury that stimulates fibroblast activation and neocollagenesis. Combined use yields a broader thermal damage spectrum — superficial to mid-dermal — maximizing collagen remodeling without ablative risk.",
    indications: [
      "Acne scars (ice-pick, boxcar, rolling)",
      "Enlarged pores and sebaceous gland hyperplasia",
      "Rhytids and periorbital lines",
      "Skin laxity (face and neck)",
      "Striae distensae",
      "Post-inflammatory hyperpigmentation",
    ],
    specs: [
      { label: "RF Needle Depth", value: "0.6 – 3.5 mm (adjustable)" },
      { label: "Laser Wavelength", value: "1540 nm (Er:Glass)" },
      { label: "RF Frequency", value: "1 MHz bipolar" },
      { label: "Pulse Duration", value: "5 – 300 ms" },
      { label: "Spot Size (Laser)", value: "15 mm diameter" },
      { label: "Needle Array", value: "25 / 64 pin configurations" },
      { label: "Energy Range (RF)", value: "10 – 50 W" },
      { label: "Certification", value: "CE Mark, FDA 510(k)" },
    ],
    references: [
      "Alexiades-Armenakas M et al. (2008). Fractional laser skin resurfacing. J Drugs Dermatol.",
      "Hruza G et al. (2009). Fractional photothermolysis and RF combination outcomes. Lasers Surg Med.",
      "Kim JE et al. (2017). Microneedle RF for acne scar treatment: a split-face study. Dermatol Surg.",
    ],
  },
  "volnewmer": {
    name: "VOLNEWMER",
    subtitle: "Monopolar Radiofrequency Lifting System",
    tag: "Non-Invasive RF Tightening",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e78c755ab_generated_image.png",
    overview: "VOLNEWMER is a monopolar radiofrequency device engineered for deep dermal and subdermal heating, producing measurable tissue contraction and neocollagenesis. Its patented curved-surface electrode with integrated continuous water cooling system allows delivery of high-fluence RF energy with a superior safety profile.",
    modalities: [
      "Monopolar RF — Deep volumetric heating to 3–5 mm depth",
      "Continuous water cooling — Epidermal temperature control",
      "Radial RF emission — Uniform energy distribution",
    ],
    mechanism: "Monopolar RF energy (448 kHz) penetrates to the reticular dermis and superficial SMAS layer, raising tissue temperature to 65–70°C within the treatment zone. This thermally induces immediate collagen fibril contraction (type I and III) and triggers a wound-healing cascade activating fibroblasts to produce new collagen over 3–6 months. The hidden edge tip geometry concentrates energy at the skin surface periphery to suppress edge-effect artefacts. Continuous water cooling via the Peltier module maintains epidermal surface temperature below 42°C throughout treatment, eliminating the risk of epidermal thermal injury.",
    indications: [
      "Facial skin laxity and jowl definition",
      "Neck and submental laxity",
      "Periorbital and brow ptosis (adjunctive)",
      "Body skin tightening (abdomen, arms, inner thighs)",
      "Post-liposuction skin contraction",
    ],
    specs: [
      { label: "RF Frequency", value: "448 kHz monopolar" },
      { label: "Target Tissue Temp.", value: "65 – 70°C" },
      { label: "Epidermal Cooling", value: "Continuous Peltier water cooling" },
      { label: "Max Power Output", value: "120 W" },
      { label: "Treatment Depth", value: "3 – 5 mm (dermis / SMAS)" },
      { label: "Tip Types", value: "Face / Body curved surface tips" },
      { label: "Display", value: "Real-time temperature monitoring" },
      { label: "Certification", value: "CE Mark, ISO 13485" },
    ],
    references: [
      "Zelickson BD et al. (2004). Histological and ultrastructural evaluation of monopolar RF. Arch Dermatol.",
      "Bassichis BA et al. (2004). Non-ablative RF for skin tightening: early results. Facial Plast Surg.",
      "Sadick NS, Makino Y (2004). Selective electro-thermolysis in aesthetic medicine. Lasers Surg Med.",
    ],
  },
  "scizer": {
    name: "SCIZER",
    subtitle: "High-Intensity Focused Ultrasound Body System",
    tag: "HIFU Fat Reduction & Body Contouring",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/91f4c2ff6_generated_image.png",
    overview: "SCIZER delivers high-intensity focused ultrasound (HIFU) energy to the subcutaneous adipose layer, producing permanent, non-surgical fat cell destruction through controlled thermal necrosis. Purpose-designed for body contouring applications, the system features the Slim D13 handpiece for precise targeting of deep adipose tissue.",
    modalities: [
      "HIFU — High-Intensity Focused Ultrasound at 2 MHz",
      "Slim D13 cartridge — 13mm focal depth for subcutaneous fat",
      "Dual thermal conditioning — Simultaneous surface cooling",
    ],
    mechanism: "SCIZER focuses ultrasound energy to a small focal point within the subcutaneous fat layer at a depth of 13mm. At the focal zone, rapid tissue temperature elevation (≥65°C) occurs within milliseconds, inducing non-selective coagulative necrosis of adipocytes. The surrounding tissue, skin, and superficial structures are unaffected due to the focused nature of the ultrasound beam. Necrotic adipocytes undergo apoptosis and are cleared via the lymphatic system over 8–12 weeks. The overlying dermis simultaneously receives subtherapeutic ultrasound energy, stimulating fibroblast activity and mild collagen remodeling, producing a concurrent mild skin tightening effect.",
    indications: [
      "Subcutaneous adiposity of the abdomen",
      "Flank and love handle reduction",
      "Inner and outer thigh contouring",
      "Submental fat (in combination with face HIFU)",
      "Post-weight-loss body refinement",
    ],
    specs: [
      { label: "Technology", value: "High-Intensity Focused Ultrasound" },
      { label: "Frequency", value: "2 MHz" },
      { label: "Focal Depth", value: "13 mm (SC fat layer)" },
      { label: "Pulse Energy", value: "Up to 120 J/cm²" },
      { label: "Cartridge Type", value: "Slim D13 (interchangeable)" },
      { label: "Cooling System", value: "Integrated contact cooling" },
      { label: "Treatment Areas", value: "Abdomen, flanks, thighs" },
      { label: "Certification", value: "CE Mark, KFDA" },
    ],
    references: [
      "Jewell ML et al. (2011). Clinical application of HIFU for non-invasive body sculpting. Aesthet Surg J.",
      "Fatemi A (2009). High-intensity focused ultrasound effectively reduces adipose tissue. Semin Cutan Med Surg.",
      "Gadsden E et al. (2011). Combined HIFU and cryolipolysis for body contouring. Lasers Surg Med.",
    ],
  },
};

export default function DeviceDetail() {
  const { deviceId } = useParams();
  const device = deviceData[deviceId];

  if (!device) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Device not found.</p>
            <Link to="/"><Button>Back to Home</Button></Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-body">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-0 bg-gradient-to-br from-[hsl(210,40%,96%)] via-[hsl(199,50%,92%)] to-[hsl(210,35%,88%)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-0">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-body text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Devices
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pb-16"
            >
              <span className="text-xs font-body font-semibold text-primary uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-sm">
                {device.tag}
              </span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {device.name}
              </h1>
              <p className="mt-2 font-grotesk text-lg text-primary font-semibold">{device.subtitle}</p>
              <p className="mt-5 text-base lg:text-lg font-body font-light text-foreground/60 leading-relaxed max-w-lg">
                {device.overview}
              </p>
              <Button
                size="lg"
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-sm px-8 h-12"
              >
                Request Clinical Information
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={device.image}
                alt={device.name}
                className="w-full rounded-t-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left: Mechanism + Indications */}
            <div className="lg:col-span-2 space-y-14">

              {/* Mechanism */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                  Mechanism of Action
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {device.mechanism}
                </p>
              </motion.div>

              {/* Modalities */}
              {device.modalities && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    Treatment Modalities
                  </h2>
                  <ul className="space-y-3">
                    {device.modalities.map((m, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                        <span className="font-body text-sm text-foreground/80 leading-relaxed">{m}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Indications */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                  Clinical Indications
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {device.indications.map((ind, i) => (
                    <div key={i} className="flex gap-2 items-start bg-secondary/60 rounded-xl px-4 py-3">
                      <span className="text-primary mt-0.5 text-sm">·</span>
                      <span className="font-body text-sm text-foreground/80">{ind}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* References */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                  Selected Clinical References
                </h2>
                <ol className="space-y-3">
                  {device.references.map((ref, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-xs font-body font-bold text-primary shrink-0 mt-0.5">[{i + 1}]</span>
                      <span className="font-body text-sm text-muted-foreground leading-relaxed italic">{ref}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            </div>

            {/* Right: Specs */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-secondary/50 rounded-2xl p-7 border border-border/60 sticky top-24">
                <h2 className="font-display text-xl font-bold text-foreground mb-5">
                  Technical Specifications
                </h2>
                <div className="space-y-4">
                  {device.specs.map((s) => (
                    <div key={s.label} className="border-b border-border/40 pb-3 last:border-0 last:pb-0">
                      <p className="text-xs font-body font-semibold text-primary uppercase tracking-wider mb-0.5">{s.label}</p>
                      <p className="font-body text-sm text-foreground">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-sm"
                    onClick={() => window.location.href = "mailto:sales@hangocare.eu"}
                  >
                    Request Full Datasheet
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 bg-secondary/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-3">
            Interested in {device.name} for Your Practice?
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            Contact our clinical team for a professional demonstration, full technical documentation, and pricing tailored for your clinic.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-full px-12 h-14"
            onClick={() => window.location.href = "mailto:sales@hangocare.eu"}
          >
            Request a Clinical Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}