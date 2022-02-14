import type { TestimonialSectionProps } from "./TestimonialSection";
import TestimonialSection from "./TestimonialSection";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { DEFAULT_TestimonialSection_TESTING_PROPS } from "./TestimonialSection.fixture";

export default {
  title: "Dynamic Sections/Testimonial Section/Main",
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
Primary.args = {
  ...DEFAULT_TestimonialSection_TESTING_PROPS,
};
