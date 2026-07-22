// Cabeçalho padrão de cada seção: numerozinho decorativo (eyebrow, ex: "01") + título grande.
// Usado por todas as seções — o texto do título vem de cada seção individualmente.

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-8 md:mb-10">
      {eyebrow && (
        <p className="font-mono text-sm uppercase tracking-wider text-primary">{eyebrow}</p>
      )}
      <h2 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}
