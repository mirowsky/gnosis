import type { SupportMenuMainProps } from "./SupportMenuMain";
import SupportMenuMain from "./SupportMenuMain";
import { DEFAULT_SupportMenuMain_TESTING_PROPS } from "./SupportMenuMain.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Layout/Support Menu/Main",
  component: SupportMenuMain,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SupportMenuMainProps>;

const Template: Story<SupportMenuMainProps> = (props) => (
  <SupportMenuMain {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SupportMenuMain_TESTING_PROPS,
};

Primary.decorators = [
  (Story) => (
    <Box sx={{ position: "fixed", bottom: "0", right: "0" }}>
      <Story />
    </Box>
  ),
];
