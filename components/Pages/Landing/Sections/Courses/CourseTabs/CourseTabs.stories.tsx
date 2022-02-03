import { Meta, Story } from "@storybook/react";
import CourseTabs, { CourseTabsProps } from "./CourseTabs";

export default {
  title: "Landing/Course Section/Course Tabs",
  component: CourseTabs,
} as Meta<CourseTabsProps>;

const Template: Story<CourseTabsProps> = (props) => <CourseTabs {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
