// Dados de contato em inglês. email/telefone/linkedin/github vêm de contactBase
// (shared/profile-meta.ts) — mude lá, não aqui. Só "location" varia por idioma.

import { contactBase } from "../shared/profile-meta";
import type { ContactInfo } from "../types";

export const contact: ContactInfo = {
  ...contactBase,
  location: "Belo Horizonte, Brazil",
};
