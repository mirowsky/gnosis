import { Meta, Story } from "@storybook/react";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

export default {
  title: "Landing/Testimonial Section/Testimonial Card",
  component: TestimonialCard,
} as Meta<TestimonialCardProps>;

const Template: Story<TestimonialCardProps> = (args) => (
  <TestimonialCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
