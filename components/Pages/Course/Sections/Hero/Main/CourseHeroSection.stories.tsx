import type { CourseHeroSectionProps } from "./CourseHeroSection";
import CourseHeroSection from "./CourseHeroSection";
import { DEFAULT_CourseHeroSection_TESTING_PROPS } from "./CourseHeroSection.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Hero Section/Main",
  component: CourseHeroSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CourseHeroSectionProps>;

const Template: Story<CourseHeroSectionProps> = (props) => (
  <CourseHeroSection {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_CourseHeroSection_TESTING_PROPS,
};
