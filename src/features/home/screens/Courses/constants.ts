import { DEFAULT_COURSE_NAVIGATION_TEST_PROPS } from "../../components/CourseNavigation/constants";
import { DEFAULT_COURSE_SLIDER_TEST_PROPS } from "../../components/CourseSlider/constants";
import { DEFAULT_COURSE_TABS_TESTING_PROPS } from "../../components/CourseTabs/constants";
import { CourseSectionProps } from "./CoursesSection";

export const DEFAULT_COURSES_SECTION_TESTING_PROPS: CourseSectionProps = {
  CourseSliderProps: DEFAULT_COURSE_SLIDER_TEST_PROPS,
  CourseTabsProps: DEFAULT_COURSE_TABS_TESTING_PROPS,
  CourseNavigationProps: DEFAULT_COURSE_NAVIGATION_TEST_PROPS,
};

export const COURSE_SECTION_TEST_ID = {} as const;
