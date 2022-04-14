import { Meta, Story } from "@storybook/react";
import { DEFAULT_COURSES_SECTION_TESTING_PROPS } from "./constants";
import CourseSection, { CourseSectionProps } from "./CoursesSection";

export default {
  title: "Landing/Course Section/Section",
  component: CourseSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CourseSectionProps>;

const Template: Story<CourseSectionProps> = (props) => (
  <CourseSection {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_COURSES_SECTION_TESTING_PROPS,
};
