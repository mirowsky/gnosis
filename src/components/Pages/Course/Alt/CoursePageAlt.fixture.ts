import { DEFAULT_ContactFormDialog_TESTING_PROPS } from "../../../Common/ContactFormDialog/ContactFormDialog.fixture";
import { DEFAULT_CourseHeroAlt_TESTING_PROPS } from "../Sections/HeroAlt/CourseHeroAlt.fixture";
import { DEFAULT_SyllabusSection_TESTING_PROPS } from "../Sections/Syllabus/Main/SyllabusSection.fixture";
import type { CoursePageAltProps } from "./CoursePageAlt";

export const DEFAULT_CoursePageAlt_TESTING_PROPS: CoursePageAltProps = {
  CourseHeroAltProps: DEFAULT_CourseHeroAlt_TESTING_PROPS,
  CourseSyllabusSectionProps: DEFAULT_SyllabusSection_TESTING_PROPS,
  ContactFormDialogProps: DEFAULT_ContactFormDialog_TESTING_PROPS,
};

export const CoursePageAlt_TEST_ID = {} as const;
