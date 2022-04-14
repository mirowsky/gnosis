import type { OverviewItemProps } from "./OverviewItem";
import OverviewItem from "./OverviewItem";
import { DEFAULT_OverviewItem_TESTING_PROPS } from "./OverviewItem.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Overview Section/Overview Item",
  component: OverviewItem,
} as Meta<OverviewItemProps>;

const Template: Story<OverviewItemProps> = (props) => (
  <OverviewItem {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_OverviewItem_TESTING_PROPS,
};
