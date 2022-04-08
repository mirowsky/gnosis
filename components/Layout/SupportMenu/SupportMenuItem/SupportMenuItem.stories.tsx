import type { SupportMenuItemProps } from "./SupportMenuItem";
import SupportMenuItem from "./SupportMenuItem";
import { DEFAULT_SupportMenuItem_TESTING_PROPS } from "./SupportMenuItem.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/Support Menu/Support Menu Item",
  component: SupportMenuItem,
  parameters: {
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SupportMenuItemProps>;

const Template: Story<SupportMenuItemProps> = (props) => (
  <SupportMenuItem {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SupportMenuItem_TESTING_PROPS,
};
