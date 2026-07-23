// Rodapé do site: copyright + ícones de contato (email, LinkedIn, GitHub, Instagram).
// Os links vêm de dict.contact (src/content/pt|en/contact.ts) — não tem texto fixo aqui
// além do "©", que é gerado automaticamente com o ano atual.

import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { getDictionary, type Locale } from "@/lib/i18n";

export async function Footer({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);
  const year = new Date().getFullYear();

  const links = [
    { href: `mailto:${dict.contact.email}`, label: "Email", icon: Mail },
    { href: dict.contact.linkedin, label: "LinkedIn", icon: LinkedinIcon },
    { href: dict.contact.github, label: "GitHub", icon: GithubIcon },
    { href: dict.contact.instagram, label: "Instagram", icon: InstagramIcon },
  ];

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-4 py-8 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} {dict.profile.name}
        </p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
