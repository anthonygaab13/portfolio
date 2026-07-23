// Texto (cargo + bullets) de cada experiência profissional, em português.
// Empresa, datas e stack tecnológica NÃO ficam aqui — ficam em src/content/shared/profile-meta.ts
// (array experienceMeta), casadas pelo campo "id". Pra adicionar um emprego novo, crie a entrada
// lá primeiro e depois adicione o bloco correspondente aqui (mesmo id).
// A ordem de exibição no site segue a ordem de experienceMeta, não a ordem daqui.

import { buildExperience } from "../shared/merge";
import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = buildExperience([
  {
    // Lotus Capital — posição atual
    id: "lotus-capital",
    role: "Analista de Dados Pleno",
    bullets: [
      "Desenvolvimento e manutenção de uma plataforma de analytics própria em Python (Flask), consumindo o Microsoft Fabric via SQL e renderizando dashboards interativos com indicadores de AuC, NNM, captação, churn, ativação de contas e NPS.",
      "Modelagem e estruturação de dados sobre o Microsoft Fabric em arquitetura medallion (ingestão → tratamento → consumo), padronizando regras de negócio de gestão de patrimônio.",
      "Construção de dashboards estratégicos em Power BI (DAX), incluindo modelos de Câmbio & Comissão, Banking e programas de aceleração comercial, com metas, atingimento YTD e scorecards executivos.",
      "Automação de pipelines e consultas em Python (pyodbc + autenticação Azure AD), com exportação automática de relatórios e envio de e-mails periódicos.",
      "Definição de regras de negócio e métricas críticas (churn líquido, captação externa vs. base, mix de produtos, cohort e ativação).",
      "Análises estratégicas de capacidade de infraestrutura (Microsoft Fabric / Azure) e avaliação de adoção de IA corporativa.",
    ],
  },
  {
    // Grupo Loyalty
    id: "grupo-loyalty",
    role: "Analista de Relatórios e Dashboards | Júnior",
    bullets: [
      "Estruturação e aprimoramento de indicadores em Power BI para RH, Marketing e Operações, padronizando regras de negócio e modelagem de dados.",
      "Automação em Python para coleta de dados de afiliados e plataformas externas, com integração via APIs e web scraping.",
      "Consolidação automática de dados em bases estruturadas no Google Sheets, reduzindo dependência de processos manuais.",
      "Tratamento, validação e organização de bases antes da disponibilização em relatórios.",
    ],
  },
  {
    // Sicoob Central Crediminas
    id: "sicoob",
    role: "Estagiário de Desenvolvimento de Software",
    bullets: [
      "Análise de aplicações web legadas, mapeando regras de negócio e propondo melhorias estruturais.",
      "Otimização de rotinas e scripts, contribuindo para performance na inicialização e execução de funcionalidades críticas.",
      "Criação e otimização de consultas SQL em ambiente MySQL, melhorando tempo de execução e eficiência.",
      "Apoio à integração entre aplicação e banco de dados.",
    ],
  },
  {
    // MRV&CO — Assistente de Dados e Analytics
    id: "mrv-data-analytics",
    role: "Assistente de Dados e Analytics",
    bullets: [
      "Consultas SQL em banco de dados corporativo para atendimento de demandas das regionais.",
      "Dashboards em Power BI para acompanhamento de indicadores da área de construção civil.",
      "Identificação e automatização de processos manuais de consolidação de dados.",
      "Suporte técnico na interpretação e validação de dados dos sistemas internos.",
    ],
  },
  {
    // MRV&CO — Assistente de Processos
    id: "mrv-process",
    role: "Assistente de Processos",
    bullets: [
      "Controle e gestão de contratos, alvarás e documentos legais no sistema SAP.",
      "Planilhas em Excel com fórmulas avançadas (PROCV, SE, filtros, consolidações) para dados contratuais.",
      "Cadastro e atualização de vendedores e informações nos sistemas corporativos.",
    ],
  },
  {
    // MRV&CO — Assistente Geral de Escritório (sem bullets — primeira posição, sem destaques técnicos)
    id: "mrv-office",
    role: "Assistente Geral de Escritório",
    bullets: [],
  },
]);
