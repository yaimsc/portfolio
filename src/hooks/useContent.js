import { useTranslation } from "react-i18next";

// El contenido (persona y capítulos) vive en los JSON de idioma, junto al resto de textos,
// así que se lee del bundle que i18next tiene cargado para el idioma activo.
export function useContent() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage?.startsWith("en") ? "en" : "es";
  const bundle = i18n.getResourceBundle(lang, "translation") || {};
  return { person: bundle.person, projects: bundle.projects || [] };
}
