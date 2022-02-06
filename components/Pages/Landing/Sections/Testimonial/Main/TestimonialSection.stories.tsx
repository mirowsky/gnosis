import type { TestimonialSectionProps } from "./TestimonialSection";
import TestimonialSection from "./TestimonialSection";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "",
  component: TestimonialSection,
} as Meta<TestimonialSectionProps>;

const Template: Story<TestimonialSectionProps> = (props) => (
  <TestimonialSection {...props} />
);
export const Primary = Template.bind({});
Primary.args = {};
