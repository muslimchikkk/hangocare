import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Devices", "Solutions", "Results"];

  const scrollTo = (id) => {
    const sectionId = id === "Devices" ? "devices" : id.toLowerCase();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 select-none">
            <img src="https://media.base44.com/images/public/69be488f616a63ca33a2e564/6929e9011_ChatGPTImageApr11202611_18_33AM.png" alt="HanG.O Care" className="h-9 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => {
                if (window.location.pathname !== "/") { window.location.href = "/#cta"; }
                else scrollTo("cta");
              }}
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground font-body font-medium rounded-full px-6"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Request a Demo
            </Button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="block w-full text-left py-2 text-base font-body font-medium text-foreground"
                >
                  {link}
                </button>
              ))}
              <Button
                onClick={() => {
                  if (window.location.pathname !== "/") { window.location.href = "/#cta"; }
                  else scrollTo("cta");
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body rounded-full mt-2"
              >
                Request a Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}