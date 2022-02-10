import type { AboutImageFirstProps } from "./AboutImageFirst";
import AboutImageFirst from "./AboutImageFirst";
import { DEFAULT_AboutImageFirst_TESTING_PROPS } from "./AboutImageFirst.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Landing/About Section/First Image",
  component: AboutImageFirst,
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
} as Meta<AboutImageFirstProps>;

const Template: Story<AboutImageFirstProps> = (props) => (
  <AboutImageFirst {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutImageFirst_TESTING_PROPS,
};
