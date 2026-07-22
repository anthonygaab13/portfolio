// Textos do Hero (topo do site) em português.
// Pra trocar a foto: veja avatarSrc em src/content/shared/profile-meta.ts (não aqui).
// Pra trocar o PDF do currículo: troque o arquivo em public/cv/ e/ou o caminho em cvUrl abaixo.

import { avatarSrc } from "../shared/profile-meta";
import type { Profile } from "../types";

export const profile: Profile = {
  name: "Anthony Gabriel",
  role: "Analista de Dados Pleno", // cargo atual, aparece logo abaixo do nome
  tagline: "Microsoft Fabric • Power BI • Python • SQL | Analytics Engineering & Data Engineering", // linha de stack, abaixo do cargo
  headline: "Dados confiáveis e pipelines sólidos para decisões de negócio mais rápidas.", // frase grande de impacto
  motto:
    "Uno análise, automação e engenharia de dados para transformar informação dispersa em decisões claras e rastreáveis.", // citação em itálico
  focusAreas: ["Dados", "BI", "Automação", "Engenharia de Dados"], // badges de área de foco
  location: "Belo Horizonte, Brasil",
  summary:
    "Analista de dados atuando de forma autônoma, com experiência em Business Intelligence no setor financeiro: construção de plataformas de dados end-to-end, arquitetura medallion, pipelines de ETL e dashboards estratégicos. Aprofundando conhecimento em Engenharia de Dados para evoluir de análise para construção de infraestrutura de dados.", // parágrafo de resumo
  avatarSrc,
  cvUrl: "/cv/Anthony_Gabriel_CV_PT.pdf",
};
