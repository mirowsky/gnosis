import type { FAQSectionProps } from "./FAQSection";
import FAQSection from "./FAQSection";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/FAQ Section/Main",
  component: FAQSection,
} as Meta<FAQSectionProps>;

const Template: Story<FAQSectionProps> = (props) => <FAQSection {...props} />;
export const Primary = Template.bind({});
Primary.args = {};
