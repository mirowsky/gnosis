import type { ScrollIconAnimationProps } from "./ScrollIconAnimation";
import ScrollIconAnimation from "./ScrollIconAnimation";
import { DEFAULT_ScrollIconAnimation_TESTING_PROPS } from "./ScrollIconAnimation.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Animations/Scroll Icon Animation",
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  component: ScrollIconAnimation,
  decorators: [
    (Story) => (
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta<ScrollIconAnimationProps>;

const Template: Story<ScrollIconAnimationProps> = (props) => (
  <ScrollIconAnimation {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ScrollIconAnimation_TESTING_PROPS,
  fontSize: { xs: "5rem" },
};
