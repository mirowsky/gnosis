import type { IconButtonFilledProps } from "./IconButtonFilled";
import IconButtonFilled from "./IconButtonFilled";
import { DEFAULT_IconButtonFilled_TESTING_PROPS } from "./IconButtonFilled.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { ButtonBaseProps } from "@mui/material";

export default {
  title: "Blog/Page/Icon Button Filled",
  component: IconButtonFilled,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<IconButtonFilledProps>;

const Template: Story<IconButtonFilledProps> = (props) => (
  <IconButtonFilled
    {...(DEFAULT_IconButtonFilled_TESTING_PROPS as IconButtonFilledProps & {
      ref: React.RefObject<ButtonBaseProps>;
    })}
  />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_IconButtonFilled_TESTING_PROPS,
};
