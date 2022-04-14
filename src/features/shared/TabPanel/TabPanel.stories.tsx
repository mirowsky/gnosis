import type { TabPanelProps } from "./TabPanel";
import TabPanel from "./TabPanel";
import { DEFAULT_TabPanel_TESTING_PROPS } from "./TabPanel.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "General Components/Tab Panel",
  component: TabPanel,
} as Meta<TabPanelProps>;

const Template: Story<TabPanelProps> = (props) => <TabPanel {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_TabPanel_TESTING_PROPS,
};
