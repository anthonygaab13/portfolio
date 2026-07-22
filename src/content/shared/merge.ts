// Funções que "colam" os dados fixos (profile-meta.ts) com o texto traduzido (pt/*.ts, en/*.ts),
// casando cada item pelo id (ou slug, no caso de projetos).
// Você normalmente não precisa mexer neste arquivo — ele só é usado dentro de
// content/pt/experience.ts, content/pt/education.ts e content/pt/projects.ts (e os equivalentes em en/).
// Se um id existir em profile-meta.ts mas faltar o texto traduzido correspondente, o build quebra
// de propósito (throw), pra pegar o erro de "esqueci de traduzir" antes de ir pro ar.

import { educationMeta, experienceMeta, projectsMeta } from "./profile-meta";
import type { EducationItem, ExperienceItem, Project } from "../types";

export interface TranslatedExperience {
  id: string;
  role: string;
  bullets: string[];
}

export function buildExperience(translated: TranslatedExperience[]): ExperienceItem[] {
  return experienceMeta.map((meta) => {
    const t = translated.find((item) => item.id === meta.id);
    if (!t) {
      throw new Error(`Missing translated experience for id "${meta.id}"`);
    }
    return { ...meta, role: t.role, bullets: t.bullets };
  });
}

export interface TranslatedEducation {
  id: string;
  degree: string;
  description?: string;
}

export function buildEducation(translated: TranslatedEducation[]): EducationItem[] {
  return educationMeta.map((meta) => {
    const t = translated.find((item) => item.id === meta.id);
    if (!t) {
      throw new Error(`Missing translated education for id "${meta.id}"`);
    }
    return { ...meta, degree: t.degree, description: t.description };
  });
}

export interface TranslatedProject {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  imageAlt?: string;
  typeLabel: string; // rótulo da categoria já traduzido, ex: "Pipeline de Dados" / "Data Pipeline"
}

export function buildProjects(translated: TranslatedProject[]): Project[] {
  return projectsMeta.map((meta) => {
    const t = translated.find((item) => item.slug === meta.slug);
    if (!t) {
      throw new Error(`Missing translated project for slug "${meta.slug}"`);
    }
    return {
      slug: meta.slug,
      stack: meta.stack,
      repoUrl: meta.repoUrl,
      demoUrl: meta.demoUrl,
      imageSrc: meta.imageSrc,
      date: meta.date,
      featured: meta.featured,
      type: t.typeLabel,
      title: t.title,
      description: t.description,
      longDescription: t.longDescription,
      highlights: t.highlights,
      imageAlt: t.imageAlt,
    };
  });
}
