// Texto (título, descrição, destaques) de cada projeto, em português.
//
// Passo a passo pra adicionar um projeto novo:
//   1) Em src/content/shared/profile-meta.ts, adicione um objeto ao array "projectsMeta"
//      com slug, stack, repoUrl, demoUrl, imageSrc, date, featured e type.
//   2) Aqui, adicione o texto traduzido correspondente (mesmo slug) dentro do array abaixo.
//   3) Repita o passo 2 em src/content/en/projects.ts, em inglês.

import { buildProjects } from "../shared/merge";
import type { Project } from "../types";

export const projects: Project[] = buildProjects([
  {
    slug: "pipeline-indicadores-bcb",
    title: "Pipeline de Indicadores Financeiros (BCB)",
    description:
      "Pipeline de dados em arquitetura medallion que extrai, limpa e agrega câmbio, Selic e IPCA a partir da API pública do Banco Central.",
    longDescription:
      "Ingestão da API SGS do Banco Central (câmbio, Selic e IPCA), com camadas bronze (dado bruto), silver (limpeza, tipagem, deduplicação e validação) e gold (agregações de negócio via DuckDB: variação diária e médias móveis do câmbio, IPCA acumulado em 12 meses). Testes automatizados cobrindo cada camada e atualização semanal dos dados via GitHub Actions.",
    highlights: [
      "Arquitetura medallion (bronze/silver/gold)",
      "Delta Lake sem depender de Spark",
      "Agregações de negócio em SQL (DuckDB)",
      "Testes automatizados e CI/CD",
      "Atualização semanal automática dos dados",
    ],
    typeLabel: "Pipeline de Dados",
  },
]);
