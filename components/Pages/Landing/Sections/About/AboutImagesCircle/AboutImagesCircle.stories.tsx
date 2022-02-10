import type { AboutImagesCircleProps } from "./AboutImagesCircle";
import AboutImagesCircle from "./AboutImagesCircle";
import { DEFAULT_AboutImagesCircle_TESTING_PROPS } from "./AboutImagesCircle.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/About Section/About Image Circle",
  component: AboutImagesCircle,
} as Meta<AboutImagesCircleProps>;

const Template: Story<AboutImagesCircleProps> = (props) => (
  <AboutImagesCircle {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutImagesCircle_TESTING_PROPS,
};
