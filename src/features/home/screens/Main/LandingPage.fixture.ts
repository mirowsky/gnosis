import { DEFAULT_AboutSection_TESTING_PROPS } from "../About/AboutSection.fixture";
import { DEFAULT_COURSES_SECTION_TESTING_PROPS } from "../Courses/constants";
import { DEFAULT_DEFENSE_SECTION_TEST_PROPS } from "../Defense/constants";
import { DEFAULT_HERO_TESTING_PROPS } from "../Hero/contants";
import type { LandingPageProps } from "./LandingPage";
import { DEFAULT_DynamicSections_TESTING_PROPS } from "@workspace/components/shared";

export const DEFAULT_LandingPage_TESTING_PROPS: LandingPageProps = {
  DynamicSectionsProps: DEFAULT_DynamicSections_TESTING_PROPS,
  CourseSectionProps: DEFAULT_COURSES_SECTION_TESTING_PROPS,
  DefenseSectionProps: DEFAULT_DEFENSE_SECTION_TEST_PROPS,
  HeroSectionProps: DEFAULT_HERO_TESTING_PROPS,
  AboutSectionProps: DEFAULT_AboutSection_TESTING_PROPS,
};

export const LandingPage_TEST_ID = {} as const;
