import SlideGroupInOnScroll from "./SlideGroupInOnScroll";
import React from "react";
import { Story, Meta } from "@storybook/react";

type SlideGroupInOnScrollDemoProps = {
  animate?: boolean;
};

const SlideGroupInOnScrollDemo = ({
  animate,
}: SlideGroupInOnScrollDemoProps) => {
  return (
    <SlideGroupInOnScroll animate={animate}>
      <div style={{ color: "blue" }}>hello</div>
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
  animate: true,
};
