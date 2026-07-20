import type { Dictionary } from "@/content/types";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = locale === "pt" ? await import("@/content/pt") : await import("@/content/en");
  return mod.default;
}

// Strings fixas de UI (labels de botão, navegação) — não fazem parte do conteúdo do dono do site.
export const ui = {
  pt: {
    nav: { about: "Sobre", experience: "Experiência", skills: "Skills", projects: "Projetos", contact: "Contato" },
    downloadCv: "Baixar CV",
    viewRepo: "Repositório",
    viewDemo: "Ver demo",
    present: "Atual",
    skipToContent: "Pular para o conteúdo",
    switchTheme: "Alternar tema",
    switchLocale: "English",
  },
  en: {
    nav: { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", contact: "Contact" },
    downloadCv: "Download CV",
    viewRepo: "Repository",
    viewDemo: "View demo",
    present: "Present",
    skipToContent: "Skip to content",
    switchTheme: "Toggle theme",
    switchLocale: "Português",
  },
} as const;

export function getUi(locale: Locale) {
  return ui[locale];
}
