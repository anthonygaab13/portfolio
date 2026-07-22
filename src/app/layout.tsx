// Layout raiz "vazio" — obrigatório existir pelo Next, mas quem monta a página de verdade
// (<html>, fontes, tema, header/footer) é src/app/[locale]/layout.tsx. Não mexer aqui.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
