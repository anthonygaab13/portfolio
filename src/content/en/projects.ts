// Texto (título, descrição, destaques) de cada projeto, em inglês.
// Ao adicionar um projeto em content/pt/projects.ts, adicione a versão em inglês aqui também
// (mesmo slug). Veja content/pt/projects.ts para o passo a passo completo e um exemplo comentado.

import { buildProjects } from "../shared/merge";
import type { Project } from "../types";

export const projects: Project[] = buildProjects([]);
