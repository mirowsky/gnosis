import { Meta, Story } from "@storybook/react";
import { DEFAULT_TESTIMONIAL_CARD_TESTING_PROPS } from "./constants";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

export default {
  title: "Landing/Testimonial Section/Testimonial Card",
  component: TestimonialCard,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<TestimonialCardProps>;

const Template: Story<TestimonialCardProps> = (args) => (
  <TestimonialCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_TESTIMONIAL_CARD_TESTING_PROPS,
};
