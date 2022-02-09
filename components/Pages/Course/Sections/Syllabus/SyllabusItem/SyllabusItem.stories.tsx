import type { SyllabusItemProps } from "./SyllabusItem";
import SyllabusItem from "./SyllabusItem";
import { DEFAULT_SyllabusItem_TESTING_PROPS } from "./SyllabusItem.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Syllabus Section/Syllabus Item",
  component: SyllabusItem,
} as Meta<SyllabusItemProps>;

const Template: Story<SyllabusItemProps> = (props) => (
  <SyllabusItem {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SyllabusItem_TESTING_PROPS,
};
