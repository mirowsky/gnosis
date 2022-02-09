import type { SlideInProps } from "./SlideIn";
import SlideIn from "./SlideIn";
import { DEFAULT_SlideIn_TESTING_PROPS } from "./SlideIn.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Animations/Slide in",
  component: SlideIn,
} as Meta<SlideInProps>;

const Template: Story<SlideInProps> = (props) => <SlideIn {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SlideIn_TESTING_PROPS,
};
