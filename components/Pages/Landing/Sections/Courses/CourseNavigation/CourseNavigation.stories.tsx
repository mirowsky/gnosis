import { Meta, Story } from "@storybook/react";
import { DEFAULT_COURSE_NAVIGATION_TEST_PROPS } from "./constants";
import CourseNavigation, { CourseNavigationProps } from "./CourseNavigation";

export default {
  component: CourseNavigation,
  title: "Landing Page/Course Section/Course Navigation",
} as Meta<CourseNavigationProps>;

const Template: Story<CourseNavigationProps> = (props) => (
  <CourseNavigation {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_COURSE_NAVIGATION_TEST_PROPS,
};
