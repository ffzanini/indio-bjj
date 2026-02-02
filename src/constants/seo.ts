/**
 * Constantes centralizadas para SEO.
 * Palavras-chave prioritárias: jiu jitsu, índio, JA, Pelotas, cursos.
 */
export const SITE_URL = "https://indiobjj.com.br" as const;
export const SITE_NAME = "JA Índio Jiu Jitsu" as const;
export const LOCATION = "Pelotas" as const;

/** Cursos oferecidos na página (nomes para SEO) */
export const SEO_COURSES = [
  "curso meia guarda",
  "curso guarda aberta",
  "curso nogi",
  "curso no-gi",
  "curso drills jiu jitsu",
  "meia guarda",
  "guarda aberta",
  "open guard",
  "half guard",
  "nogi",
  "no-gi",
  "drills jiu jitsu",
] as const;

export const SEO_KEYWORDS = [
  "jiu jitsu",
  "jiu-jitsu",
  "índio jiu jitsu",
  "JA Índio",
  "JA Pelotas",
  "academia jiu jitsu Pelotas",
  "jiu jitsu Pelotas",
  "aula jiu jitsu Pelotas",
  "treino jiu jitsu",
  "Fabiano Índio",
  // Cursos e termos de curso
  "curso jiu jitsu",
  "cursos jiu jitsu",
  "cursos jiu jitsu Pelotas",
  "curso jiu jitsu online",
  "curso meia guarda",
  "curso guarda aberta",
  "curso nogi",
  "curso no-gi",
  "curso drills jiu jitsu",
  "meia guarda jiu jitsu",
  "guarda aberta jiu jitsu",
  "nogi pelotas",
  "drills jiu jitsu",
] as const;

export const DEFAULT_KEYWORDS_STRING = SEO_KEYWORDS.join(", ");

/** Keywords para a seção de cursos (base + cursos) */
export const COURSES_KEYWORDS_STRING = [
  ...SEO_KEYWORDS,
  ...SEO_COURSES,
].join(", ");
