import type { AboutImagesProps } from "./AboutImages";
import AboutImages from "./AboutImages";
import { DEFAULT_AboutImages_TESTING_PROPS } from "./AboutImages.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/About/About images",
  component: AboutImages,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<AboutImagesProps>;

const Template: Story<AboutImagesProps> = (props) => <AboutImages {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutImages_TESTING_PROPS,
};
