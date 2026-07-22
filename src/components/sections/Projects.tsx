// Seção "Projetos": grid de cards de projeto, ou uma mensagem de "em breve" enquanto
// dict.projects estiver vazio (ver src/content/pt/projects.ts e content/en/projects.ts).
// A mensagem de "em construção" vem de t.projectsEmpty (src/lib/i18n.ts) — assim que o
// primeiro projeto for cadastrado, essa mensagem some sozinha e o grid aparece no lugar.

import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Projects({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);

  return (
    <SectionContainer id="projects">
      <SectionHeading eyebrow="06" title={t.nav.projects} />
      {dict.projects.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t.projectsEmpty}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {dict.projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featuredLabel={t.featured}
              viewRepoLabel={t.viewRepo}
              viewDemoLabel={t.viewDemo}
            />
          ))}
        </div>
      )}
    </SectionContainer>
  );
}
