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
