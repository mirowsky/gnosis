import type { CoursePageAltProps } from "./CoursePageAlt";
import CoursePageAlt from "./CoursePageAlt";
import { DEFAULT_CoursePageAlt_TESTING_PROPS } from "./CoursePageAlt.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Course Page/Alt",
  component: CoursePageAlt,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CoursePageAltProps>;

const Template: Story<CoursePageAltProps> = (props) => (
  <CoursePageAlt {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_CoursePageAlt_TESTING_PROPS,
};
