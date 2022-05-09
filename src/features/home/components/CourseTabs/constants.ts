import { noop } from "@workspace/utility";
import { CourseTabsProps } from "./CourseTabs";

export const DEFAULT_COURSE_TABS_TESTING_PROPS: CourseTabsProps = {
  items: ["Pós-graduação", "Extensão", "Multidisciplinar"],
  handleChange: noop,
  value: 0,
};

export const COURSE_TABS_TEST_ID = {} as const;
