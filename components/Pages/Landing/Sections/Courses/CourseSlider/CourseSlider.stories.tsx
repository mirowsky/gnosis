import { Story, Meta } from "@storybook/react";
import { DEFAULT_COURSE_SLIDER_TEST_PROPS } from "./constants";
import CourseSlider, { CourseSliderProps } from "./CourseSlider";

export default {
  title: "Course/Slider",
  component: CourseSlider,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CourseSliderProps>;

const Template: Story<CourseSliderProps> = (props) => (
  <CourseSlider {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_COURSE_SLIDER_TEST_PROPS,
};
