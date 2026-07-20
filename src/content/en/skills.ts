import type { LanguageProficiency, SkillCategory } from "../types";

export const skills: SkillCategory[] = [
  {
    id: "data-bi",
    label: "Data & BI",
    items: [
      "Microsoft Fabric",
      "Power BI",
      "DAX",
      "Analytics Engineering",
      "Dimensional Modeling",
      "Medallion Architecture",
      "ETL",
      "KPIs & Metrics",
    ],
  },
  {
    id: "data-engineering",
    label: "Data Engineering",
    items: ["Apache Spark", "Delta Lake", "Data pipelines", "SQL", "Data modeling"],
  },
  {
    id: "backend-automation",
    label: "Automation & Backend",
    items: ["Python", "Flask", "pyodbc", "SQL Server", "MySQL", "REST APIs", "OAuth2"],
  },
  {
    id: "tools-cloud",
    label: "Tools & Cloud",
    items: ["Azure", "Azure DevOps", "Microsoft Graph API", "AWS", "Git", "Vercel"],
  },
  {
    id: "ai",
    label: "Applied AI",
    items: ["Azure OpenAI", "Claude", "MCP", "AI applied to data"],
  },
];

export const languages: LanguageProficiency[] = [
  { language: "Portuguese", level: "Native" },
  { language: "English", level: "Intermediate" },
  { language: "Spanish", level: "Basic" },
];
