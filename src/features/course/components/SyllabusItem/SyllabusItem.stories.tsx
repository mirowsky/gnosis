import type { SyllabusItemProps } from "./SyllabusItem";
import SyllabusItem from "./SyllabusItem";
import { DEFAULT_SyllabusItem_TESTING_PROPS } from "./SyllabusItem.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Course/Syllabus Section/Syllabus Item",
  component: SyllabusItem,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ m: 5, width: "500px" }}>
        <Story />
      </Box>
    ),
  ],
} as Meta<SyllabusItemProps>;

const Template: Story<SyllabusItemProps> = (props) => (
  <SyllabusItem {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SyllabusItem_TESTING_PROPS,
};
