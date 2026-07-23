// Texto (título, descrição, destaques) de cada projeto, em inglês.
// Ao adicionar um projeto em content/pt/projects.ts, adicione a versão em inglês aqui também
// (mesmo slug). Veja content/pt/projects.ts para o passo a passo completo.

import { buildProjects } from "../shared/merge";
import type { Project } from "../types";

export const projects: Project[] = buildProjects([
  {
    slug: "pipeline-indicadores-bcb",
    title: "Financial Indicators Pipeline (BCB)",
    description:
      "A medallion-architecture data pipeline that extracts, cleans and aggregates FX rate, Selic and IPCA data from Brazil's Central Bank public API.",
    longDescription:
      "Ingests the Central Bank's SGS API (FX rate, Selic and IPCA), with bronze (raw data), silver (cleaning, typing, deduplication and validation), and gold layers (business aggregations via DuckDB: daily FX variation and moving averages, 12-month accumulated IPCA). Automated tests cover every layer, weekly data refresh via GitHub Actions, and a Next.js dashboard with hand-built charts to visualize it all.",
    highlights: [
      "Medallion architecture (bronze/silver/gold)",
      "Delta Lake without depending on Spark",
      "Business aggregations in SQL (DuckDB)",
      "Automated tests and CI/CD",
      "Automatic weekly data refresh",
      "Visual dashboard in Next.js with custom charts",
      "Automated insights, live calculator and transparent methodology",
    ],
    typeLabel: "Data Pipeline",
  },
]);
