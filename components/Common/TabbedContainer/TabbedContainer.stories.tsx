import type { TabbedContainerProps } from "./TabbedContainer";
import TabbedContainer from "./TabbedContainer";
import { DEFAULT_TabbedContainer_TESTING_PROPS } from "./TabbedContainer.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "General Components/Tabbed Container",
  component: TabbedContainer,
  decorators: [
    (Story) => (
      <Box
        sx={{
          m: 3,
          mx: "auto",
          maxWidth: (theme) => theme.breakpoints.values.lg,
        }}
      >
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    TabProps: {
      control: false,
    },
    items: {
      control: false,
    },
    active: {
      control: {
        options: [0, 1, 2],
        mapping: [0, 1, 2],
        type: "select",
        labels: ["First Item", "Second Item", "Third Item"],
      },
    },
  },
} as Meta<TabbedContainerProps & { active: number }>;

const Template: Story<TabbedContainerProps & { active: number }> = ({
  TabProps,
  items,
  active,
}) => (
  <TabbedContainer
    TabProps={{ ...TabProps, activeIndex: active }}
    items={items}
  />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_TabbedContainer_TESTING_PROPS,
};
