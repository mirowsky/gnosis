import type { AboutImagesThirdProps } from "./AboutImagesThird";
import AboutImagesThird from "./AboutImagesThird";
import { DEFAULT_AboutImagesThird_TESTING_PROPS } from "./AboutImagesThird.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/About Section/Third Image",
  component: AboutImagesThird,
} as Meta<AboutImagesThirdProps>;

const Template: Story<AboutImagesThirdProps> = (props) => (
  <AboutImagesThird {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutImagesThird_TESTING_PROPS,
};
