// Seção "Diferenciais": grid de cards curtos destacando pontos fortes do profissional.
// Os cards vêm de dict.differentials (src/content/pt/differentials.ts e content/en/differentials.ts).

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Differentials({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);

  return (
    <SectionContainer id="differentials">
      <SectionHeading eyebrow="05" title={t.nav.differentials} />
      <div className="grid gap-4 sm:grid-cols-2">
        {dict.differentials.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
