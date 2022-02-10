import type { AboutImageFirstProps } from "./AboutImageFirst";
import AboutImageFirst from "./AboutImageFirst";
import { DEFAULT_AboutImageFirst_TESTING_PROPS } from "./AboutImageFirst.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/About Section/First Image",
  component: AboutImageFirst,
} as Meta<AboutImageFirstProps>;

const Template: Story<AboutImageFirstProps> = (props) => (
  <AboutImageFirst {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutImageFirst_TESTING_PROPS,
};
