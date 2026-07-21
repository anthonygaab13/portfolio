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
    <section id="top" className="relative overflow-hidden">
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

        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="relative">
            <div
              className="absolute -inset-4 -z-10 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--primary)_25%,transparent),transparent_70%)]"
              aria-hidden
            />
            <div className="size-48 overflow-hidden rounded-full border border-primary/30 bg-muted shadow-lg md:size-64">
              <Image
                src={profile.avatarSrc}
                alt={profile.name}
                width={256}
                height={256}
                className="size-full object-cover"
                priority
              />
            </div>
          </div>
          <p className="text-center font-mono text-xs tracking-wider text-muted-foreground uppercase md:text-right">
            {profile.role}
          </p>
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
