import type { CoursePageProps } from "./CoursePage";
import CoursePage from "./CoursePage";
import { DEFAULT_CoursePage_TESTING_PROPS } from "./CoursePage.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Page/Main",
  component: CoursePage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CoursePageProps>;

const Template: Story<CoursePageProps> = (props) => <CoursePage {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_CoursePage_TESTING_PROPS,
};
