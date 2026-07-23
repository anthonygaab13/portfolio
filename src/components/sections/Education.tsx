// Seção "Formação": grid de cards com instituição, curso e período.
// Título da seção vem de t.educationTitle (src/lib/i18n.ts). Os cards em si vêm de
// dict.education (src/content/pt/education.ts e src/content/en/education.ts).

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";
import { formatPeriodDate } from "@/lib/utils";

export async function Education({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);

  return (
    <SectionContainer id="education">
      <SectionHeading eyebrow="03" title={t.educationTitle} />
      <div className="grid gap-4 sm:grid-cols-2">
        {dict.education.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="text-base">{item.institution}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.degree}</p>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-xs text-muted-foreground">
                {formatPeriodDate(item.startDate, locale)} {t.periodSeparator}{" "}
                {item.endDate === "present" ? t.present : formatPeriodDate(item.endDate, locale)}
              </p>
              {item.description && (
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
