import type { OverviewSectionProps } from "./OverviewSection";
import OverviewSection from "./OverviewSection";
import { DEFAULT_OverviewSection_TESTING_PROPS } from "./OverviewSection.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Overview Section/Main",
  component: OverviewSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<OverviewSectionProps>;

const Template: Story<OverviewSectionProps> = (props) => (
  <OverviewSection {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_OverviewSection_TESTING_PROPS,
};
