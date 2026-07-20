import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Button } from "@/components/ui/button";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Hero({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);
  const { profile, contact } = dict;

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent)]"
        aria-hidden
      />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 px-4 pt-16 pb-16 sm:px-6 md:pt-24 md:pb-24 lg:px-8">
        <div className="size-20 overflow-hidden rounded-full border border-border bg-muted md:size-24">
          <Image
            src={profile.avatarSrc}
            alt={profile.name}
            width={96}
            height={96}
            className="size-full object-cover"
            priority
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{profile.name}</h1>
          <p className="text-lg text-foreground/90 md:text-xl">{profile.role}</p>
          <p className="font-mono text-sm text-primary">{profile.tagline}</p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden />
            {contact.location}
          </p>
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          {profile.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button nativeButton={false} render={<a href={profile.cvUrl} download />}>
            {t.downloadCv}
          </Button>
          <Button
            variant="outline"
            size="icon"
            nativeButton={false}
            render={<a href={`mailto:${contact.email}`} aria-label="Email" />}
          >
            <Mail className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            nativeButton={false}
            render={
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" />
            }
          >
            <LinkedinIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            nativeButton={false}
            render={
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" />
            }
          >
            <GithubIcon className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
