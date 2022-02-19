import type { SlideInOnScrollProps } from "./SlideInOnScroll";
import SlideInOnScroll from "./SlideInOnScroll";
import { DEFAULT_SlideInOnScroll_TESTING_PROPS } from "./SlideInOnScroll.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Animations/Slide In On Scroll/Main",
  component: SlideInOnScroll,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SlideInOnScrollProps>;

const Template: Story<SlideInOnScrollProps> = (props) => (
  <SlideInOnScroll {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SlideInOnScroll_TESTING_PROPS,
};
