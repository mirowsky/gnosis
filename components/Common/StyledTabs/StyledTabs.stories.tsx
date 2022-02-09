import type { StyledTabsProps } from "./StyledTabs";
import StyledTabs from "./StyledTabs";
import { DEFAULT_StyledTabs_TESTING_PROPS } from "./StyledTabs.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "General Components/Styled Tabs",
  component: StyledTabs,
} as Meta<StyledTabsProps>;

const Template: Story<StyledTabsProps> = (props) => <StyledTabs {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_StyledTabs_TESTING_PROPS,
};
