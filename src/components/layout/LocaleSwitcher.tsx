// Botão do header que leva pra versão em outro idioma da mesma página (ex: /pt -> /en).
// O texto do botão ("English" / "Português") vem de ui.switchLocale em src/lib/i18n.ts.

import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const target: Locale = locale === "pt" ? "en" : "pt";

  return (
    <Link
      href={`/${target}`}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}
