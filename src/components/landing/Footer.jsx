import React from "react";
import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-xl font-bold text-background">HanG.O</span>
              <span className="font-body text-xl font-light tracking-widest text-primary ml-1">Care</span>
            </div>
            <p className="font-body text-xs text-background/50 mb-4">by Cluederm · Beauty Solution</p>
            <p className="font-body text-sm leading-relaxed">
              The Ultimate Face & Body Experience. Non-invasive, multifunctional, immediate results.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background uppercase tracking-wider mb-4">Technology</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#handpieces" className="hover:text-background transition-colors">AQUAPEEL</a></li>
              <li><a href="#handpieces" className="hover:text-background transition-colors">ELECTROPORATION</a></li>
              <li><a href="#handpieces" className="hover:text-background transition-colors">MICRO-CURRENT</a></li>
              <li><a href="#handpieces" className="hover:text-background transition-colors">COOLING / HEATING</a></li>
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
            <ul className="space-y-2 font-body text-sm">
              <li><a href="tel:+82-2-517-2114" className="hover:text-background transition-colors">+82-2-517-2114</a></li>
              <li><a href="mailto:info@cluederm.com" className="hover:text-background transition-colors">info@cluederm.com</a></li>
              <li><a href="https://cluederm.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">cluederm.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/50">
            © 2026 Cluederm. All Rights Reserved. Export Only.
          </p>
          <div className="flex items-center gap-2 font-body text-xs text-background/50">
            <Droplets className="w-3 h-3 text-primary" />
            Hydrate · Exfoliate · Radiate
          </div>
        </div>
      </div>
    </footer>
  );
}