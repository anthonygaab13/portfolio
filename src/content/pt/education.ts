// Texto (nome do curso + descrição opcional) de cada formação, em português.
// Instituição e datas ficam em src/content/shared/profile-meta.ts (array educationMeta),
// casadas pelo campo "id". Pra adicionar uma formação nova, crie a entrada lá primeiro.

import { buildEducation } from "../shared/merge";
import type { EducationItem } from "../types";

export const education: EducationItem[] = buildEducation([
  {
    id: "puc-minas",
    degree: "Análise e Desenvolvimento de Sistemas",
  },
  {
    id: "senai-ti",
    degree: "Técnico em TI",
  },
  {
    id: "fundacao-bradesco",
    degree: "Tecnologia da Informação",
  },
  {
    id: "senai-industria40",
    degree: "Indústria 4.0",
  },
]);
