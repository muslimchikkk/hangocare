import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/70 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-xl font-semibold text-background mb-4">Lumière</h3>
            <p className="font-body text-sm leading-relaxed">
              Empowering women with clinically-proven beauty technology. Because you deserve to glow.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="hover:text-background transition-colors">The Device</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Activation Serum</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Bundles</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-background uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-background transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-background transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pinterest</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/50">
            © 2026 Lumière Beauty. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-body text-xs text-background/50">
            Made with <Heart className="w-3 h-3 fill-primary text-primary mx-1" /> for women everywhere
          </div>
        </div>
      </div>
    </footer>
  );
}