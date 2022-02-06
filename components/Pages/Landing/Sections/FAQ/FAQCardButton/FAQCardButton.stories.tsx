import type { FAQCardButtonProps } from "./FAQCardButton";
import FAQCardButton from "./FAQCardButton";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/FAQ Section/FAQ Card Button",
  component: FAQCardButton,
} as Meta<FAQCardButtonProps>;

const Template: Story<FAQCardButtonProps> = (props) => (
  <FAQCardButton {...props} />
);
export const Primary = Template.bind({});
Primary.args = {};
