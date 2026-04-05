import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const devices = [
  {
    id: "veloce-4800",
    name: "VELOCE 4800",
    category: "Broadband Light Technology",
    tag: "IPL / Broadband Light",
    color: "bg-sky-50 border-sky-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/bf26ed841_Screenshot2026-04-05at93758.png",
    shortDesc: "Dual xenon lamp broadband light system penetrating deep skin layers at low energy, effective for a wide range of skin conditions.",
    highlights: ["IPDL Technology", "Dual Xenon", "Multi-filter"],
  },
  {
    id: "ultraformer-mpt",
    name: "ULTRAFORMER MPT",
    category: "Bidirectional Circular & Linear Pulse",
    tag: "MMFU / HIFU",
    color: "bg-cyan-50 border-cyan-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/4ba7dd4bc_generated_image.png",
    shortDesc: "Next-generation MMFU platform with micro and macro focused ultrasound, 3 handpieces and 10 interchangeable cartridges for face and body.",
    highlights: ["MMFU", "Ultra-Booster", "10 cartridges"],
  },
  {
    id: "fraxis-duo",
    name: "FRAXIS DUO",
    category: "Fractional CO² Laser + Microneedle RF",
    tag: "Fractional Laser + RF",
    color: "bg-blue-50 border-blue-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/07ae8c3fd_generated_image.png",
    shortDesc: "Ideal combination of fractional CO² laser and microneedle RF for a wide spectrum of aesthetic and gynaecological applications.",
    highlights: ["CO² Laser", "Microneedle RF", "FDA Approved"],
  },
  {
    id: "volnewmer",
    name: "VOLNEWMER",
    category: "Face Reformer — Monopolar RF",
    tag: "RF Lifting",
    color: "bg-teal-50 border-teal-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/032b93b67_generated_image.png",
    shortDesc: "Non-invasive monopolar RF device for skin tightening and lifting, featuring oval surface technology and continuous cooling system.",
    highlights: ["Monopolar RF", "Hidden Edge Tip", "FDA Approved"],
  },
  {
    id: "curas",
    name: "CURAS",
    category: "Q-Switched Nd:YAG Laser",
    tag: "Laser / Pigment",
    color: "bg-sky-50 border-sky-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/482980470_generated_image.png",
    shortDesc: "New generation Q-switched Nd:YAG laser with 1064 nm and 532 nm wavelengths for tattoo removal, pigmentation and skin rejuvenation.",
    highlights: ["1064 nm / 532 nm", "Zoom-MLA & DOE", "FDA Approved"],
  },
  {
    id: "secret-rf",
    name: "SECRET RF",
    category: "Fractional Microneedle + Cannula RF",
    tag: "Fractional RF",
    color: "bg-cyan-50 border-cyan-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/02e6d52f3_generated_image.png",
    shortDesc: "Advanced bipolar microneedle RF technology delivering precisely controlled RF energy to targeted dermal depths from 0.5 to 3.5 mm.",
    highlights: ["2 MHz RF", "0.5–3.5 mm depth", "FDA Approved"],
  },
  {
    id: "secret-duo",
    name: "SECRET DUO",
    category: "Er-Glass + Microneedle RF + Cannula RF",
    tag: "Dual Fractional",
    color: "bg-blue-50 border-blue-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/c4823f55e_generated_image.png",
    shortDesc: "Combines 1540nm Erbium Glass laser with microneedle RF in one device for synergistic non-ablative skin resurfacing and remodeling.",
    highlights: ["1540nm Er:Glass", "Microneedle RF", "FDA Approved"],
  },
  {
    id: "ultraformer-iii",
    name: "ULTRAFORMER III",
    category: "Macro & Micro Focused Ultrasound",
    tag: "HIFU",
    color: "bg-teal-50 border-teal-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/3774e8b6f_generated_image.png",
    shortDesc: "HIFU device with precision pulse modes applying thermal energy to precise skin depths for non-invasive lifting and body contouring.",
    highlights: ["Micro & Macro HIFU", "7 cartridges", "Face & Body"],
  },
  {
    id: "pento",
    name: "PENTO",
    category: "755nm Alexandrite + 1064nm Nd:YAG Laser",
    tag: "Dual Wavelength Laser",
    color: "bg-sky-50 border-sky-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/41a13b890_generated_image.png",
    shortDesc: "High-performance dual-wavelength laser system for permanent hair removal and treatment of vascular lesions at high speed.",
    highlights: ["755nm + 1064nm", "31g Rod", "FDA Approved"],
  },
  {
    id: "ncore",
    name: "N.CORE 3D",
    category: "Diode Laser — Three Wavelengths",
    tag: "Diode Laser",
    color: "bg-cyan-50 border-cyan-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6a19139ec_generated_image.png",
    shortDesc: "Simultaneous emission of 755 nm, 808 nm and 1064 nm diode laser energy to three different skin depths for effective year-round epilation.",
    highlights: ["755 / 808 / 1064nm", "1400W", "3D Lifting"],
  },
  {
    id: "aquapure-ii",
    name: "AQUAPURE II",
    category: "Deep Skin Care System",
    tag: "Hydradermabrasion",
    color: "bg-blue-50 border-blue-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/564499f98_AcuaPure_25copy.png",
    shortDesc: "Multifunctional device combining wet and dry exfoliation, micro-focused microneedling and LED therapy for comprehensive skin care.",
    highlights: ["AD Peeling", "MF Microneedling", "LightPure LED"],
  },
  {
    id: "clatuu-alpha",
    name: "CLATUU ALPHA",
    category: "Cryolipolysis",
    tag: "Fat Freezing",
    color: "bg-teal-50 border-teal-200",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/1393ca4bc_generated_image.png",
    shortDesc: "Advanced cryolipolysis system with 360° cooling applicators designed for fat reduction and body contouring with 20% stronger vacuum.",
    highlights: ["360° Cooling", "20% Stronger Vacuum", "Dual-area treat."],
  },
];

export default function DevicesSection() {
  return (
    <section id="devices" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-body font-semibold text-primary uppercase tracking-widest">
            Clinical Device Portfolio
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Evidence-Based{" "}
            <span className="italic text-primary">Technology</span>
          </h2>
          <p className="mt-4 text-lg font-body font-light text-muted-foreground">
            Twelve distinct clinical platforms — each engineered for specific dermatological and body contouring indications. Select a device to access full scientific specifications, mechanisms, and clinical references.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {devices.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
            >
              <Link
                to={`/devices/${d.id}`}
                className={`group flex flex-col h-full border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/40 transition-all duration-300 cursor-pointer ${d.color}`}
              >
                {/* Device image */}
                <div className="w-full h-44 bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] font-body font-bold text-primary uppercase tracking-widest mb-1">
                    {d.tag}
                  </span>
                  <p className="font-display text-base font-bold text-foreground">{d.name}</p>
                  <p className="text-xs font-body font-semibold text-primary uppercase tracking-wide mb-3">
                    {d.category}
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed flex-1">
                    {d.shortDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {d.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-body font-semibold bg-white/70 border border-border/40 text-foreground/70 rounded-full px-2 py-0.5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-xs font-body font-semibold text-primary group-hover:gap-2 transition-all">
                    View Clinical Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}