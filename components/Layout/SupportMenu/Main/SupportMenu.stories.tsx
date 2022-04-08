import type { SupportMenuProps } from "./SupportMenu";
import SupportMenu from "./SupportMenu";
import { DEFAULT_SupportMenu_TESTING_PROPS } from "./SupportMenu.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/Support Menu/Main",
  component: SupportMenu,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SupportMenuProps>;

const Template: Story<SupportMenuProps> = (props) => <SupportMenu {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SupportMenu_TESTING_PROPS,
};
