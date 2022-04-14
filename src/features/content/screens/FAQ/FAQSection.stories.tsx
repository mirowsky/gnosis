import type { FAQSectionProps } from "./FAQSection";
import FAQSection from "./FAQSection";
import { DEFAULT_FAQSection_TESTING_PROPS } from "./FAQSection.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Dynamic Sections/FAQ Section/Main",
  component: FAQSection,
} as Meta<FAQSectionProps>;

const Template: Story<FAQSectionProps> = (props) => <FAQSection {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_FAQSection_TESTING_PROPS,
};
