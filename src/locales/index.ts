import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import esCommon from "./es/common.json";
import esHome from "./es/home.json";
import esProjects from "./es/projects.json";
import esAbout from "./es/about.json";
import esSkills from "./es/skills.json";
import esContact from "./es/contact.json";

import enCommon from "./en/common.json";
import enHome from "./en/home.json";
import enProjects from "./en/projects.json";
import enAbout from "./en/about.json";
import enSkills from "./en/skills.json";
import enContact from "./en/contact.json";

const resources = {
  es: {
    common: esCommon,
    home: esHome,
    projects: esProjects,
    about: esAbout,
    skills: esSkills,
    contact: esContact,
  },
  en: {
    common: enCommon,
    home: enHome,
    projects: enProjects,
    about: enAbout,
    skills: enSkills,
    contact: enContact,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
