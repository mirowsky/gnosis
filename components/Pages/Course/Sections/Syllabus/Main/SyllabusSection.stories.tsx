import type { SyllabusSectionProps } from "./SyllabusSection";
import SyllabusSection from "./SyllabusSection";
import { DEFAULT_SyllabusSection_TESTING_PROPS } from "./SyllabusSection.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Syllabus Section/Main",
  component: SyllabusSection,
} as Meta<SyllabusSectionProps>;

const Template: Story<SyllabusSectionProps> = (props) => (
  <SyllabusSection {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SyllabusSection_TESTING_PROPS,
};
