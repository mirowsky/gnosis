import type { BackdropProps } from "./Backdrop";
import Backdrop from "./Backdrop";
import { DEFAULT_Backdrop_TESTING_PROPS } from "./Backdrop.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Utility Components/Backdrop/Main",
  component: Backdrop,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<BackdropProps>;

const Template: Story<BackdropProps> = (props) => <Backdrop {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_Backdrop_TESTING_PROPS,
};
