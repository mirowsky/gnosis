import type { LazyImageProps } from "./LazyImage";
import LazyImage from "./LazyImage";
import { DEFAULT_LazyImage_TESTING_PROPS } from "./LazyImage.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Utility Components/Lazy Image/Main",
  component: LazyImage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<LazyImageProps>;

const Template: Story<LazyImageProps> = (props) => <LazyImage {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_LazyImage_TESTING_PROPS,
};
