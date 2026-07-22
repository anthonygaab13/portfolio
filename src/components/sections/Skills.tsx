// Seção "Skills": grid de categorias de competências + lista de idiomas falados.
// Categorias vêm de dict.skills, idiomas de dict.languages
// (src/content/pt/skills.ts e src/content/en/skills.ts). Título "Idiomas"/"Languages"
// vem de t.languagesTitle (src/lib/i18n.ts).

import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Skills({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);

  return (
    <SectionContainer id="skills">
      <SectionHeading eyebrow="04" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {dict.skills.map((category) => (
          <div key={category.id}>
            <h3 className="mb-2 font-mono text-sm text-muted-foreground">{category.label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {category.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="mb-2 font-mono text-sm text-muted-foreground">{t.languagesTitle}</h3>
        <div className="flex flex-wrap gap-4">
          {dict.languages.map((lang) => (
            <p key={lang.language} className="text-sm">
              <span className="font-medium">{lang.language}</span>{" "}
              <span className="text-muted-foreground">— {lang.level}</span>
            </p>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
