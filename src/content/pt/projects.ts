// Texto (título, descrição, destaques) de cada projeto, em português.
// Hoje está vazio de propósito — é aqui que os projetos de dados vão entrar quando forem publicados.
//
// Passo a passo pra adicionar um projeto:
//   1) Em src/content/shared/profile-meta.ts, adicione um objeto ao array "projectsMeta"
//      com slug, stack, repoUrl, demoUrl, imageSrc, date, featured e type.
//   2) Aqui, adicione o texto traduzido correspondente (mesmo slug) dentro do array abaixo.
//   3) Repita o passo 2 em src/content/en/projects.ts, em inglês.
//
// Exemplo (comentado) do formato de uma entrada:
// {
//   slug: "pipeline-vendas",             // precisa bater com o slug em profileMeta.projectsMeta
//   title: "Pipeline de Vendas",
//   description: "Pipeline de ETL que consolida dados de vendas de múltiplas fontes.",
//   longDescription: "Descrição mais completa do projeto, se necessário.",
//   highlights: ["Ingestão automatizada", "Camada medallion", "Testes de qualidade de dados"],
//   imageAlt: "Diagrama do pipeline de vendas",
//   typeLabel: "Pipeline de Dados",
// },

import { buildProjects } from "../shared/merge";
import type { Project } from "../types";

export const projects: Project[] = buildProjects([]);
