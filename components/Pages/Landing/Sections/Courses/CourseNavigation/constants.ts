import { CourseNavigationProps } from "./CourseNavigation";

export const DEFAULT_COURSE_NAVIGATION_TEST_PROPS: CourseNavigationProps = {
  backwardButton: {
    id: "next-item-id-replace-this",
    ariaLabel: "Previous item",
    color: "primary",
  },
  forwardButton: {
    id: "next-item-id-replace-this-too",
    ariaLabel: "Next item",
    color: "primary",
  },
};

export const COURSE_NAVIGATION_TEST_ID = {} as const;
