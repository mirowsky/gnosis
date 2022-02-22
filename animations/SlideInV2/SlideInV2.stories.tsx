import type { SlideInV2Props } from "./SlideInV2";
import SlideInV2 from "./SlideInV2";
import { DEFAULT_SlideInV2_TESTING_PROPS } from "./SlideInV2.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Animations/Slide In V2/Main",
  component: SlideInV2,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SlideInV2Props>;

const Template: Story<SlideInV2Props> = (props) => <SlideInV2 {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SlideInV2_TESTING_PROPS,
};
