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

export const languages: LanguageProficiency[] = [
  { language: "Português", level: "Nativo" },
  { language: "Inglês", level: "Intermediário" },
  { language: "Espanhol", level: "Básico" },
];
