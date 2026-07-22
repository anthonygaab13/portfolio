// Texto (nome do curso) de cada formação, em inglês. Instituição e datas ficam em
// src/content/shared/profile-meta.ts (educationMeta), casadas pelo "id".

import { buildEducation } from "../shared/merge";
import type { EducationItem } from "../types";

export const education: EducationItem[] = buildEducation([
  {
    id: "puc-minas",
    degree: "Systems Analysis and Development",
  },
  {
    id: "senai-ti",
    degree: "IT Technician",
  },
  {
    id: "fundacao-bradesco",
    degree: "Information Technology",
  },
  {
    id: "senai-industria40",
    degree: "Industry 4.0",
  },
]);
