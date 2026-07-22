// Dados de contato exibidos na seção "Contato", no rodapé e nos botões do Hero.
// email/telefone/linkedin/github vêm de contactBase (shared/profile-meta.ts) — mude lá,
// não aqui, pra não desalinhar entre pt e en. Aqui só fica o que pode variar por idioma (location).

import { contactBase } from "../shared/profile-meta";
import type { ContactInfo } from "../types";

export const contact: ContactInfo = {
  ...contactBase,
  location: "Belo Horizonte, Brasil",
};
