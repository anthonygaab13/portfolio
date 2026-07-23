// Seção "Hero": primeiro bloco visível ao abrir o site — foto, nome, cargo, frase de
// impacto, resumo, lema e botões de ação (Ver projetos / GitHub / LinkedIn / Baixar CV).
// Quase todo texto aqui vem de dict.profile (src/content/pt/profile.ts e content/en/profile.ts).
// Foto: troque o arquivo public/images/avatar.jpg (caminho definido em shared/profile-meta.ts).

import Image from "next/image";
import { Download, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Hero({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);
  const { profile, contact } = dict;

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent)]"
        aria-hidden
      />
      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-12 px-4 pt-16 pb-16 sm:px-6 md:grid-cols-[1.3fr_1fr] md:pt-24 md:pb-24 lg:px-8">
        <div className="space-y-6">
          <Badge variant="outline" className="px-3 py-1 font-mono text-xs font-normal text-muted-foreground">
            <MapPin className="size-3" aria-hidden />
            {contact.location} · {profile.focusAreas.slice(0, 2).join(" & ")}
          </Badge>

          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{profile.name}</h1>
            <p className="text-lg font-medium text-foreground/90 md:text-xl">{profile.role}</p>
            <p className="font-mono text-sm text-primary">{profile.tagline}</p>
          </div>

          <p className="text-2xl leading-snug font-semibold tracking-tight text-balance md:text-4xl">
            {profile.headline}
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{profile.summary}</p>

          <blockquote className="max-w-xl border-l-2 border-primary/60 pl-4 text-sm leading-relaxed text-foreground/80 italic">
            {profile.motto}
          </blockquote>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button nativeButton={false} render={<a href="#projects" />}>
              {t.viewProjects}
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href={contact.github} target="_blank" rel="noopener noreferrer" />}
            >
              <GithubIcon className="size-4" />
              GitHub
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href={contact.linkedin} target="_blank" rel="noopener noreferrer" />}
            >
              <LinkedinIcon className="size-4" />
              LinkedIn
            </Button>
            <Button variant="outline" nativeButton={false} render={<a href={profile.cvUrl} download />}>
              <Download className="size-4" />
              {t.downloadCv}
            </Button>
          </div>
        </div>

        {/* Foto de perfil circular + badges de área de foco (profile.focusAreas) */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="relative w-48 sm:w-56 md:w-64">
            {/* brilho suave atrás da foto — puramente decorativo */}
            <div
              className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_20%,transparent),transparent_70%)]"
              aria-hidden
            />
            {/* rounded-full = circular. Se um dia quiser voltar pro formato retangular,
                troque "rounded-full" por algo como "rounded-2xl" aqui e na div de cima. */}
            <div className="relative aspect-square w-full overflow-hidden rounded-full border border-border/60 bg-muted shadow-2xl">
              <Image
                src={profile.avatarSrc}
                alt={profile.name}
                fill
                sizes="(min-width: 768px) 16rem, 12rem"
                className="object-cover"
                priority
                quality={95}
                /* quality alta pq é uma foto pequena e única — o padrão do Next (75)
                   recomprime a imagem em cima do arquivo já salvo e borra detalhes finos
                   (cabelo, textura da pele) num avatar circular pequeno como esse. */
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 md:justify-end">
            {profile.focusAreas.map((area) => (
              <Badge key={area} variant="secondary">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
