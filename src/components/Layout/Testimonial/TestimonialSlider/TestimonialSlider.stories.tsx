import { Story, Meta } from "@storybook/react";
import { DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS } from "./constants";
import TestimonialSlider, { TestimonialSliderProps } from "./TestimonialSlider";

export default {
  title: "Dynamic Sections/Testimonial Section/Testimonial Slider",
  component: TestimonialSlider,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<TestimonialSliderProps>;

const Template: Story<TestimonialSliderProps> = (props) => (
  <TestimonialSlider {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS,
};
