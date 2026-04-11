import React from "react";
import { Droplets, Phone, Mail, MapPin } from "lucide-react";

const techLinks = [
  { label: "AQUAPURE II", slide: 0 },
  { label: "SECRET DUO", slide: 1 },
  { label: "VOLNEWMER", slide: 2 },
  { label: "SCIZER", slide: 3 },
];

const goToSlide = (slide) => {
  window.dispatchEvent(new CustomEvent("technology:slide", { detail: { slide } }));
  document.getElementById("technology")?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-3">
              <img src="https://media.base44.com/images/public/69be488f616a63ca33a2e564/6929e9011_ChatGPTImageApr11202611_18_33AM.png" alt="HanG.O Care" className="h-10 w-auto brightness-0 invert" />
            </div>
            <p className="font-body text-xs text-background/50 mb-4">by Cluederm · Beauty Solution</p>
            <p className="font-body text-sm leading-relaxed">
              The Ultimate Face & Body Experience. Non-invasive, multifunctional, immediate results.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background uppercase tracking-wider mb-4">Technology</h4>
            <ul className="space-y-2 font-body text-sm">
              {techLinks.map(({ label, slide }) => (
                <li key={label}>
                  <button onClick={() => goToSlide(slide)} className="hover:text-background transition-colors text-left">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#solutions" className="hover:text-background transition-colors">PEEL+</a></li>
              <li><a href="#solutions" className="hover:text-background transition-colors">SEBO+</a></li>
              <li><a href="#solutions" className="hover:text-background transition-colors">REJUVE+</a></li>
              <li><a href="#solutions" className="hover:text-background transition-colors">CLEANSYS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">Telephone</span>
                  <a href="tel:+420222224315" className="hover:text-background transition-colors">+420 222 224 315</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">Email</span>
                  <a href="mailto:sales@hangocare.eu" className="hover:text-background transition-colors">sales@hangocare.eu</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">Address</span>
                  <span className="text-background/70">HanG.O Care s.r.o.<br />K Hajum 2606/2b<br />15500 Česko</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/50">
            © 2026 Cluederm. All Rights Reserved. Export Only.
          </p>
          <div className="flex items-center gap-2 font-body text-xs text-background/50">
            <Droplets className="w-3 h-3 text-primary" />
            Non-Invasive · Evidence-Based · Clinical-Grade
          </div>
        </div>
      </div>
    </footer>
  );
}