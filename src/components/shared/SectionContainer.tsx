// Bloco "molde" usado por toda seção da página (Hero à parte): dá o espaçamento vertical
// padrão e centraliza o conteúdo com a mesma largura máxima em todo o site.
// Não tem texto aqui — é só estrutura/estilo.

import { cn } from "@/lib/utils";

export function SectionContainer({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
