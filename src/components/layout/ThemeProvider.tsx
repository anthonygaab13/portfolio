"use client";

// Repasse fino do next-themes — habilita o dark/light mode em todo o site.
// Configurado (defaultTheme, etc.) em src/app/[locale]/layout.tsx. Não tem texto aqui.

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
