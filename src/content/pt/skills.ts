// Categorias de competências (seção "Skills") e idiomas falados, em português.
// Cada categoria vira um card com um título (label) e uma lista de badges (items).
// Pra adicionar uma categoria nova, basta adicionar um objeto ao array "skills" abaixo
// (o "id" só precisa ser único, não aparece no site).

import type { LanguageProficiency, SkillCategory } from "../types";

export const skills: SkillCategory[] = [
  {
    id: "data-bi",
    label: "Dados & BI",
    items: [
      "Microsoft Fabric",
      "Power BI",
      "DAX",
      "Analytics Engineering",
      "Modelagem Dimensional",
      "Arquitetura Medallion",
      "ETL",
      "KPIs & Métricas",
    ],
  },
  {
    id: "data-engineering",
    label: "Engenharia de Dados",
    items: [
      "Apache Spark",
      "Delta Lake",
      "Pipelines de dados",
      "SQL",
      "Modelagem de dados",
    ],
  },
  {
    id: "backend-automation",
    label: "Automação & Backend",
    items: ["Python", "Flask", "pyodbc", "SQL Server", "MySQL", "APIs REST", "OAuth2"],
  },
  {
    id: "tools-cloud",
    label: "Ferramentas & Cloud",
    items: ["Azure", "Azure DevOps", "Microsoft Graph API", "AWS", "Git", "Vercel"],
  },
  {
    id: "ai",
    label: "IA Aplicada",
    items: ["Azure OpenAI", "Claude", "MCP", "IA aplicada a dados"],
  },
];

// Idiomas falados, exibidos junto da seção de Skills.
export const languages: LanguageProficiency[] = [
  { language: "Português", level: "Nativo" },
  { language: "Inglês", level: "Intermediário" },
  { language: "Espanhol", level: "Básico" },
];
