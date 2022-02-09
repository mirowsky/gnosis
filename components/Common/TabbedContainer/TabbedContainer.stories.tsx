import type { TabbedContainerProps } from "./TabbedContainer";
import TabbedContainer from "./TabbedContainer";
import { DEFAULT_TabbedContainer_TESTING_PROPS } from "./TabbedContainer.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "General Components/Tabbed Container",
  component: TabbedContainer,
} as Meta<TabbedContainerProps>;

const Template: Story<TabbedContainerProps> = (props) => (
  <TabbedContainer {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_TabbedContainer_TESTING_PROPS,
};
