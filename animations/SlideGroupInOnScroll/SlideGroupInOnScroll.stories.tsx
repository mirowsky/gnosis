import type { SlideGroupInOnScrollProps } from "./SlideGroupInOnScroll";
import SlideGroupInOnScroll from "./SlideGroupInOnScroll";
import { DEFAULT_SlideGroupInOnScroll_TESTING_PROPS } from "./SlideGroupInOnScroll.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

type SlideGroupInOnScrollDemoProps = {};

const SlideGroupInOnScrollDemo = (props: SlideGroupInOnScrollDemoProps) => {
  return (
    <SlideGroupInOnScroll>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </SlideGroupInOnScroll>
  );
};

export default {
  title: "Animations/Slide Group In On Scroll/Main",
  component: SlideGroupInOnScrollDemo,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SlideGroupInOnScrollDemoProps>;

const Template: Story<SlideGroupInOnScrollDemoProps> = (props) => (
  <SlideGroupInOnScrollDemo {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SlideGroupInOnScroll_TESTING_PROPS,
};
