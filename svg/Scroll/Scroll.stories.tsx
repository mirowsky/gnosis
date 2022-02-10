import type { ScrollProps } from "./Scroll";
import Scroll from "./Scroll";
import { DEFAULT_Scroll_TESTING_PROPS } from "./Scroll.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "SVG/Scroll Icon",
  component: Scroll,
} as Meta<ScrollProps>;

const Template: Story<ScrollProps> = (props) => <Scroll {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_Scroll_TESTING_PROPS,
};
