// Timeline vertical (linha + bolinhas) usada na seção "Experiência".
// Timeline = a linha/lista em volta; TimelineItem = cada emprego individual dentro dela.

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-6">{children}</ol>
  );
}

export function TimelineItem({
  title,
  subtitle,
  period,
  badge,
  children,
}: {
  title: string;
  subtitle: string;
  period: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <li className="relative">
      <span
        className="absolute top-1.5 -left-[1.6rem] size-2.5 rounded-full bg-primary ring-4 ring-background"
        aria-hidden
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">{period}</span>
          {badge}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {children}
    </li>
  );
}
