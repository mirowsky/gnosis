import { Story, Meta } from "@storybook/react";
import { DEFAULT_COURSE_CARD_TEST_PROPS } from "./constants";
import CourseCard, { CourseCardProps } from "./CourseCard";

export default {
  title: "Courses/Course Card",
  component: CourseCard,
} as Meta<CourseCardProps>;

const Template: Story<CourseCardProps> = (props) => <CourseCard {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_COURSE_CARD_TEST_PROPS,
};
