import common from "./obj_common.json";
import home from "./obj_home.json";
import about from "./obj_about.json";
import programs from "./obj_programs.json";
import programsDetailJson from "./obj_programsDetail.json";
import { programsDetailEn } from "@/app/data/programsDetailTranslations";
import schedules from "./obj_schedules.json";

const programsDetail = {
  ...programsDetailJson,
  programs: programsDetailEn,
};
import testimonials from "./obj_testimonials.json";
import contact from "./obj_contact.json";
import courses from "./obj_courses.json";
import drills from "./obj_drills.json";
import halfguard from "./obj_halfguard.json";
import nogi from "./obj_nogi.json";
import openguard from "./obj_openguard.json";
import professor from "./obj_professor.json";

const en = {
  common,
  home,
  about,
  programs,
  programsDetail,
  schedules,
  testimonials,
  contact,
  courses,
  drills,
  halfguard,
  nogi,
  openguard,
  professor,
};

export default en;
