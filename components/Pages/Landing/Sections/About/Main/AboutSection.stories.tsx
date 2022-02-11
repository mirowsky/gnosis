import type { AboutSectionProps } from "./AboutSection";
import AboutSection from "./AboutSection";
import { DEFAULT_AboutSection_TESTING_PROPS } from "./AboutSection.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/About Section/Main",
  component: AboutSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<AboutSectionProps>;

const Template: Story<AboutSectionProps> = (props) => (
  <AboutSection {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutSection_TESTING_PROPS,
};
