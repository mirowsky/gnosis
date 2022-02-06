import { Story, Meta } from "@storybook/react";
import { DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS } from "./constants";
import TestimonialSlider, { TestimonialSliderProps } from "./TestimonialSlider";

export default {
  title: "Landing/Testimonial Section/Testimonial Slider",
  component: TestimonialSlider,
} as Meta<TestimonialSliderProps>;

const Template: Story<TestimonialSliderProps> = (props) => (
  <TestimonialSlider {...props} />
);

export const Primary = {
  ...DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS,
};
