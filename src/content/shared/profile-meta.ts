// Dados não-traduzíveis: mesmos em qualquer idioma (links, datas, imagens, ordem).
// Os arquivos content/pt e content/en importam isso e mesclam com o texto traduzido.

export const avatarSrc = "/images/avatar.jpg";

export const contactBase = {
  email: "anthonygabrieleg09@gmail.com",
  phone: "+55 31 99708-3924",
  linkedin: "https://www.linkedin.com/in/anthony-gabriel-3858631b9",
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
    id: "lotus-capital",
    company: "Lotus Capital",
    startDate: "2026-03",
    endDate: "2026-07",
    stack: ["Microsoft Fabric", "Power BI", "DAX", "Python", "Flask", "SQL", "ETL", "Azure"],
  },
  {
    id: "grupo-loyalty",
    company: "Grupo Loyalty",
    startDate: "2025-09",
    endDate: "2026-03",
    stack: ["Power BI", "Python", "SQL", "AWS", "Google Sheets", "Excel"],
  },
  {
    id: "sicoob",
    company: "Sicoob Central Crediminas",
    startDate: "2024-08",
    endDate: "2025-08",
    stack: [".NET", "SQL", "MySQL"],
  },
  {
    id: "mrv-data-analytics",
    company: "MRV&CO",
    startDate: "2023-10",
    endDate: "2024-03",
    stack: ["SQL", "Power BI", "Excel"],
  },
  {
    id: "mrv-process",
    company: "MRV&CO",
    startDate: "2023-01",
    endDate: "2023-10",
    stack: ["Excel", "SAP"],
  },
  {
    id: "mrv-office",
    company: "MRV&CO",
    startDate: "2021-12",
    endDate: "2023-01",
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
  {
    id: "fundacao-bradesco",
    institution: "Fundação Bradesco",
    startDate: "2021",
    endDate: "2021",
  },
  {
    id: "senai-industria40",
    institution: "Escola SENAI",
    startDate: "2020",
    endDate: "2020",
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
