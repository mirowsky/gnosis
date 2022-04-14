import type { CoursePageProps } from "./CoursePage";
import CoursePage from "./CoursePage";
import { DEFAULT_CoursePage_TESTING_PROPS } from "./CoursePage.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import MainLayout from "../../../Layout/MainLayout/MainLayout";
import { MAIN_LAYOUT_DEFAULT_PROPS } from "../../../Layout/MainLayout/constants";

export default {
  title: "Course/Page/Main",
  component: CoursePage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CoursePageProps>;

const Template: Story<CoursePageProps> = (props) => <CoursePage {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_CoursePage_TESTING_PROPS,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
};

Secondary.storyName = "With Main Layout";

Secondary.decorators = [
  (Story) => (
    <MainLayout {...MAIN_LAYOUT_DEFAULT_PROPS}>
      <Story />
    </MainLayout>
  ),
];
