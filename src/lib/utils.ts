import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Locale } from "@/lib/i18n"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Formata "2026-03" ou "2023" em texto legível por mês/ano no locale do site. */
export function formatPeriodDate(value: string, locale: Locale) {
  const intlLocale = locale === "pt" ? "pt-BR" : "en-US";
  const parts = value.split("-");
  if (parts.length === 1) return value;
  const [year, month] = parts;
  const date = new Date(Number(year), Number(month) - 1);
  return new Intl.DateTimeFormat(intlLocale, { month: "short", year: "numeric" }).format(date);
}
