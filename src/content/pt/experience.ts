import { buildExperience } from "../shared/merge";
import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = buildExperience([
  {
    id: "cnh-industrial",
    role: "Analista de Dados Pleno (Prestação de Serviço)",
    bullets: [
      // Placeholder — substituir pelas responsabilidades reais no projeto CNH Industrial.
      "Atuação autônoma como analista de dados prestando serviço para a CNH Industrial.",
    ],
  },
  {
    id: "lopes-capital",
    role: "Analista de Dados Pleno",
    bullets: [
      "BI e Analytics Engineering no mercado financeiro.",
      "Modelagem em arquitetura medallion (ingestão, tratamento, consumo) no Microsoft Fabric.",
      "Dashboards estratégicos em Power BI com DAX.",
      "Automação de pipelines em Python (pyodbc + Azure AD).",
      "Definição de métricas críticas (churn, captação, NPS, ativação).",
      "Integração com APIs corporativas via OAuth2 e Microsoft Graph API.",
    ],
  },
]);
