// Seção "Contato": frase de abertura + botões de email, WhatsApp, LinkedIn, GitHub e Instagram.
// Frase vem de t.contactDescription (src/lib/i18n.ts). Links/telefone vêm de dict.contact
// (src/content/pt/contact.ts e content/en/contact.ts, que puxam de shared/profile-meta.ts).

import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getDictionary, getUi, type Locale } from "@/lib/i18n";

export async function Contact({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const t = getUi(locale);

  return (
    <SectionContainer id="contact">
      <SectionHeading eyebrow="07" title={t.nav.contact} />
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{t.contactDescription}</p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button nativeButton={false} render={<a href={`mailto:${dict.contact.email}`} />}>
          <Mail className="size-4" />
          {dict.contact.email}
        </Button>
        {dict.contact.phone && (
          // Clicar abre uma conversa no WhatsApp (wa.me exige só dígitos, sem "+", espaço ou traço).
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href={`https://wa.me/${dict.contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <WhatsappIcon className="size-4" />
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
        <Button
          variant="outline"
          nativeButton={false}
          render={<a href={dict.contact.instagram} target="_blank" rel="noopener noreferrer" />}
        >
          <InstagramIcon className="size-4" />
          Instagram
        </Button>
      </div>
    </SectionContainer>
  );
}
