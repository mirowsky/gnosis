import type { SyllabusTabsProps } from "./SyllabusTabs";
import SyllabusTabs from "./SyllabusTabs";
import { DEFAULT_SyllabusTabs_TESTING_PROPS } from "./SyllabusTabs.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Course/Syllabus Section/Syllabus Tabs",
  component: SyllabusTabs,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SyllabusTabsProps>;

const Template: Story<SyllabusTabsProps> = (props) => (
  <SyllabusTabs {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SyllabusTabs_TESTING_PROPS,
};
