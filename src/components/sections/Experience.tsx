// Seção "Experiência": timeline vertical com cada emprego (empresa, cargo, período, bullets, stack).
// Não tem texto fixo pra editar aqui — tudo vem de dict.experience
// (src/content/pt/experience.ts e src/content/en/experience.ts).

import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline, TimelineItem } from "@/components/shared/Timeline";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";
import { formatPeriodDate } from "@/lib/utils";

export async function Experience({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);

  return (
    <SectionContainer id="experience">
      {/* eyebrow="02" é só o numerozinho decorativo acima do título — segue a ordem das seções na página */}
      <SectionHeading eyebrow="02" title={t.nav.experience} />
      <Timeline>
        {dict.experience.map((item) => {
          const period = `${formatPeriodDate(item.startDate, locale)} ${t.periodSeparator} ${
            item.endDate === "present" ? t.present : formatPeriodDate(item.endDate, locale)
          }`;
          return (
            <TimelineItem
              key={item.id}
              title={item.company}
              subtitle={item.role}
              period={period}
              badge={item.endDate === "present" ? <Badge variant="secondary">{t.present}</Badge> : undefined}
            >
              {item.bullets.length > 0 && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
              {item.stack && item.stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </TimelineItem>
          );
        })}
      </Timeline>
    </SectionContainer>
  );
}
