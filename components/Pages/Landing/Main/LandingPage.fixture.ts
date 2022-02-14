import { DEFAULT_DynamicSections_TESTING_PROPS } from "../../../Layout/DynamicSections/DynamicSections.fixture";
import { DEFAULT_COURSES_SECTION_TESTING_PROPS } from "../Sections/Courses/Main/constants";
import { DEFAULT_DEFENSE_SECTION_TEST_PROPS } from "../Sections/Defense/Main/constants";
import { DEFAULT_HERO_TESTING_PROPS } from "../Sections/Hero/Main/contants";
import type { LandingPageProps } from "./LandingPage";

export const DEFAULT_LandingPage_TESTING_PROPS: LandingPageProps = {
  DynamicSectionsProps: DEFAULT_DynamicSections_TESTING_PROPS,
  CourseSectionProps: DEFAULT_COURSES_SECTION_TESTING_PROPS,
  DefenseSectionProps: DEFAULT_DEFENSE_SECTION_TEST_PROPS,
  HeroSectionProps: DEFAULT_HERO_TESTING_PROPS,
};

export const LandingPage_TEST_ID = {} as const;
