import { DEFAULT_CourseHeroSection_TESTING_PROPS } from "../Sections/Hero/Main/CourseHeroSection.fixture";
import { DEFAULT_OverviewSection_TESTING_PROPS } from "../Sections/Overview/Main/OverviewSection.fixture";
import { DEFAULT_SyllabusSection_TESTING_PROPS } from "../Sections/Syllabus/Main/SyllabusSection.fixture";
import type { CoursePageProps } from "./CoursePage";

export const DEFAULT_CoursePage_TESTING_PROPS: CoursePageProps = {
  CourseHeroSectionProps: DEFAULT_CourseHeroSection_TESTING_PROPS,
  CourseOverviewSectionProps: DEFAULT_OverviewSection_TESTING_PROPS,
  CourseSyllabusSectionProps: DEFAULT_SyllabusSection_TESTING_PROPS,
};

export const CoursePage_TEST_ID = {} as const;
