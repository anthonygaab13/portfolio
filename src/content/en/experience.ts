// Texto (cargo + bullets) de cada experiência, em inglês.
// Empresa, datas e stack ficam em src/content/shared/profile-meta.ts (experienceMeta),
// casadas pelo "id". Ao adicionar um emprego novo em pt/experience.ts, adicione aqui também
// (mesmo id, texto em inglês).

import { buildExperience } from "../shared/merge";
import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = buildExperience([
  {
    // Lotus Capital — posição atual
    id: "lotus-capital",
    role: "Mid-level Data Analyst",
    bullets: [
      "Built and maintained an in-house analytics platform in Python (Flask), consuming Microsoft Fabric via SQL and rendering interactive dashboards with AuC, NNM, acquisition, churn, account activation and NPS metrics.",
      "Modeled and structured data on Microsoft Fabric using medallion architecture (ingestion → processing → consumption), standardizing wealth management business rules.",
      "Built strategic Power BI dashboards (DAX) — including FX & Commission, Banking and sales acceleration program models — with targets, YTD attainment and executive scorecards.",
      "Automated pipelines and queries in Python (pyodbc + Azure AD authentication), with automatic report exports and scheduled emails.",
      "Defined business rules and critical metrics (net churn, external vs. base acquisition, product mix, cohort and activation).",
      "Ran strategic infrastructure capacity analyses (Microsoft Fabric / Azure) and evaluated corporate AI adoption.",
    ],
  },
  {
    // Grupo Loyalty
    id: "grupo-loyalty",
    role: "Reports and Dashboard Analyst | Junior",
    bullets: [
      "Structured and improved Power BI indicators for HR, Marketing and Operations, standardizing business rules and data modeling.",
      "Built Python automations to collect data from affiliates and external platforms, integrating via APIs and web scraping.",
      "Automatically consolidated data into structured Google Sheets bases, reducing reliance on manual processes.",
      "Cleaned, validated and organized datasets before they were published in reports.",
    ],
  },
  {
    // Sicoob Central Crediminas
    id: "sicoob",
    role: "Software Development Intern",
    bullets: [
      "Analyzed legacy web applications, mapping business rules and proposing structural improvements.",
      "Optimized routines and scripts, improving startup performance and execution of critical features.",
      "Wrote and optimized SQL queries in MySQL, improving execution time and efficiency.",
      "Supported integration between the application and the database.",
    ],
  },
  {
    // MRV&CO — Data & Analytics Assistant
    id: "mrv-data-analytics",
    role: "Data & Analytics Assistant",
    bullets: [
      "Wrote SQL queries against the corporate database to serve regional requests.",
      "Built Power BI dashboards to track construction industry indicators.",
      "Identified and automated manual data consolidation processes.",
      "Provided technical support interpreting and validating data from internal systems.",
    ],
  },
  {
    // MRV&CO — Process Assistant
    id: "mrv-process",
    role: "Process Assistant",
    bullets: [
      "Managed contracts, permits and legal documents in SAP.",
      "Built Excel spreadsheets with advanced formulas (VLOOKUP, IF, filters, consolidations) for contract data.",
      "Registered and updated vendor records in corporate systems.",
    ],
  },
  {
    // MRV&CO — General Office Assistant (sem bullets — primeira posição, sem destaques técnicos)
    id: "mrv-office",
    role: "General Office Assistant",
    bullets: [],
  },
]);
