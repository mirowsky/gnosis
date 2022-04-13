import type { DynamicSectionsProps } from "./DynamicSections";
import DynamicSections from "./DynamicSections";
import { DEFAULT_DynamicSections_TESTING_PROPS } from "./DynamicSections.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/Dynamic Sections/Main",
  component: DynamicSections,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<DynamicSectionsProps>;

const Template: Story<DynamicSectionsProps> = (props) => (
  <DynamicSections {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_DynamicSections_TESTING_PROPS,
};
