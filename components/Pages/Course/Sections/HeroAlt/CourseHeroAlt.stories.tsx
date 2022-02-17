import type { CourseHeroAltProps } from "./CourseHeroAlt";
import CourseHeroAlt from "./CourseHeroAlt";
import { DEFAULT_CourseHeroAlt_TESTING_PROPS } from "./CourseHeroAlt.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Hero Section/Alt Hero Screen",
  component: CourseHeroAlt,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CourseHeroAltProps>;

const Template: Story<CourseHeroAltProps> = (props) => (
  <CourseHeroAlt {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_CourseHeroAlt_TESTING_PROPS,
};
