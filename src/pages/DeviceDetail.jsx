import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const deviceData = {
  "veloce-4800": {
    name: "VELOCE 4800",
    subtitle: "Broadband Light Technology",
    tag: "IPL / Broadband Light",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/7f85ed987_ChatGPTImageApr6202609_02_24PM.png",
    overview: "VELOCE 4800 uses dual xenon lamp broadband light technology to reach deep skin layers at low energy. Thanks to various filters with different wavelengths, this technology is effectively used for a wide range of skin problems. The system emits intensive and precisely targeted light pulses, making treatment faster, safer and more effective.",
    modalities: [
      "IPDL (Intense Pulse Dual Light) — broadband light up to 1400 nm",
      "Interchangeable filters — wide spectrum of wavelengths",
      "PW500 — special filter transmitting light 500–600 nm for haemoglobin",
      "NT800 — deep-penetrating filter 800–1400 nm for deeper dermal layers",
      "Efficient cooling control — sapphire applicator keeps skin comfortable",
      "Fast pulse function — 45×15 mm applicator, energy up to 1,080 J/s",
    ],
    indications: [
      "Pigmented lesions", "Lentigo", "Melasma", "Vascular lesions", "Telangiectasia",
      "Poikiloderma", "Skin rejuvenation", "Tightening of pores", "Acne and post-acne",
      "Active acne", "Rosacea", "Erythema", "Epilation", "Photodynamic therapy",
      "Port Wine Stain", "Demodex treatment",
    ],
    specs: [
      { label: "Technology", value: "IPDL — Intense Pulse Dual Light" },
      { label: "Light Source", value: "Dual Xenon Lamp" },
      { label: "Wavelength Range", value: "500–1400 nm (filter-dependent)" },
      { label: "PW500 Filter", value: "500–600 nm (haemoglobin absorption)" },
      { label: "NT800 Filter", value: "800–1400 nm (deep dermal)" },
      { label: "Applicator Size", value: "45 × 15 mm" },
      { label: "Max Energy", value: "1,080 J/s" },
      { label: "Certification", value: "CE Mark" },
    ],
    mechanism: "The IPDL technology combines intense pulsed light with broadband light up to 1400 nm, making VELOCE the best choice for treating a broader spectrum of skin problems compared to standard IPL systems. The dual xenon lamp technology ensures stable energy delivery and maximum precision. Even at ultra-fast pulse mode, the device provides stable laser beams and precisely targeted laser spots — thus achieving maximum efficiency and optimal treatment results. The Smart Adapter and spot blocks allow precise treatment without damage to surrounding tissue.",
    clinicalGraphics: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6cf65161f_Screenshot2026-04-05at100514.png",
    references: [
      "Babilas P et al. (2010). Intense pulsed light (IPL): A review. Lasers Surg Med.",
      "Wat H et al. (2014). Application of intense pulsed light in the treatment of dermatologic disease. J Cutan Med Surg.",
    ],
  },
  "ultraformer-mpt": {
    name: "ULTRAFORMER MPT",
    subtitle: "Bidirectional Circular & Linear Pulse Technology",
    tag: "MMFU / HIFU",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/4ba7dd4bc_generated_image.png",
    overview: "Creating the right quality TCP determines the performance of MMFU technology. The new ULTRAFORMER MPT breaks down the TCP creation process into micro-units, ensuring higher safety, extraordinary precision and maximum MMFU technology efficiency — going beyond standard technological standards.",
    modalities: [
      "MMFU — Macro and micro focused ultrasound energy",
      "Bidirectional circular and linear point pulse",
      "Ultra-Booster handpiece with optimised transducer",
      "3 handpieces and 10 interchangeable cartridges",
      "Normal, Micro-pulse, Circular, Micro-circular modes",
    ],
    indications: [
      "Facelifting", "Skin tightening", "Eyebrow lifting", "Wrinkle reduction",
      "Volume reduction in the cheek area", "Jowl reduction and tightening",
      "Eye area rejuvenation", "Nasolabial folds",
    ],
    specs: [
      { label: "Technology", value: "MMFU — Macro & Micro Focused Ultrasound" },
      { label: "Pulse Modes", value: "Circular, Linear, Point, Micro-circular" },
      { label: "Handpieces", value: "3 (incl. Ultra-Booster)" },
      { label: "Cartridges", value: "10 interchangeable" },
      { label: "Treatment Speed", value: "2.5× faster than standard" },
      { label: "Application Area", value: "Face & Body" },
      { label: "Certification", value: "CE Mark" },
    ],
    mechanism: "MMFU technology through micro pulse technology makes TCP 25× finer, transfers additional energy to the treatment area and enables intensive treatment. The Ultra-Booster applicator encompasses the most modern MMFU energy generation technology. The Ultraformer MPT can perform both point and bidirectional linear point pulses, which shortens treatment time and at the same time maximises its quality. Converters are 2.5× faster than standard and eliminate return time — ensuring maximum patient comfort and optimal clinical results.",
    clinicalFeatures: [
      {
        title: "Neinvazivní lifting obličeje",
        description: "Technologie HIFU stimuluje obnovu kolagenu v dermální vrstvě a v SMAS. Tyto vrstvy procházejí některika fázemi – srážením krve, stažením tkáně a novou tvorbou kolagenu s pevnější strukturou. Výsledkem je redukce vrásek a zlepnění ohablé pokožky.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      },
      {
        title: "Nejmodernější režimy pulzů",
        description: "Ultraformer MPT dokáže provádět jak bodové, tak obousměrné lineární bodové pulzy. Díky tomu zkracuje dobu ošetření a zároveň maximalizuje jeho kvalitu.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      },
      {
        title: "Krátká doba ošetření",
        description: "Převodníky jsou 2.5x rychlejší než běžné a eliminují dobu návratu. To zajišťuje maximální pohodlí při ošetření a optimální klinické výsledky.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      },
      {
        title: "Wide Range of MMFU Modes",
        description: "Normal mode, Micro-pulse mode, Circular mode, Micro-circular mode",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/dc935eb3d_generated_image.png",
      },
      {
        title: "Ultra-Booster Handpiece",
        description: "Transducer with optimised, reduced construction for maximum energy delivery precision.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e09db1435_generated_image.png",
      },
      {
        title: "Cartridge Options for Various Treatment Depths",
        description: "3 handpieces and 10 interchangeable cartridges for tailored depth targeting.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/154379072_generated_image.png",
      },
      {
        title: "Short Treatment Time",
        description: "Up to 2.5× faster speed. No delay between pulses for smooth and faster treatment.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/da970045c_generated_image.png",
      },
    ],
    clinicalTerms: [
      { abbr: "TCP", def: "Thermal Coagulation Point" },
      { abbr: "MMFU", def: "Macro & Micro Focused Ultrasound Technology" },
      { abbr: "MP", def: "Micro-pulse mode" },
      { abbr: "Normal", def: "Point mode" },
    ],
    references: [
      "Suh DH et al. (2015). Intense focused ultrasound tightening in Asian skin. J Cosmet Laser Ther.",
      "Fabi SG (2015). Noninvasive skin tightening: focus on new ultrasound techniques. Clin Cosmet Investig Dermatol.",
    ],
  },
  "fraxis-duo": {
    name: "FRAXIS DUO",
    subtitle: "Fractional CO² Laser + Microneedle RF",
    tag: "Fractional Laser + RF",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/fd362d670_ChatGPTImageApr11202611_58_35AM.png",
    overview: "Fraxis Duo can be used to treat a wide range of indications using fractional CO² laser, microneedles and optional surgical and gynaecological handpieces. The ideal combination of fractional CO² laser and microneedle RF technology provides a broader spectrum of aesthetic applications for face and body.",
    modalities: [
      "Fractional CO² Laser — 30W output, short impulse for uniform high-quality beam",
      "Microneedle RF — bipolar RF via high-quality medical needles at 0.5–3.5 mm",
      "Surgical handpiece — spot size 0.2–1.3 mm for precise incisions",
      "Gynaecological handpiece (optional) — 8×8 CO² grid at 90° to vaginal wall",
      "6 different scanning modes — dot, circle, oval, square, triangle, hexagon",
      "I-Stack function — deeper fractional ablation at lower energy",
    ],
    indications: [
      "Toning and texture", "Skin firming", "Acne and post-acne scars", "Skin rejuvenation",
      "Face and neck firming", "Superficial pigmentation", "Skin regeneration",
      "Fine wrinkles", "Lifting and tightening", "Xanthelasma",
      "Eyelid treatment", "Surgical cuts", "Vaginal rejuvenation",
      "Urinary incontinence", "Striae", "Bradavice",
    ],
    specs: [
      { label: "CO² Laser Power", value: "30 W" },
      { label: "Scan Sizes", value: "1×1 to 20×20 mm" },
      { label: "Body Distance", value: "0.1 to 2.0 mm" },
      { label: "Needle Depth (RF)", value: "0.5 – 3.5 mm" },
      { label: "Surgical Spot Size", value: "0.2 – 1.3 mm" },
      { label: "Device Size", value: "340 × 840 mm" },
      { label: "Weight", value: "208 g (handpiece)" },
      { label: "Certification", value: "CE Mark, FDA Approved" },
    ],
    mechanism: "The powerful fractional CO² laser scanner with 30 W output provides, thanks to short impulse, a uniform and high-quality laser beam. Its ablative-thermal effect supports epidermis regeneration and dermis regeneration. Optimal beam spot of 100 micrometres minimises healing time and risk of post-inflammatory hyperpigmentation (PIH). The microneedle RF module transfers bipolar RF energy via ultra-fine medical steel needles, increasing the efficacy of photo-rejuvenation and scar treatment on face and body. The combination of these two technologies provides an extraordinarily effective yet gentle skin rejuvenation with minimal downtime.",
    handpieces: [
      {
        title: "Microneedle RF Handpiece",
        description: "Advanced bipolar microneedle RF technology transfers RF energy via high-quality medical needles at precise depths (0.5–3.5 mm), enhancing photo-rejuvenation and scar treatment efficacy on face and body.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/9189daab1_generated_image.png",
        specs: [
          { label: "MTR-AC-C25", value: "25 semi-isolated needles · 10×10 mm · max 25 W · thermal effect decreasing from deeper to surface layers" },
          { label: "MTR-AC-C64", value: "64 semi-isolated needles · 17.5×17.5 mm · max 70 W · high thermal effect in deep skin layers" },
          { label: "Dimensions", value: "140 × Ø40 mm · 205 g" },
        ],
      },
      {
        title: "Surgical Handpiece",
        description: "Spot size adjustable from 0.2 to 1.3 mm, enabling fast, clean and precise incisions and tissue coagulation for treatment of superficial lesions and warts.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a79f03270_generated_image.png",
        specs: [
          { label: "Spot 0.2–0.5 mm", value: "Incision procedures" },
          { label: "Spot 0.7–0.9 mm", value: "Deep peeling procedures, ablation" },
          { label: "Spot 0.9–1.3 mm", value: "Surface peeling procedures, ablation" },
        ],
      },
      {
        title: "Gynaecological Handpiece (optional)",
        description: "Fractional CO² laser for fast, safe and minimally invasive gynaecological procedures. The 90° reflective handpiece directs the CO² beam (8×8 grid) perpendicular to the vaginal wall for collagen remodelling and vaginal tissue reshaping without damage to surrounding tissue.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/f7ff870f4_generated_image.png",
        specs: [
          { label: "Rotating Probe", value: "Manually rotatable to 8 positions, enabling 360° full rotation" },
          { label: "Unique Air-Flow", value: "Reduces smoke above laser beam, ensuring more precise and safer application" },
          { label: "i-slide", value: "Single-use measuring attachment — probe rotates 90° for precise depth measurement, prevents adhesion to internal tissue" },
        ],
      },
    ],
    clinicalFeatures: [
      {
        title: "CO² Fractional Laser Scanner",
        description: "30 W output with short impulse delivers a uniform, high-quality beam. Ablative-thermal effect supports epidermis and dermis regeneration. Optimal 100 µm beam spot minimises healing time and PIH risk.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/88250c8a0_generated_image.png",
      },
      {
        title: "6 Scanning Modes",
        description: "Scan size: 1×1 to 20×20 mm. Point distance: 0.1 to 2.0 mm. Modes: Circle, Square, Semi-circle, Ellipse, Rectangle, Triangle.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/465ff3cea_generated_image.png",
      },
      {
        title: "I-Stack Function",
        description: "Enables deeper fractional ablation at lower energy, minimising the risk of damage to surrounding tissue.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6ca44bc78_generated_image.png",
      },
    ],
    references: [
      "Alexiades-Armenakas M et al. (2008). Fractional laser skin resurfacing. J Drugs Dermatol.",
      "Hruza G et al. (2009). Fractional photothermolysis and RF combination. Lasers Surg Med.",
    ],
  },
  "volnewmer": {
    name: "VOLNEWMER",
    subtitle: "Face Reformer — Monopolar RF",
    tag: "RF Lifting",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/4e3af0373_volnewmer_cut05_.png",
    overview: "Radiofrequency energy stimulates collagen renewal in the dermis through thermal effect. Volnewmer is the most non-invasive aesthetic device that combines lifting and skin tightening, offering safe, innovative and effective treatment with maximum comfort.",
    modalities: [
      "Monopolar RF — Long Pass Radiofrequency, high and safe RF range",
      "Oval surface — stable energy via curved surface applicator",
      "Hidden edge tip — side-effect suppression technology",
      "Impedance detection system — real-time contact monitoring",
      "Continuous cooling system — prevents epidermal burns",
      "4 cartridge options — I, F, V, S TIPs for face and body",
    ],
    indications: [
      "Skin tightening and lifting", "Face modelling", "Pore reduction",
      "Wrinkle reduction", "Skin surface treatment", "Chin reduction",
      "Fine wrinkle smoothing",
    ],
    specs: [
      { label: "Technology", value: "Monopolar Long Pass RF" },
      { label: "Cartridges", value: "I TIP 0.25 / F TIP 3.0 / V TIP 4.0 / S TIP 16.0" },
      { label: "Target Areas", value: "Face and body" },
      { label: "Safety Features", value: "Real-time impedance detection, auto energy shutoff" },
      { label: "Cooling", value: "Continuous integrated cooling" },
      { label: "Certification", value: "CE Mark, FDA Approved" },
    ],
    mechanism: "Volnewmer uses monopolar RF energy that targets collagen layers and allows controlled and safe energy penetration to deeper skin layers. It ensures balancing of skin tone, tightening, improvement of elasticity and volumetric lifting. This thermal effect resembles collagen restructuring of existing collagen and stimulates formation of new collagen. Volnewmer, designed for effective treatment results for face and body, ensures stable energy transfer and, thanks to the continuous cooling system, provides maximum effect and at the same time higher patient comfort. The oval surface applicator design ensures even distribution of thermal energy across the entire applicator surface.",
    clinicalFeatures: [
      {
        title: "Long Pass Radiofrequency — Oval Surface",
        description: "Volnewmer uses monopolar RF energy targeting collagen-rich layers for controlled, safe deep penetration. The oval applicator surface ensures even thermal energy distribution across the dermis — balancing skin tone, tightening, improving elasticity and volumetric lifting.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/682d339c7_generated_image.png",
      },
      {
        title: "Hidden Edge Tip — Side-Effect Suppression",
        description: "Unlike flat-surface competitors that concentrate energy at edges causing overheating, Volnewmer's inward-curving edges reduce overheating and minimise side effects. The oval contact design ensures uniform thermal energy distribution in the dermis.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6d76897f4_Screenshot2026-04-11at211939.png",
      },
      {
        title: "4 Cartridge Options",
        description: "I TIP 0.25 (eye area) · F TIP 3.0 (face) · V TIP 4.0 (face & body) · S TIP 16.0 (body). Each cartridge type is designed to enable personalised treatment of the face and body according to individual needs.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b7b7b421b_Screenshot2026-04-11at212214.png",
      },
      {
        title: "RF Thermal Energy Transfer to Dermal Layer",
        description: "Maintains low pain levels even at high energies. Provides uniform RF energy distribution on the surface, eliminating negative effects on the epidermis. FLIR thermal imaging confirms consistent and expanding heat zones over 15–60 second treatment intervals.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b672e3000_generated_image.png",
      },
    ],
    references: [
      "Zelickson BD et al. (2004). Histological and ultrastructural evaluation of monopolar RF. Arch Dermatol.",
      "Sadick NS, Makino Y (2004). Selective electro-thermolysis in aesthetic medicine. Lasers Surg Med.",
    ],
  },
  "curas": {
    name: "CURAS",
    subtitle: "Q-Switched Nd:YAG Laser",
    tag: "Laser / Pigment",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/441ea4734_Gemini_Generated_Image_ficyxzficyxzficy.png",
    overview: "The new Curas is a new generation Q-switched Nd:YAG laser system that, thanks to improved wavelength performance of 532 nm and 1064 nm, can transfer energy stably and in a controlled manner from the skin surface to its deepest layers.",
    modalities: [
      "1064 nm Q-Switched Nd:YAG — deep tissue targeting",
      "532 nm Q-Switched Nd:YAG — superficial pigment correction",
      "DOE Handpiece 5×5 — treatment in 5×5 mm grid with 48 microbeams",
      "Zoom-Collimation Handpiece — adjustable intervals 1 mm, pulses 2–10 mm",
      "Zoom-MLA Handpiece — 85 stable point impulses, multi-level energy",
      "A6 / K6 mode — new modes for regular pulse transfer during treatment",
    ],
    indications: [
      "Tattoo removal", "Pigmented lesions", "Melasma", "Soft Peeling",
      "Lash thickening", "Nail fungus", "Sun and age spots", "Skin toning",
      "Epidermis lesions", "Dermal lesions", "Carbon peeling",
      "Skin rejuvenation", "Becker's Nevus", "Freckle removal",
    ],
    specs: [
      { label: "Wavelengths", value: "1064 nm / 532 nm" },
      { label: "Technology", value: "Q-Switched Nd:YAG" },
      { label: "Max Energy", value: "1.3 J" },
      { label: "Handpieces", value: "DOE 5×5, Zoom-Collimation, Zoom-MLA" },
      { label: "Pulse Mode", value: "A6 / K6" },
      { label: "Lenses", value: "DOE Lens, MLA Lens" },
      { label: "Certification", value: "CE Mark, FDA Approved" },
    ],
    mechanism: "The device provides high energy stability and, as the only Q-switched Nd:YAG platform, allows removal of all pigmented lesions and tattoo colours simultaneously at wavelengths 1064/532 nm with energy up to 1.3 J. The laser emits short, high-performance energy pulses focused on the treated area. Using Q-switched pulses, it increases efficacy while minimising undesirable effects such as PIH (post-inflammatory hyperpigmentation) or skin overheating. The Zoom-MLA lens produces 85 stable point impulses; intensity can be adjusted from deep dermis (L15), middle dermis (L25) to surface dermis (L35), minimising thermal effect on the skin.",
    clinicalFeatures: [
      {
        title: "Dual Wavelength Penetration Depth — 1064nm vs 532nm",
        description: "1064 nm penetrates deep into the dermis for deep pigmented lesions and tattoos. 532 nm (K6 enhanced mode, 30 µs) targets superficial pigmentation with 6 energy waves for more stable and uniform treatment.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/d21d5db44_generated_image.png",
      },
    ],
    handpieces: [
      {
        title: "DOE Handpiece 5×5",
        description: "5×5 DOE handpiece allows treatment with minimal skin damage and creates 48 microbeams in an area of 5×5 mm². Ideal for skin rejuvenation, pore treatment, skin firming, superficial wrinkles, and melasma.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/c62f251d6_generated_image.png",
        specs: [
          { label: "Grid", value: "5×5 mm², 48 microbeams" },
          { label: "Lens Type", value: "DOE Lens — uniform energy distribution" },
          { label: "Indications", value: "Skin rejuvenation, pore treatment, skin firming, superficial wrinkles, melasma" },
        ],
      },
      {
        title: "Zoom-Collimation Handpiece",
        description: "Handpiece with adjustable intervals of 1 mm and precise pulses with focus in the range of 2–10 mm. Suitable for epidermal pigmentation, tattoo removal, hair removal, carbon peeling, lentigo, and freckles.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b3f926bac_generated_image.png",
        specs: [
          { label: "Focus Range", value: "2–10 mm" },
          { label: "Interval", value: "Adjustable in 1 mm steps" },
          { label: "Indications", value: "Epidermal pigmentation, tattoo removal, hair removal, carbon peeling, lentigo, freckles" },
        ],
      },
      {
        title: "Zoom-MLA Handpiece",
        description: "Collimated micro-light array arrangement produces 85 stable point impulses. Intensity adjusts from deep dermis (L15) to middle dermis (L25) to surface dermis (L35), minimising thermal effect on skin.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a3a10b7c1_generated_image.png",
        specs: [
          { label: "L15", value: "Deep dermis" },
          { label: "L25", value: "Middle dermis" },
          { label: "L35", value: "Surface dermis" },
          { label: "Indications", value: "Skin rejuvenation, melasma treatment, skin tone improvement" },
        ],
      },
    ],
    references: [
      "Ho SG et al. (2017). Q-switched laser treatment for pigmented lesions and tattoos. Clin Cosmet Investig Dermatol.",
      "Goldberg DJ (2010). Lasers and Light Sources for the Removal of Unwanted Hair. Dermatol Clin.",
    ],
  },
  "secret-rf": {
    name: "SECRET RF",
    subtitle: "Fractional Microneedle + Cannula RF",
    tag: "Fractional RF",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/bd6ce15dd_generated_image.png",
    overview: "Secret RF is a high-performance device that transfers precisely controlled RF energy to the correct skin depth with minimal downtime. Thanks to non-insulated needles it stimulates both surface and deep skin layers and at the same time enables extensive remodelling in deeper dermis. Does not cause epidermal burns — acts only through thermal effect.",
    clinicalGraphics: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/88e17d298_generated_image.png",
    modalities: [
      "Fractional RF — 2 MHz bipolar precise RF technology",
      "MTR-AC-C25 — 25-needle semi-isolated cartridge, max 25 W",
      "MTR-AC-C64 — 64-needle semi-isolated cartridge, max 70 W",
      "SmartCure (optional) — intelligent electroporation pen, thermal coagulation technology",
      "Mono-Polar RF — non-invasive 2 MHz RF for wrinkles, eye area and product absorption",
      "K3i — isolated electrolysis needle (0.075 mm) for precise capillary treatment",
      "AC-01 — single-use isolated needle for collagen remodeling and texture improvement",
      "19G/28G Cannula — sub-dermal RF delivery for volumetric tightening and lipolytic effect",
    ],
    indications: [
      "Skin rejuvenation", "Skin tightening", "Wrinkle reduction", "Pore reduction",
      "Superficial vascular lesions", "Face lifting", "Acne", "Post-trauma scars",
      "Striae", "Fine capillary treatment", "Periorbital wrinkles", "Collagen remodelling",
    ],
    specs: [
      { label: "RF Technology", value: "2 MHz bipolar fractional" },
      { label: "MTR-AC-C25", value: "25 semi-isolated needles, 10×10 mm, max 25 W" },
      { label: "MTR-AC-C64", value: "64 semi-isolated needles, 17.5×17.5 mm, max 70 W" },
      { label: "Needle Depth", value: "0.5 – 3.5 mm" },
      { label: "Handpiece Size", value: "140 × Ø40 mm" },
      { label: "Weight", value: "205 g (handpiece)" },
      { label: "Mono-Polar RF", value: "2 MHz, non-invasive, periorbital & forehead" },
      { label: "Certification", value: "CE Mark, FDA Approved" },
    ],
    mechanism: "Secret RF uses dual precise RF technology 2 MHz that minimises epidermis damage and provides synergistic effect. Precise needles ensure smooth, firm and strong surface while RF energy (at depth 0.5–3.5 mm) induces sub-dermal thermal coagulation in deep dermal layers, which activates fibroblasts and forms new collagen. This process supports superficial and deep skin layer remodeling and its regeneration with minimal downtime. The technology is suitable for all skin types. Minimal discomfort and precise thermolysis — precise needles ensure even energy guidance and targeted heating without damage to surrounding tissue.",
    handpieces: [
      {
        title: "Microneedle RF Handpiece — MTR Cartridges",
        description: "Advanced bipolar microneedle RF technology delivers precisely controlled RF energy to selectively set depths (0.5 mm to 3.5 mm) via highest-quality medical needles to enhance efficacy of photo-rejuvenation and scar treatment on face and body.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6566dc347_generated_image.png",
        specs: [
          { label: "MTR-AC-C25", value: "25-needle semi-isolated cartridge · 10×10 mm area · max 25 W · thermal effect decreasing from deeper layers toward surface" },
          { label: "MTR-AC-C64", value: "64-needle semi-isolated cartridge · 17.5×17.5 mm area · max 70 W · high thermal effect in deep skin layers" },
          { label: "Dimensions", value: "140 × Ø40 mm · 205 g" },
        ],
      },
      {
        title: "SmartCure — Thermal Coagulation Technology (optional)",
        description: "SmartCure — intelligent electroporation pen that in combination with a single electrolysis needle and various Nokor needles enables use of various thermocoagulation techniques for a broad spectrum of treatments including fine capillaries, acne, wrinkles and scars.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/8c692ee70_generated_image.png",
        specs: [
          { label: "K3i", value: "Isolated electrolysis needle (0.075 mm) with K3i technology — transfers heat only to the target vessel without damaging epidermis or surrounding tissue, enabling precise treatment of fine capillaries" },
          { label: "AC-01", value: "Isolated single-use needle — gently penetrates skin, stimulates collagen formation and remodelling, reducing wrinkles and improving skin texture" },
          { label: "19G/28G Cannula", value: "In combination with RF energy at the cannula tip — inserted sub-dermally parallel to epidermis, moves forward and backward between dermis and subcutaneous glands, providing long-lasting tightening and lipolytic effect" },
        ],
      },
      {
        title: "Mono-Polar RF — Non-Invasive RF Technology",
        description: "Mono-Polar RF is a non-invasive therapeutic mode utilising 2 MHz RF energy. Used for treatment of wrinkles around the eye area and on the forehead, or to support absorption of products into the skin — for example during application of mesotherapy or PRP.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/5bdbf554e_generated_image.png",
        specs: [
          { label: "Frequency", value: "2 MHz monopolar RF" },
          { label: "Indications", value: "Periorbital wrinkles, forehead lines, product absorption support (mesotherapy, PRP)" },
          { label: "Mode", value: "Non-invasive surface treatment" },
        ],
      },
    ],
    references: [
      "Kim JE et al. (2017). Microneedle RF for acne scar treatment: a split-face study. Dermatol Surg.",
      "Alexiades M et al. (2014). Randomized controlled trial of fractional RF microneedling. Dermatol Surg.",
    ],
  },
  "secret-duo": {
    name: "SECRET DUO",
    subtitle: "Er-Glass 1540nm + Microneedle RF + Cannula RF",
    tag: "Dual Fractional",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/a3e43fdf3_secret_duo_2p.png",
    overview: "Secret DUO combines two advanced non-ablative technologies in one device. Microneedle RF technology allows precise coagulation, protein denaturation and deep layer heating — with minimal revalidation time and fast regeneration. Erbium Glass Laser 1540 nm provides fractional non-ablative rejuvenation of skin and improves skin structure, scars and collagen stimulation.",
    modalities: [
      "1540nm Erbium Glass Laser — non-ablative fractional photothermolysis",
      "Microneedle RF — bipolar fractional RF, 0.5–3.5 mm depth",
      "MTR-AC-C25 — 25-needle semi-isolated cartridge, max 25 W",
      "MTR-AC-C64 — 64-needle semi-isolated cartridge, max 70 W",
      "SmartCure (optional) — thermal coagulation technology",
      "5 scan modes — 1×1 to 10×10, spacing 0.5–2.0 mm",
    ],
    indications: [
      "Microneedle RF: Lifting and skin tightening, fine lines and wrinkles, superficial vascular lesions, acne and post-acne scars, pore reduction, striae, skin rejuvenation, atrophic scars",
      "1540nm Er:Glass: Non-ablative skin rejuvenation, active acne, atrophic scars, post-injury scars, wrinkle reduction, skin tightening, pore reduction",
    ],
    specs: [
      { label: "Laser Wavelength", value: "1540 nm Erbium Glass" },
      { label: "RF Technology", value: "Bipolar Microneedle 2 MHz" },
      { label: "Scan Sizes", value: "1×1 to 10×10 mm" },
      { label: "Needle Depth", value: "0.5 – 3.5 mm" },
      { label: "MTR-AC-C25", value: "25 needles, 10×10 mm, max 25 W" },
      { label: "MTR-AC-C64", value: "64 needles, 17.5×17.5 mm, max 70 W" },
      { label: "Certification", value: "CE Mark, FDA Approved" },
    ],
    mechanism: "The 1540nm laser scanning handpiece provides individualised energy according to skin type and condition. The non-ablative fractional laser beam is transferred to the dermis in the form of multiple columns and targeted primarily at water content in the dermal layer. This stimulates collagen heating and remodeling of dermis, causing any ablative effect on the epidermis to be avoided. Compared to ablative lasers it provides faster skin regeneration and fewer side effects after treatment. The combination of both technologies provides extraordinarily effective yet gentle skin rejuvenation with minimal downtime.",
    handpieces: [
      {
        title: "Microneedle RF Handpiece — MTR Cartridges",
        description: "Advanced bipolar microneedle RF technology delivers precisely controlled RF energy to selectively set depths (0.5 mm to 3.5 mm) via highest-quality medical needles to enhance efficacy of photo-rejuvenation and scar treatment on face and body.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e8adb83c0_generated_image.png",
        specs: [
          { label: "MTR-AC-C25", value: "25-needle semi-isolated cartridge · 10×10 mm area · max 25 W · thermal effect decreasing from deeper layers toward surface" },
          { label: "MTR-AC-C64", value: "64-needle semi-isolated cartridge · 17.5×17.5 mm area · max 70 W · high thermal effect in deep skin layers" },
          { label: "Dimensions", value: "140 × Ø40 mm · 205 g" },
        ],
      },
      {
        title: "SmartCure — Thermal Coagulation Technology (optional)",
        description: "SmartCure — intelligent electroporation pen that in combination with a single electrolysis needle and various Nokor needles enables use of various thermocoagulation techniques for a broad spectrum of treatments including fine capillaries, acne, wrinkles and scars.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/5bdbf554e_generated_image.png",
        specs: [
          { label: "K3i", value: "Isolated electrolysis needle (0.075 mm) with K3i technology — transfers heat only to the target vessel without damaging epidermis or surrounding tissue, enabling precise treatment of fine capillaries" },
          { label: "AC-01", value: "Isolated single-use needle — gently penetrates skin, stimulates collagen formation and remodelling, reducing wrinkles and improving skin texture" },
          { label: "19G/28G Cannula", value: "In combination with RF energy at the cannula tip — inserted sub-dermally parallel to epidermis, moves forward and backward between dermis and subcutaneous glands, providing long-lasting tightening and lipolytic effect" },
        ],
      },
    ],
    references: [
      "Hruza G et al. (2009). Fractional photothermolysis and RF combination. Lasers Surg Med.",
      "Kim JE et al. (2017). Microneedle RF for acne scar treatment: a split-face study. Dermatol Surg.",
    ],
  },
  "ultraformer-iii": {
    name: "ULTRAFORMER III",
    subtitle: "Macro & Micro Focused Ultrasound",
    tag: "HIFU",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e92f8cca2_generated_image.png",
    overview: "HIFU (High-Intensity Focused Ultrasound) device uses precision pulse modes that apply thermal energy to precisely defined skin depths. It is designed to achieve non-invasive lifting and body contouring with optimal results.",
    modalities: [
      "Macro Focused Ultrasound — higher density energy, deeper penetration",
      "Micro Focused Ultrasound — highly concentrated ultrasonic beams precisely to defined depths",
      "7 cartridges for face and body",
      "Multifunctional cartridges with different depths",
      "Fast and precise cartridge transducers",
    ],
    indications: [
      "Non-invasive face lifting", "Non-invasive tightening of face", "Body lifting",
      "Wrinkle reduction around eyes", "Reduction of under-eye bags", "Nasolabial folds",
      "Fat reduction in cheek area", "Chin tightening", "Body posture modelling",
      "Breast lifting", "Buttock lifting",
    ],
    specs: [
      { label: "Technology", value: "Macro & Micro Focused HIFU" },
      { label: "Cartridges", value: "7 for face and body" },
      { label: "Depths", value: "1.5 mm / 3.0 mm / 2 mm / 4.5 mm" },
      { label: "Frequencies", value: "10 MHz / 7 MHz / 5.5 MHz / 4 MHz" },
      { label: "Deep Cartridges", value: "6.0 / 9.0 / 13.0 mm at 2 MHz" },
      { label: "Transducer Speed", value: "2.5× faster than standard" },
      { label: "Certification", value: "CE Mark" },
    ],
    mechanism: "Obnova kolagenu v ošetřené tkanině spuštěná technologií HIFU probíhá zahřátím dermální a povrchové svalovo-aponeurotické vrstvy (SMAS). Tyto vrstvy procházejí nekrótází, která je srážení krve, kontrakce ran a postupná tvorba nového kolagenu. Tento proces pomáhá redukovať vrásky a zpresnit pokožku, čímž přispívá k mladšímu vzhledu.",
    clinicalFeatures: [
      {
        title: "Mikro Fokus",
        description: "Cartridge s vysoce koncentrovanými ultrazukovými paprsky přenášeji energii přesně a cílené do definované hloubky ošetřované oblasti.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/94aa8db69_generated_image.png",
      },
      {
        title: "Makro Fokus",
        description: "Cartridge s nižší frekvencí, ale vyšší hustotou energie, umožňují hlubší průnik a působení v cílové oblasti.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/94aa8db69_generated_image.png",
      },
    ],
    clinicalGraphics: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/f626e7a13_generated_image.png",
    references: [
      "Suh DH et al. (2015). Intense focused ultrasound tightening in Asian skin. J Cosmet Laser Ther.",
      "Fabi SG (2015). Noninvasive skin tightening: focus on new ultrasound techniques. Clin Cosmet Investig Dermatol.",
    ],
  },
  "pento": {
    name: "PENTO",
    subtitle: "755nm Alexandrite + 1064nm Nd:YAG Laser",
    tag: "Dual Wavelength Laser",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/99fd00419_generated_image.png",
    overview: "Pento is a highly effective system for permanent epilation and treatment of vascular lesions. It delivers higher energy levels at short pulse times and at various spot diameters, thus ensuring energy transfer to deep skin layers and increasing treatment efficacy.",
    modalities: [
      "755nm Alexandrite Laser — 3ms, 50 J at 2 Hz for epilation",
      "1064nm Nd:YAG Laser — 3ms, 60 J at 2 Hz for vascular and deep targets",
      "31-gram Rod — most powerful and stable Alexandrite and Nd:YAG laser generation",
      "Spot diameter up to 24 mm — circular mode",
      "GCD (Gas Cooling Device) — cryogenic cooling system",
      "Various pulse intervals: 250 µs – 300 ms",
    ],
    indications: [
      "Epilation", "Melasma", "Pigmented lesions", "Skin toning", "Skin tightening",
      "Wrinkle reduction", "Vascular lesions", "Sting treatment", "Seborrhoeic keratosis",
      "Fine hair epilation",
    ],
    specs: [
      { label: "Wavelengths", value: "755 nm Alexandrite + 1064 nm Nd:YAG" },
      { label: "Rod Weight", value: "31 grams" },
      { label: "Alexandrite Output", value: "3ms, 50 J @ 2 Hz" },
      { label: "Nd:YAG Output", value: "3ms, 60 J @ 2 Hz" },
      { label: "Short Pulse", value: "250 µs, 4.5 J @ 10 Hz" },
      { label: "Spot Size", value: "Up to 24 mm diameter" },
      { label: "Cooling", value: "GCD — Gas Cooling Device" },
      { label: "Certification", value: "CE Mark, FDA Approved" },
    ],
    mechanism: "Optimised output for high-speed laser emission ensures stable output energy. In circular mode it provides spot diameter up to 24 mm and various pulse widths. It combines performance, comfort and safety and provides broad possibilities for treatment of various lesion types. The 31-gram Rod is used for generating the most powerful and most stable Alexandrite and Nd:YAG laser. It is a highly quality component used in the system. The short pulse of 3 ms transfers energy of 50 J, the device works at a speed of approximately 2 Hz. At a short pulse of 250 µs it achieves energy 4.5 J and works at speed 10 Hz. Short exposure with high energy minimises thermal effects on skin and ensures fast, effective and complete treatment results.",
    clinicalFeatures: [
      {
        title: "Ideální konstrukce vysokonapěťového zdroje energie",
        description: "Vysoce stabilní energie – pokles napětí pod 22 %. Vysoký energetický výstup: Alexandrite 3ms, 50J@2Hz · Nd:YAG 3ms, 60J@2Hz. Maximální bezpečnost, bez nutnosti rekonvalescence, automatická kalibrace, rychlé ošetření.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/1d6cb3e35_generated_image.png",
      },
      {
        title: "Duální systém vlnových délek",
        description: "Optimalizovaný výkon pro vysokorychlostní laserovou oscilaci zajišťuje vysokou stabilitu výstupního výkonu. Díky nízké chybovosti a kulovitému paprsku o průměru až 24 mm nabízí různé šířky pulzů.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/5a67e61c6_generated_image.png",
      },
      {
        title: "Odolná konstrukce — 31g Rod",
        description: "Technologie přímé rezonance poskytuje stabilní a přesnou energii v integrované komoře Rod, která je navržena jako celek. Zajišťuje bezpečné a vysoce účinné ošetření i po dlouhodobém používání.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/858431b54_generated_image.png",
      },
      {
        title: "Vlastnosti — GCD Chladicí systém",
        description: "Různé intervaly pulzů: 250 µs – 300 ms · Snadné použití díky dotykovému displeji · Rychlý start systému · GCD (Gas Cooling Device) – systém kryogenního chlazení · Volitelné ofukování studeným vzduchem.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e042642a4_generated_image.png",
      },
    ],
    references: [
      "Goldberg DJ (2010). Lasers and Light Sources for the Removal of Unwanted Hair. Dermatol Clin.",
      "Altshuler GB et al. (2001). Extended theory of selective photothermolysis. Lasers Surg Med.",
    ],
  },
  "ncore": {
    name: "N.CORE 3D",
    subtitle: "Triple Wavelength Diode Laser",
    tag: "Diode Laser",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/4eb96cc02_generated_image.png",
    overview: "Simultaneously emits laser energy at wavelengths 755 nm, 808 nm and 1064 nm to three different skin depths, thereby providing greater efficacy and enabling faster and more effective epilation. The device is designed to achieve the most effective results and uses the newest and most modern technology.",
    modalities: [
      "755 nm Alexandrite — superficial hair follicles",
      "808 nm Diode — mid-depth dermal targeting",
      "1064 nm Nd:YAG — deep subcutaneous follicles",
      "Simultaneous diode laser emission — 3D Epilace",
      "Dual mode — Intensive and Dynamic",
      "Sapphire cooling applicator — 11×24 mm contact area",
    ],
    indications: [
      "Epilation (all skin types, year-round)", "Skin tightening",
      "3D Core Lifting — collagen stimulation at 38–40°C",
    ],
    specs: [
      { label: "Wavelengths", value: "755 nm + 808 nm + 1064 nm (simultaneous)" },
      { label: "Max Power", value: "1400 W" },
      { label: "Frequency", value: "20 Hz" },
      { label: "Treatment Area", value: "11 × 24 mm" },
      { label: "Contact Temperature", value: "5°C / 0°C / -5°C (selectable)" },
      { label: "Cooling", value: "Stable sapphire contact cooling" },
      { label: "Certification", value: "CE Mark" },
    ],
    mechanism: "The stable sapphire contact cooling system ensures that epidermal tissue is not damaged. This system during thermal energy transfer minimises the risk of undesirable effects, such as burns, and provides a safe treatment course. Three different wavelengths act stably and in a controlled manner in different skin depths — 755 nm for superficial, 808 nm for medium and 1064 nm for deep follicles. The wide, permanently cold handpiece ensures comfortable application. Intensive mode delivers strong energy to deeper skin layers without waiting and at high speed. Dynamic mode transfers RF energy evenly and provides gentle and stable cut.",
    clinicalFeatures: [
      {
        title: "3D Epilace — Tři vlnové délky",
        description: "Tři různé vlnové délky působí stabilně a kontrolovaně v různých hloubkách pokožky. 755nm (Alexandrite) pro povrchové folikuly, 808nm (Diode) pro střední dermis, 1064nm (Nd:YAG) pro hluboké folikuly. Široká a trvale chladná hlavice zajišťuje komfortní použití.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/3b3e0221b_generated_image.png",
      },
      {
        title: "Dvojitý režim — Intensive & Dynamic",
        description: "Intensive Mode dodává silnou energii do hlubších vrstev pokožky bez čekání a s vysokou rychlostí. Dynamic Mode přenáší energii rovnoměrně a poskytuje jemný a stabilní ohřev. Kombinací obou režimů lze dosáhnout účinného a bezpečného synergetického efektu bez nepohodlí.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/6ddfd3fb2_generated_image.png",
      },
      {
        title: "Ošetřovací plocha — Safírový chladicí aplikátor",
        description: "Široká ošetřovací plocha 11×24 mm zajišťuje rychlý a efektivní přenos energie. Stabilní safírový chladicí systém chrání pokožku a minimalizuje riziko poškození tkáně. Teplota kontaktu: 5°C | 0°C | -5°C. Dva různé režimy přenosu energie: spoušť a pedál.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/f087799eb_generated_image.png",
      },
    ],
    references: [
      "Altshuler GB et al. (2001). Extended theory of selective photothermolysis. Lasers Surg Med.",
      "Dierickx CC (2006). The role of deep heating for noninvasive skin rejuvenation. Lasers Surg Med.",
    ],
  },
  "aquapure-ii": {
    name: "AQUAPURE II",
    subtitle: "Deep Skin Care System",
    tag: "Hydradermabrasion",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/9aebc867e_generated_image.png",
    overview: "AQUAPURE II is a multifunctional device for comprehensive skin care of face and body, combining wet and dry exfoliation, micro-focused microneedling and LED therapy — all in one innovative system.",
    modalities: [
      "Step 1 — Diamond Peeling: removes dead skin cells, improves tone and texture",
      "Step 2 — AD-Peel: cleans pores and delivers hydration to deep skin layers",
      "Step 3 — MF Microneedling: delivers nutrients via microscopic channels, increases elasticity",
      "Step 4 — LightPure LED: 625nm (anti-aging), 520nm (hydration), 465nm (antibacterial)",
      "Solutions: S1 PEEL+, S2 SEBO+, S3 REJUVE+, Cleansys cleaning agent",
    ],
    indications: [
      "Peeling", "Skin nutrition", "Skin cleansing", "Skin calming and hydration",
      "Bacterial skin cleansing", "Wrinkles", "Oily/problematic skin",
      "Fine acne marks", "Striae", "Dull skin",
    ],
    specs: [
      { label: "Treatment Steps", value: "4 (Diamond Peeling, AD-Peel, MF Microneedling, LightPure LED)" },
      { label: "LED Wavelengths", value: "625 nm / 520 nm / 465 nm" },
      { label: "Solutions", value: "S1 PEEL+, S2 SEBO+, S3 REJUVE+, Cleansys" },
      { label: "MF Needling", value: "Micro-focused microneedle delivery" },
      { label: "AD Peeling", value: "Aqua + Diamond dermabrasion" },
      { label: "Certification", value: "CE Mark" },
    ],
    mechanism: "AQUAPURE II is equipped with advanced handpieces that allow penetration of regenerative and antioxidant substances to deep skin layers of epidermis. Thanks to this the device improves skin hydration, its elasticity and supports the collagen regeneration process. AD Peel technology removes dead skin cells and deeply cleans pores, thereby maximising dermabrasion effects. Small MF needles penetrate into the epidermis and target delivery of active substances that support hydration and collagen regeneration. MF microneedling is ideal for treatment of acne scars, wrinkles, striae and enlarged pores. The LED LightPure therapy combines three types of light with various wavelengths acting on various epidermis layers — providing antibacterial and anti-inflammatory effects as well as activating tightening processes in the skin.",
    clinicalFeatures: [
      {
        title: "AD (Aqua+Diamond) Peeling — Metoda dermabraze",
        description: "Technologie AD Peel odstraňuje odumřelé kožní buňky a hloubkově čistí póry, čímž maximalizuje účinky mikrodermabraze.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/602e31fc1_generated_image.png",
      },
      {
        title: "MF (mikrofokusovaná) metoda microneedlingu",
        description: "Malé jehličky pronikají do epidermis a cíleně přenášejí aktivní látky, které podporují hydrataci a obnovu kolagenu. MF microneedling je ideální pro ošetření jizev po akné, vrásek, strií a rozšířených pórů.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/15baac00d_generated_image.png",
      },
      {
        title: "LightPure LED Terapie — Jemná a šetrná metoda",
        description: "Kombinuje tři typy světla s různými vlnovými délkami: 625nm (aktivace buněk, zpevnění pleti, anti-aging), 520nm (rovnováha hydratace a kožního mazu), 465nm (antibakteriální, protizánětlivý účinek).",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/ccc1969ac_generated_image.png",
      },
      {
        title: "Roztoky — S1 PEEL+, S2 SEBO+, S3 REJUVE+, Cleansys",
        description: "S1 PEEL+: odstraňuje odumřelé kožní buňky, exfoliace. S2 SEBO+: odstraňuje přebytečný maz, černé tečky, hydratace. S3 REJUVE+: antioxidanty, vyživuje a zvlhčuje. Cleansys: čisticí roztok pro přístroj.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/1958fb30a_generated_image.png",
      },
      {
        title: "4-krokový protokol ošetření",
        description: "Krok 01: Diamantový Peeling — zlepšuje tón a strukturu pleti. Krok 02: AD-Peel — čistí póry, dodává hydrataci. Krok 03: MF Mikrojehličky — zvyšuje elasticitu, restrukturalizace epidermis. Krok 04: LightPure — zlepšuje krevní oběh, vyrovnává tón pleti.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/27fc03da3_generated_image.png",
      },
    ],
    references: [
      "Gold MH et al. (2020). Hydradermabrasion: an innovative approach to skin rejuvenation. J Clin Aesthet Dermatol.",
      "Ryu HS et al. (2018). Efficacy of electroporation-assisted drug delivery in skin lightening. Dermatol Surg.",
    ],
  },
  "clatuu-alpha": {
    name: "CLATUU ALPHA",
    subtitle: "Cryolipolysis",
    tag: "Fat Freezing",
    image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/b972f406f_generated_image.png",
    overview: "Clatuu Alpha is a fat reduction and body shaping device that is trusted worldwide. It uses cryolipolysis technology working with unique cooling applicators tailored to individual body areas. These applicators are applied to the area and at a higher vacuum level draw fatty tissue into the applicator and gradually freeze it.",
    modalities: [
      "ARC-T — chin and other small body areas",
      "WING Max — upper and lower abdominal area (large)",
      "WING — upper and lower abdominal area, flanks and other large areas",
      "WING Plus — underarm, hips, knees and other small areas",
      "FLAT Mini — underarm, hips, knees and other small local areas",
      "FLAT — abdomen and inner thighs",
      "360° Cooling — even cooling energy distribution across entire applicator",
    ],
    indications: [
      "Subcutaneous fat reduction — abdomen", "Flank and love handle reduction",
      "Inner thigh contouring", "Submental fat", "Arm fat reduction",
      "Post-weight-loss body refinement", "Body contouring",
    ],
    specs: [
      { label: "Technology", value: "Cryolipolysis — controlled fat freezing" },
      { label: "Cooling", value: "360° panel cooling system" },
      { label: "Vacuum Strength", value: "20% stronger than standard systems" },
      { label: "Simultaneous Treatment", value: "Dual-area in 40 minutes" },
      { label: "Applicators", value: "ARC-T, WING Max, WING, WING Plus, FLAT Mini, FLAT" },
      { label: "Treatment Time", value: "From 40 minutes per area" },
      { label: "Certification", value: "CE Mark" },
    ],
    mechanism: "Clatuu Alpha uses controlled fat freezing technology working with unique cooling applicators tailored to individual body areas. These applicators are applied to the area and at a higher vacuum level draw fatty tissue into the applicator and gradually freeze it. The cooling causes damage to the structure of fat cells and their subsequent disintegration. The damaged fat cells are subsequently eliminated from the body by natural processes, which leads to visible reduction of volume and improvement of contours of the treated area. The improved 360° cooling system of Clatuu Alpha ensures even distribution of cooling energy across the entire length of the applicator, enabling faster achievement of target temperature and increasing efficacy by up to 18%.",
    clinicalFeatures: [
      {
        title: "Kompletní sada aplikátorů — Možnost ošetření dvou oblastí současně",
        description: "Clatuu Alpha je vybaven širokou škálou nástavců: WING, WING Plus, WING Max, FLAT, FLAT Mini, ARC-T. Umožňují snadnější a efektivnější ošetření i v náročných oblastech. Dvě oblasti současně za 40 minut.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/64f2b231c_generated_image.png",
      },
      {
        title: "Nastavitelná úroveň vakua a chlazení — 20% silnější vakuum",
        description: "Clatuu Alpha disponuje o 20 % silnějším vakuem a umožňuje uživateli bezpečně upravovat jak úroveň sání, tak i intenzitu chlazení. Tím lze ošetření plně přizpůsobit potřebám pacienta.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/df733f202_generated_image.png",
      },
      {
        title: "Aplikátory WING, WING Plus, WING Max, FLAT — Ošetřované oblasti",
        description: "WING: velké oblasti (břicho, boky). WING Plus: menší oblasti (podpaží, kolena). WING Max: velké oblasti (horní a dolní břicho). FLAT: menší lokální oblasti. Každý aplikátor přizpůsoben specifické anatomické oblasti.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/0ce057cce_generated_image.png",
      },
      {
        title: "Technologie 360° chlazení — Klinicky ověřená efektivita",
        description: "Vylepšený systém 360° chlazení zajišťuje rovnoměrné rozložení chladicí energie po celé délce aplikátoru. FLIR termální zobrazení potvrzuje rovnoměrné chlazení — rychlejší dosažení cílové teploty, efektivita až o 18 % vyšší.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/cfbe4ea15_generated_image.png",
      },
      {
        title: "Klinické ošetření — Rychlá výměna hlavice",
        description: "Díky jednoduchému systému 'stiskni a uvolni' umožňuje Clatuu Alpha snadnou výměnu chladicích aplikátorů bez odpojování kabelů. Dvě ramena umožňují simultánní ošetření dvou oblastí za 40 minut.",
        image: "https://media.base44.com/images/public/69be488f616a63ca33a2e564/e2d68ea67_generated_image.png",
      },
    ],
    references: [
      "Jewell ML et al. (2011). Clinical application of HIFU for non-invasive body sculpting. Aesthet Surg J.",
      "Dierickx CC et al. (2013). Safety, tolerance, and patient satisfaction with noninvasive cryolipolysis. Dermatol Surg.",
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
      <section className="pt-24 pb-0 border-b border-border/20" style={{ backgroundColor: 'rgb(234 240 239 / 50%)' }}>
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
                onClick={() => document.getElementById("cta-contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 bg-primary hover:bg-primary/90 text-white font-body font-semibold rounded-sm px-8 h-12"
                onClick={() => window.location.href = "/#cta"}
              >
                Request Clinical Information
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
                src={device.image}
                alt={device.name}
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

            {/* Left: Mechanism + Modalities + Indications + References */}
            <div className="lg:col-span-2 space-y-14">

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                  Mechanism of Action
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {device.mechanism}
                </p>
              </motion.div>

              {device.clinicalFeatures && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    Key Technology Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-5 mb-8">
                    {device.clinicalFeatures.map((f, i) => (
                      <div key={i} className="bg-secondary/60 rounded-2xl overflow-hidden border border-border/40 flex flex-col">
                        {f.image && (
                          <div className="bg-white h-40 flex items-center justify-center p-4">
                            <img src={f.image} alt={f.title} className="h-full w-full object-contain" />
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
                  {device.clinicalTerms && (
                    <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                      <p className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-3">Terminology</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {device.clinicalTerms.map((t) => (
                          <div key={t.abbr} className="font-body text-sm text-foreground/80">
                            <span className="font-semibold text-foreground">{t.abbr}</span>: {t.def}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {device.handpieces && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    Handpiece Options
                  </h2>
                  <div className="space-y-6">
                    {device.handpieces.map((h, i) => (
                      <div key={i} className="bg-secondary/60 rounded-2xl overflow-hidden border border-border/40">
                        <div className="grid sm:grid-cols-3 gap-0">
                          <div className="bg-white flex items-center justify-center p-6 sm:rounded-l-2xl">
                            <img src={h.image} alt={h.title} className="h-36 w-full object-contain" />
                          </div>
                          <div className="sm:col-span-2 p-6">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="w-7 h-7 rounded-full bg-primary/15 text-primary font-display font-bold text-xs flex items-center justify-center shrink-0">{i + 1}</span>
                              <p className="font-display text-base font-bold text-foreground">{h.title}</p>
                            </div>
                            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 pl-10">{h.description}</p>
                            <div className="space-y-2 pl-10">
                              {h.specs.map((s) => (
                                <div key={s.label} className="text-sm">
                                  <span className="font-semibold text-primary">{s.label}: </span>
                                  <span className="text-foreground/70">{s.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {device.clinicalGraphics && (
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-5 pb-3 border-b border-border">
                    Clinical Performance Diagrams
                  </h2>
                  <div className="rounded-2xl overflow-hidden border border-border/40 bg-white">
                    <img
                      src={device.clinicalGraphics}
                      alt="Clinical performance diagrams"
                      className="w-full object-contain"
                    />
                  </div>
                </motion.div>
              )}

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
                    onClick={() => window.location.href = "/#cta"}
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
      <section id="cta-contact" className="py-16 bg-secondary/50">
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
            onClick={() => window.location.href = "/#cta"}
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}