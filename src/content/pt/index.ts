import type { Dictionary } from "../types";
import { contact } from "./contact";
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
  projects,
};

export default dictionary;
