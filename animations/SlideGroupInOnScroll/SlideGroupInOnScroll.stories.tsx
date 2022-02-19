import type { SlideGroupInOnScrollProps } from "./SlideGroupInOnScroll";
import SlideGroupInOnScroll from "./SlideGroupInOnScroll";
import { DEFAULT_SlideGroupInOnScroll_TESTING_PROPS } from "./SlideGroupInOnScroll.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Animations/Slide Group In On Scroll/Main",
  component: SlideGroupInOnScroll,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SlideGroupInOnScrollProps>;

const Template: Story<SlideGroupInOnScrollProps> = (props) => (
  <SlideGroupInOnScroll {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SlideGroupInOnScroll_TESTING_PROPS,
};
