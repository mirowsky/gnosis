import type { CourseCardSkeletonProps } from "./CourseCardSkeleton";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { DEFAULT_CourseCardSkeleton_TESTING_PROPS } from "./CourseCardSkeleton.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/Course Section/Course Card Skeleton",
  component: CourseCardSkeleton,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CourseCardSkeletonProps>;

const Template: Story<CourseCardSkeletonProps> = (props) => (
  <CourseCardSkeleton {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_CourseCardSkeleton_TESTING_PROPS,
};
