import type { CoursePageAltProps } from "./CoursePageAlt";
import CoursePageAlt from "./CoursePageAlt";
import { DEFAULT_CoursePageAlt_TESTING_PROPS } from "./CoursePageAlt.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  MainLayout,
  MAIN_LAYOUT_DEFAULT_PROPS,
} from "@workspace/components/layouts";

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

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
};

Secondary.storyName = "With layout";

Secondary.decorators = [
  (Story) => (
    <MainLayout {...MAIN_LAYOUT_DEFAULT_PROPS}>
      <Story />
    </MainLayout>
  ),
];
