import type { TruncateTextProps } from "./TruncateText";
import TruncateText from "./TruncateText";
import { DEFAULT_TruncateText_TESTING_PROPS } from "./TruncateText.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "General Components/Truncate Text/Main",
  component: TruncateText,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<TruncateTextProps>;

const Template: Story<TruncateTextProps> = (props) => (
  <TruncateText {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_TruncateText_TESTING_PROPS,
};

Primary.decorators = [
  (Story) => (
    <Box sx={{ maxWidth: "400px", margin: "auto", pt: 5 }}>
      <Story />
    </Box>
  ),
];
