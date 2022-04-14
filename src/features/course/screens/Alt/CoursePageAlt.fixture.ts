import { DEFAULT_SyllabusSection_TESTING_PROPS } from "../../components/Syllabus/SyllabusSection.fixture";
import { DEFAULT_CourseHeroAlt_TESTING_PROPS } from "../HeroAlt/CourseHeroAlt.fixture";
import { CoursePageAltProps } from "./CoursePageAlt";

export const DEFAULT_CoursePageAlt_TESTING_PROPS: CoursePageAltProps = {
  CourseHeroAltProps: DEFAULT_CourseHeroAlt_TESTING_PROPS,
  CourseSyllabusSectionProps: DEFAULT_SyllabusSection_TESTING_PROPS,
  ContactFormDialogProps: {},
};

export const CoursePageAlt_TEST_ID = {} as const;
