import { buildExperience } from "../shared/merge";
import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = buildExperience([
  {
    id: "cnh-industrial",
    role: "Mid-level Data Analyst (Independent Contractor)",
    bullets: [
      // Placeholder — replace with the actual responsibilities on the CNH Industrial project.
      "Working independently as a data analyst providing services to CNH Industrial.",
    ],
  },
  {
    id: "lopes-capital",
    role: "Mid-level Data Analyst",
    bullets: [
      "BI and Analytics Engineering in the financial market.",
      "Medallion architecture modeling (ingestion, processing, consumption) on Microsoft Fabric.",
      "Strategic dashboards in Power BI with DAX.",
      "Pipeline automation in Python (pyodbc + Azure AD).",
      "Definition of critical metrics (churn, acquisition, NPS, activation).",
      "Integration with corporate APIs via OAuth2 and Microsoft Graph API.",
    ],
  },
]);
