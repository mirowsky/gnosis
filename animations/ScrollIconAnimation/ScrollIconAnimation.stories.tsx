import type { ScrollIconAnimationProps } from "./ScrollIconAnimation";
import ScrollIconAnimation from "./ScrollIconAnimation";
import { DEFAULT_ScrollIconAnimation_TESTING_PROPS } from "./ScrollIconAnimation.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Animations/Scroll Icon Animation",
  component: ScrollIconAnimation,
} as Meta<ScrollIconAnimationProps>;

const Template: Story<ScrollIconAnimationProps> = (props) => (
  <ScrollIconAnimation {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ScrollIconAnimation_TESTING_PROPS,
};
