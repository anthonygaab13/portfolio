import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Contact({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);
  const description =
    locale === "pt"
      ? "Aberto a novos projetos e oportunidades de dados. Chama no e-mail ou no LinkedIn."
      : "Open to new data projects and opportunities. Reach out by email or LinkedIn.";

  return (
    <SectionContainer id="contact">
      <SectionHeading eyebrow="06" title={t.nav.contact} />
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button nativeButton={false} render={<a href={`mailto:${dict.contact.email}`} />}>
          <Mail className="size-4" />
          {dict.contact.email}
        </Button>
        {dict.contact.phone && (
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={`tel:${dict.contact.phone.replace(/\s+/g, "")}`} />}
          >
            <Phone className="size-4" />
            {dict.contact.phone}
          </Button>
        )}
        <Button
          variant="outline"
          nativeButton={false}
          render={<a href={dict.contact.linkedin} target="_blank" rel="noopener noreferrer" />}
        >
          <LinkedinIcon className="size-4" />
          LinkedIn
        </Button>
        <Button
          variant="outline"
          nativeButton={false}
          render={<a href={dict.contact.github} target="_blank" rel="noopener noreferrer" />}
        >
          <GithubIcon className="size-4" />
          GitHub
        </Button>
      </div>
    </SectionContainer>
  );
}
