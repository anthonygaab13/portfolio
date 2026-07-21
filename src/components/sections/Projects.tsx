import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Projects({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);
  const emptyMessage =
    locale === "pt"
      ? "Projetos em breve — em construção."
      : "Projects coming soon — under construction.";

  return (
    <SectionContainer id="projects">
      <SectionHeading eyebrow="06" title={t.nav.projects} />
      {dict.projects.length === 0 ? (
        <p className="text-sm text-muted-foreground">{emptyMessage}</p>
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
