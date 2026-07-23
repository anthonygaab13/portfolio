// Monta a página principal do site, juntando cada seção na ordem em que aparecem na tela.
// Pra reordenar seções (ex: colocar Projetos antes de Skills), basta mudar a ordem aqui.
// Pra adicionar uma seção nova, crie o componente em components/sections/ e importe/insira aqui.
// Não tem texto pra editar neste arquivo — os textos ficam em src/content/pt e src/content/en.

import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/shared/Reveal";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Differentials } from "@/components/sections/Differentials";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  return (
    <>
      <Hero locale={locale} />
      <Separator />
      <Reveal>
        <Experience locale={locale} />
      </Reveal>
      <Separator />
      <Reveal>
        <Education locale={locale} />
      </Reveal>
      <Separator />
      <Reveal>
        <Skills locale={locale} />
      </Reveal>
      <Separator />
      <Reveal>
        <Differentials locale={locale} />
      </Reveal>
      <Separator />
      <Reveal>
        <Projects locale={locale} />
      </Reveal>
      <Separator />
      <Reveal>
        <Contact locale={locale} />
      </Reveal>
    </>
  );
}
