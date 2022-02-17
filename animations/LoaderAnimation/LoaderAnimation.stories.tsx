import type { LoaderAnimationProps } from "./LoaderAnimation";
import LoaderAnimation from "./LoaderAnimation";
import { DEFAULT_LoaderAnimation_TESTING_PROPS } from "./LoaderAnimation.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Animations/Loader Animation/Main",
  component: LoaderAnimation,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<LoaderAnimationProps>;

const Template: Story<LoaderAnimationProps> = (props) => (
  <LoaderAnimation {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_LoaderAnimation_TESTING_PROPS,
};
