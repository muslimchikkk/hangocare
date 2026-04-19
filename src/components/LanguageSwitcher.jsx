import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.startsWith("en") ? "en" : "cs";

  const toggle = () => {
    i18n.changeLanguage(current === "cs" ? "en" : "cs");
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-sm font-body font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 rounded-sm px-3 py-1.5 bg-white/60 hover:bg-white/80"
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{current === "cs" ? t("lang_switcher.en") : t("lang_switcher.cs")}</span>
    </button>
  );
}