// Cabeçalho fixo no topo (sticky): nome (link pro topo), navegação em pills, troca de
// idioma/tema e o menu mobile. Os textos dos itens de menu vêm de ui.nav em src/lib/i18n.ts.

import { getDictionary, getUi, type Locale } from "@/lib/i18n";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { PillNav } from "./PillNav";

export async function Header({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);

  // Lista de âncoras do menu — cada "href" precisa bater com o id="..." da seção correspondente
  // (definido em components/sections/*.tsx). Pra adicionar/remover item de menu, mexa aqui.
  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#differentials", label: t.nav.differentials },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#about" className="font-mono text-sm font-semibold tracking-tight">
          {dict.profile.name}
        </a>

        <PillNav items={navItems} />

        <div className="flex items-center gap-1">
          <LocaleSwitcher locale={locale} label={t.switchLocale} />
          <ThemeToggle label={t.switchTheme} />
          <MobileNav items={navItems} name={dict.profile.name} />
        </div>
      </div>
    </header>
  );
}
