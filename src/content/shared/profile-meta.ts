// Dados não-traduzíveis: mesmos em qualquer idioma (links, datas, imagens, ordem).
// Os arquivos content/pt e content/en importam isso e mesclam com o texto traduzido.

// Placeholder — trocar por uma foto real em public/images/avatar.jpg (ou .png).
export const avatarSrc = "/images/avatar.png";

export const contactBase = {
  email: "anthonygabrieleg09@gmail.com",
  phone: "+55 31 99708-3924",
  linkedin: "https://www.linkedin.com/in/anthonygabriel",
  github: "https://github.com/anthonygaab13",
};

export interface ExperienceMeta {
  id: string;
  company: string;
  startDate: string;
  endDate: string | "present";
  stack?: string[];
}

export const experienceMeta: ExperienceMeta[] = [
  {
    id: "cnh-industrial",
    company: "CNH Industrial",
    startDate: "2026-07",
    endDate: "present",
    stack: [],
  },
  {
    id: "lopes-capital",
    company: "Lopes Capital",
    startDate: "2026-03",
    endDate: "2026-07",
    stack: [],
  },
];

export interface EducationMeta {
  id: string;
  institution: string;
  startDate: string;
  endDate: string | "present";
}

export const educationMeta: EducationMeta[] = [
  {
    id: "puc-minas",
    institution: "PUC Minas",
    startDate: "2023",
    endDate: "2025",
  },
  {
    id: "senai-ti",
    institution: "Escola SENAI",
    startDate: "2020",
    endDate: "2021",
  },
];

export interface ProjectMeta {
  slug: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
  date: string;
  featured?: boolean;
  type: string; // chave da categoria — o rótulo exibido vem de projectTypeLabels por locale
}

export const projectsMeta: ProjectMeta[] = [
  // Placeholder — substituir pelos projetos reais.
];
