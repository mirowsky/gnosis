import type { AboutImagesProps } from "./AboutImages";
import AboutImages from "./AboutImages";
import { DEFAULT_AboutImages_TESTING_PROPS } from "./AboutImages.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Landing/About Section/About images",
  component: AboutImages,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          width: "100%",
          maxWidth: "70vw",
          margin: "auto",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Story />
      </Box>
    ),
  ],
} as Meta<AboutImagesProps>;

const Template: Story<AboutImagesProps> = (props) => <AboutImages {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_AboutImages_TESTING_PROPS,
};
