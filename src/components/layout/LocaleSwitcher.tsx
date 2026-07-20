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
