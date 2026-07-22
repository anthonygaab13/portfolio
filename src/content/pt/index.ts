// Junta todos os blocos de conteúdo em português num único objeto (Dictionary).
// Normalmente não precisa mexer aqui — só se você criar uma seção 100% nova no site.

import type { Dictionary } from "../types";
import { contact } from "./contact";
import { differentials } from "./differentials";
import { education } from "./education";
import { experience } from "./experience";
import { profile } from "./profile";
import { projects } from "./projects";
import { languages, skills } from "./skills";

const dictionary: Dictionary = {
  profile,
  contact,
  experience,
  education,
  skills,
  languages,
  differentials,
  projects,
};

export default dictionary;
