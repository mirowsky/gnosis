import type { TestimonialSectionProps } from "./TestimonialSection";
import TestimonialSection from "./TestimonialSection";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/Testimonial Section/Main",
  component: TestimonialSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<TestimonialSectionProps>;

const Template: Story<TestimonialSectionProps> = (props) => (
  <TestimonialSection {...props} />
);
export const Primary = Template.bind({});
Primary.args = {};
