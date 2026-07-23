// Configuração de internacionalização (PT/EN) do site.
// Duas coisas moram aqui:
//  1) A lógica de carregar o "dicionário" de conteúdo certo (getDictionary) — não mexer.
//  2) O objeto "ui" logo abaixo — textos fixos de interface (menu, botões) que NÃO fazem
//     parte do conteúdo pessoal (esse fica em src/content/pt e src/content/en). Se quiser
//     mudar o texto de um botão ou item de menu, é AQUI que fica.

import type { Dictionary } from "@/content/types";

export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Carrega o conteúdo (bio, experiência, projetos etc.) do idioma pedido.
export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = locale === "pt" ? await import("@/content/pt") : await import("@/content/en");
  return mod.default;
}

// Strings fixas de UI (labels de botão, navegação) — não fazem parte do conteúdo do dono do site.
// Pra trocar um texto de menu ou botão, edite o valor correspondente em "pt" e em "en".
export const ui = {
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      skills: "Skills",
      differentials: "Diferenciais",
      projects: "Projetos",
      contact: "Contato",
    },
    downloadCv: "Baixar CV",
    viewProjects: "Ver projetos",
    viewRepo: "Repositório",
    viewDemo: "Ver demo",
    present: "Atual", // mostrado quando endDate === "present"
    periodSeparator: "a", // conecta início e fim de um período (ex: "mar. de 2026 a Atual")
    featured: "Projeto principal",
    skipToContent: "Pular para o conteúdo", // link de acessibilidade, invisível a olho nu
    switchTheme: "Alternar tema",
    switchLocale: "English", // texto do botão que troca pro outro idioma
    educationTitle: "Formação", // título da seção de Formação (não tem item próprio no menu)
    languagesTitle: "Idiomas", // título da lista de idiomas, dentro da seção Skills
    contactDescription: "Aberto a novos projetos e oportunidades de dados. Chama no e-mail ou no LinkedIn.",
    projectsEmpty: "Projetos em breve: em construção.", // mensagem exibida enquanto não há projetos cadastrados
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      differentials: "Highlights",
      projects: "Projects",
      contact: "Contact",
    },
    downloadCv: "Download CV",
    viewProjects: "View projects",
    viewRepo: "Repository",
    viewDemo: "View demo",
    present: "Present",
    periodSeparator: "to",
    featured: "Featured project",
    skipToContent: "Skip to content",
    switchTheme: "Toggle theme",
    switchLocale: "Português",
    educationTitle: "Education",
    languagesTitle: "Languages",
    contactDescription: "Open to new data projects and opportunities. Reach out by email or LinkedIn.",
    projectsEmpty: "Projects coming soon: under construction.",
  },
} as const;

export function getUi(locale: Locale) {
  return ui[locale];
}
