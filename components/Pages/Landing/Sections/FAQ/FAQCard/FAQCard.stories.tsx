import type { FAQCardProps } from "./FAQCard";
import FAQCard from "./FAQCard";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { DEFAULT_FAQCard_TESTING_PROPS } from "./FAQCard.fixture";

export default {
  title: "Landing/FAQ Section/FAQ Card",
  component: FAQCard,
} as Meta<FAQCardProps>;

const Template: Story<FAQCardProps> = (props) => <FAQCard {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_FAQCard_TESTING_PROPS,
};
