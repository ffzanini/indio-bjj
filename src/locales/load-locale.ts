import { cache } from "react";

import type { Programs } from "@/app/data/programs";
import type { Locale } from "@/libs/i18n";

export type Translations = typeof import("./pt").default;

export type ChromeTranslations = Pick<Translations, "common" | "ui">;

export type InitialTranslations = ChromeTranslations &
  Partial<Omit<Translations, "common" | "ui">>;

type JsonDefault<T> = { default: T };

async function loadPair<T>(
  locale: Locale,
  loadPt: () => Promise<JsonDefault<T>>,
  loadEn: () => Promise<JsonDefault<T>>,
): Promise<T> {
  const mod = locale === "en" ? await loadEn() : await loadPt();
  return mod.default;
}

export const loadLocaleChrome = cache(async function loadLocaleChrome(
  locale: Locale,
): Promise<ChromeTranslations> {
  const [common, ui] = await Promise.all([
    loadPair(
      locale,
      () => import("./pt/obj_common.json"),
      () => import("./en/obj_common.json"),
    ),
    loadPair(
      locale,
      () => import("./pt/obj_ui.json"),
      () => import("./en/obj_ui.json"),
    ),
  ]);
  return { common, ui };
});

export const loadLocaleUi = cache(async function loadLocaleUi(
  locale: Locale,
): Promise<Translations["ui"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_ui.json"),
    () => import("./en/obj_ui.json"),
  );
});

export const loadLocaleHome = cache(async function loadLocaleHome(
  locale: Locale,
): Promise<Translations["home"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_home.json"),
    () => import("./en/obj_home.json"),
  );
});

export const loadLocaleAbout = cache(async function loadLocaleAbout(
  locale: Locale,
): Promise<Translations["about"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_about.json"),
    () => import("./en/obj_about.json"),
  );
});

export const loadLocalePrograms = cache(async function loadLocalePrograms(
  locale: Locale,
): Promise<Translations["programs"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_programs.json"),
    () => import("./en/obj_programs.json"),
  );
});

export const loadLocaleSchedules = cache(async function loadLocaleSchedules(
  locale: Locale,
): Promise<Translations["schedules"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_schedules.json"),
    () => import("./en/obj_schedules.json"),
  );
});

export const loadLocaleTestimonials = cache(
  async function loadLocaleTestimonials(
    locale: Locale,
  ): Promise<Translations["testimonials"]> {
    return loadPair(
      locale,
      () => import("./pt/obj_testimonials.json"),
      () => import("./en/obj_testimonials.json"),
    );
  },
);

export const loadLocaleContact = cache(async function loadLocaleContact(
  locale: Locale,
): Promise<Translations["contact"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_contact.json"),
    () => import("./en/obj_contact.json"),
  );
});

export const loadLocaleCourses = cache(async function loadLocaleCourses(
  locale: Locale,
): Promise<Translations["courses"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_courses.json"),
    () => import("./en/obj_courses.json"),
  );
});

export const loadLocaleDrills = cache(async function loadLocaleDrills(
  locale: Locale,
): Promise<Translations["drills"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_drills.json"),
    () => import("./en/obj_drills.json"),
  );
});

export const loadLocaleHalfguard = cache(async function loadLocaleHalfguard(
  locale: Locale,
): Promise<Translations["halfguard"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_halfguard.json"),
    () => import("./en/obj_halfguard.json"),
  );
});

export const loadLocaleGuardpassing = cache(
  async function loadLocaleGuardpassing(
    locale: Locale,
  ): Promise<Translations["guardpassing"]> {
    return loadPair(
      locale,
      () => import("./pt/obj_guardpassing.json"),
      () => import("./en/obj_guardpassing.json"),
    );
  },
);

export const loadLocaleNogi = cache(async function loadLocaleNogi(
  locale: Locale,
): Promise<Translations["nogi"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_nogi.json"),
    () => import("./en/obj_nogi.json"),
  );
});

export const loadLocaleOpenguard = cache(async function loadLocaleOpenguard(
  locale: Locale,
): Promise<Translations["openguard"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_openguard.json"),
    () => import("./en/obj_openguard.json"),
  );
});

export const loadLocaleProfessor = cache(async function loadLocaleProfessor(
  locale: Locale,
): Promise<Translations["professor"]> {
  return loadPair(
    locale,
    () => import("./pt/obj_professor.json"),
    () => import("./en/obj_professor.json"),
  );
});

export type ProgramCard = {
  id: number;
  navigation: string;
  image: string;
  title: string;
  professors: string;
};

export type ProgramPageData = {
  program: ProgramCard;
  nextPrograms: ProgramCard[];
  programsDetail: Translations["programsDetail"];
};

function toCard(program: Programs): ProgramCard {
  return {
    id: program.id,
    navigation: program.navigation,
    image: program.image,
    title: program.title,
    professors: program.professors,
  };
}

export const loadProgramPage = cache(async function loadProgramPage(
  locale: Locale,
  navigation: string,
): Promise<ProgramPageData | null> {
  const [labels, detailsModule, programsModule] = await Promise.all([
    loadPair(
      locale,
      () => import("./pt/obj_programsDetail.json"),
      () => import("./en/obj_programsDetail.json"),
    ),
    import("@/app/data/programsDetailTranslations"),
    import("@/app/data/programs"),
  ]);

  const program = programsModule.programs.find(
    (item) => item.navigation === navigation,
  );
  if (!program) return null;

  const index = programsModule.programs.findIndex(
    (item) => item.id === program.id,
  );
  const nextPrograms = [1, 2, 3].map(
    (step) =>
      programsModule.programs[
        (index + step) % programsModule.programs.length
      ],
  );
  const ids = new Set([program.id, ...nextPrograms.map((item) => item.id)]);
  const details =
    locale === "en"
      ? detailsModule.programsDetailEn
      : detailsModule.programsDetailPt;

  return {
    program: toCard(program),
    nextPrograms: nextPrograms.map(toCard),
    programsDetail: {
      ...labels,
      programs: details.filter((item) => ids.has(item.id)),
    },
  };
});
