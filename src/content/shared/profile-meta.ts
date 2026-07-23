// Dados que NÃO mudam entre português e inglês: links, datas, telefone, foto, ordem dos itens.
// A ideia é não repetir essas informações duas vezes (uma em pt, outra em en) — só o texto
// (cargo, descrições, bullets) é que muda por idioma, e isso fica em content/pt/*.ts e content/en/*.ts.
//
// Como funciona o "encaixe": cada item aqui tem um "id" (ou "slug", no caso de projetos).
// Em content/pt/experience.ts (e o equivalente em en/), existe uma entrada com o MESMO id
// contendo o texto traduzido. A função buildExperience (em shared/merge.ts) junta as duas partes.
// Ou seja: pra mudar datas/stack/empresa → mexe aqui. Pra mudar o texto (cargo, bullets) → mexe em pt/en.

// Caminho da foto de perfil usada no Hero. Pra trocar a foto, basta substituir o arquivo
// em public/images/avatar.jpg (mantendo o mesmo nome) ou apontar para outro caminho aqui.
export const avatarSrc = "/images/avatar.jpg";

// Dados de contato compartilhados entre os dois idiomas (telefone e links não se traduzem).
export const contactBase = {
  email: "anthonygabrieleg09@gmail.com",
  phone: "+55 31 99708-3924", // usado também pro link do WhatsApp (o número é convertido automaticamente)
  linkedin: "https://www.linkedin.com/in/anthony-gabriel-3858631b9",
  github: "https://github.com/anthonygaab13",
  instagram: "https://www.instagram.com/anthonygb.eu/",
};

export interface ExperienceMeta {
  id: string;
  company: string;
  startDate: string; // formato "AAAA-MM"
  endDate: string | "present"; // "present" = emprego atual
  stack?: string[]; // tecnologias usadas nessa posição (aparecem como badges)
}

// Lista de experiências profissionais, da mais recente para a mais antiga.
// Pra adicionar um emprego novo: adiciona um objeto aqui (com id único) E o texto
// traduzido correspondente (role + bullets) em content/pt/experience.ts e content/en/experience.ts.
export const experienceMeta: ExperienceMeta[] = [
  // Próxima posição (CNH Industrial ou Inter) entra aqui quando o contrato realmente começar.
  {
    id: "lotus-capital",
    company: "Lotus Capital",
    startDate: "2026-03",
    endDate: "present",
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

// Lista de formações, da mais recente para a mais antiga.
// Pra adicionar: objeto aqui (id único) + texto (degree/description) em content/pt/education.ts e content/en/education.ts.
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
  stack: string[]; // tecnologias usadas no projeto
  repoUrl?: string; // link do repositório GitHub
  demoUrl?: string; // link de demo ao vivo, se tiver
  imageSrc?: string; // caminho da imagem de capa (dentro de public/images)
  date: string;
  featured?: boolean; // true = destaca o projeto no grid
  type: string; // chave da categoria — o rótulo exibido (label) vem de content/pt|en/projects.ts
}

// Lista de projetos que aparecem na seção "Projetos" do site.
// HOJE ESTÁ VAZIA DE PROPÓSITO — é o placeholder até os primeiros projetos de dados
// serem publicados no GitHub. Pra adicionar um projeto:
//   1) cria um objeto aqui com slug único, stack, links, imagem etc.
//   2) adiciona o texto traduzido (title, description, highlights...) em
//      content/pt/projects.ts e content/en/projects.ts dentro do array do buildProjects([...]).
export const projectsMeta: ProjectMeta[] = [
  // Placeholder — substituir pelos projetos reais.
];
