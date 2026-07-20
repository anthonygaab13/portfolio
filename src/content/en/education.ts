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
]);
