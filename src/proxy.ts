// "Middleware" do Next (renomeado pra proxy.ts na versão 16) que roda antes de toda página.
// Função: detectar em qual idioma mostrar o site quando a URL não tem /pt ou /en
// (ex: alguém acessa "/" direto) e redirecionar pra rota certa.
// Não contém texto do site — só lógica de roteamento. Raramente precisa mexer aqui.

import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n";

// Decide o idioma: 1) cookie salvo de uma visita anterior, 2) idioma preferido do navegador,
// 3) idioma padrão do site (pt) se nada mais bater.
function detectLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(",")[0]?.split("-")[0];
    if (preferred && isLocale(preferred)) return preferred;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Se a URL já começa com /pt ou /en, não faz nada — deixa passar direto.
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return NextResponse.next();

  // Senão, redireciona pra mesma URL só que com o prefixo de idioma na frente.
  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

// Define em quais rotas esse proxy roda: tudo, exceto arquivos estáticos/API/imagens.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|cv|favicon.ico).*)"],
};
