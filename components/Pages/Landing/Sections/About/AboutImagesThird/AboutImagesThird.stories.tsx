import type { AboutImagesThirdProps } from "./AboutImagesThird";
import AboutImagesThird from "./AboutImagesThird";
import { DEFAULT_AboutImagesThird_TESTING_PROPS } from "./AboutImagesThird.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Landing/About Section/Third Image",
  component: AboutImagesThird,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ p: 7 }}>
        <Story />
      </Box>
    ),
  ],
} as Meta<AboutImagesThirdProps>;

const Template: Story<AboutImagesThirdProps> = (props) => (
  <AboutImagesThird {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutImagesThird_TESTING_PROPS,
};
