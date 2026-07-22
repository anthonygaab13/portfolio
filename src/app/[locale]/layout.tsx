// Layout que envolve TODAS as páginas de um idioma (/pt/* e /en/*): monta a tag <html>,
// carrega as fontes, aplica o tema dark/light e coloca Header + Footer em volta do conteúdo.
// Não tem texto pra editar aqui (título da aba do navegador vem do profile.name/role automaticamente).

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary, getUi, isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Gera as rotas /pt e /en em tempo de build (SSG), uma pra cada idioma suportado.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Título e descrição da aba do navegador / resultado de busca do Google.
// Puxa automaticamente de profile.name/role/summary — não precisa editar aqui,
// só em src/content/pt/profile.ts e src/content/en/profile.ts.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pt";
  const dict = await getDictionary(locale);

  return {
    title: `${dict.profile.name} — ${dict.profile.role}`,
    description: dict.profile.summary,
    alternates: {
      languages: { pt: "/pt", en: "/en" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const t = getUi(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* defaultTheme="dark" = tema inicial do site. Trocar pra "light" se quiser começar claro. */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <TooltipProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
            >
              {t.skipToContent}
            </a>
            <Header locale={locale} />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer locale={locale} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
