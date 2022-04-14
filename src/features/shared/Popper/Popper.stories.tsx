import type { PopperProps } from "./Popper";
import Popper from "./Popper";
import { DEFAULT_Popper_TESTING_PROPS } from "./Popper.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Popper",
  component: Popper,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<PopperProps>;

const Template: Story<PopperProps> = (props) => <Popper {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_Popper_TESTING_PROPS,
};
