// Este arquivo só define o "formato" (tipos TypeScript) de cada bloco de conteúdo do site.
// Ele NÃO tem nenhum texto pra editar — os textos ficam em src/content/pt/*.ts e src/content/en/*.ts.
// Se quiser adicionar um campo novo em alguma seção (ex: um link a mais no contato),
// é aqui que se declara o campo antes de usá-lo nos arquivos de pt/en.

// Bloco de contato — usado no rodapé, na seção "Contato" e nos botões do Hero.
export interface ContactInfo {
  email: string;
  phone?: string; // "?" = opcional, pode deixar de fora se não tiver
  linkedin: string;
  github: string;
  location: string;
}

// Cada item da seção "Experiência" (timeline de empregos).
export interface ExperienceItem {
  id: string; // identificador único (não aparece no site) — usado para casar profile-meta.ts com pt/en
  company: string;
  role: string; // cargo/título, ex: "Analista de Dados Pleno"
  startDate: string; // formato "AAAA-MM", ex: "2026-03"
  endDate: string | "present"; // "present" mostra "Atual" / "Present" no site
  bullets: string[]; // lista de responsabilidades/conquistas exibidas como tópicos
  stack?: string[]; // tecnologias usadas nessa posição (badges pequenas)
}

// Cada item da seção "Formação".
export interface EducationItem {
  id: string;
  institution: string;
  degree: string; // nome do curso
  startDate: string;
  endDate: string | "present";
  description?: string;
}

// Cada categoria de competências na seção "Skills" (ex: "Dados & BI", "Automação & Backend").
export interface SkillCategory {
  id: string;
  label: string; // título da categoria mostrado no site
  items: string[]; // lista de tecnologias/habilidades dessa categoria
}

// Idiomas falados — aparecem junto da seção de Skills.
export interface LanguageProficiency {
  language: string;
  level: string; // ex: "Nativo", "Intermediário"
}

// Cada card da seção "Projetos" (hoje ainda vazia — ver content/pt/projects.ts).
export interface Project {
  slug: string; // identificador único usado na URL/chave, sem espaços (ex: "pipeline-vendas")
  title: string;
  description: string; // resumo curto, aparece no card
  longDescription?: string; // texto mais completo, se o card tiver página/expansão própria
  highlights?: string[]; // bullets de destaque exibidos dentro do card
  stack: string[]; // tecnologias usadas no projeto
  repoUrl?: string; // link do repositório no GitHub
  demoUrl?: string; // link de demo ao vivo, se existir
  imageSrc?: string; // caminho da imagem/capa do projeto (dentro de public/images)
  imageAlt?: string; // texto alternativo da imagem (acessibilidade)
  featured?: boolean; // true = destaca esse projeto visualmente
  type?: string; // categoria livre, ex: "Pipeline de Dados", "Dashboard", "Web App"
  date: string;
}

// Dados principais do Hero (topo do site): nome, cargo, frase de efeito, resumo, foto, CV.
export interface Profile {
  name: string;
  role: string; // cargo atual, ex: "Analista de Dados Pleno"
  tagline: string; // linha curta com stack principal, logo abaixo do cargo
  headline: string; // frase grande de impacto no meio do Hero
  motto: string; // citação/lema pessoal (aparece em itálico com borda lateral)
  focusAreas: string[]; // badges de área de foco (ex: "Dados", "BI", "Engenharia de Dados")
  location: string;
  summary: string; // parágrafo de resumo profissional
  avatarSrc: string; // caminho da foto de perfil (dentro de public/images)
  cvUrl: string; // caminho do PDF do currículo (dentro de public/cv) usado no botão "Baixar CV"
}

// Cada card da seção "Diferenciais" (o que destaca o profissional).
export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
}

// Dictionary é o "pacote completo" de conteúdo de um idioma — junta todos os blocos acima.
// Quem monta isso é src/content/pt/index.ts e src/content/en/index.ts.
export interface Dictionary {
  profile: Profile;
  contact: ContactInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  languages: LanguageProficiency[];
  differentials: DifferentialItem[];
  projects: Project[];
}
