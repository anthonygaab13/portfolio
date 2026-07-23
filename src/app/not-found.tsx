// Página de erro 404 (quando alguém acessa uma URL que não existe no site).
// É a única página que não passa pelo [locale], então o texto abaixo é fixo em português
// (não tem versão em inglês). Pra mudar o texto do 404, edite direto aqui.

import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pt">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 text-zinc-50">
        <h1 className="text-2xl font-semibold">404 · Página não encontrada</h1>
        <Link href="/" className="text-sky-400 underline underline-offset-4">
          Voltar para o início
        </Link>
      </body>
    </html>
  );
}
