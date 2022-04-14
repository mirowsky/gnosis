import type { CourseHeroAltProps } from "./CourseHeroAlt";
import CourseHeroAlt from "./CourseHeroAlt";
import { DEFAULT_CourseHeroAlt_TESTING_PROPS } from "./CourseHeroAlt.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box, Container } from "@mui/material";

export default {
  title: "Course/Hero Section/Alt Hero Screen",
  component: CourseHeroAlt,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<CourseHeroAltProps>;

const Template: Story<CourseHeroAltProps> = (props) => (
  <CourseHeroAlt {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_CourseHeroAlt_TESTING_PROPS,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
};

Secondary.decorators = [
  (Story) => (
    <Container maxWidth="lg">
      <Story />
    </Container>
  ),
];

Secondary.storyName = "With container";

export const Tertiary = Template.bind({});

Tertiary.args = {
  ...Secondary.args,
  TruncateTextProps: {
    ...Secondary.args.TruncateTextProps,
    numberOfLines: false,
  },
  ExpandDescriptionButtonProps: {
    ...Secondary.args.ExpandDescriptionButtonProps,
    children: "Ver menos",
  },
};

Tertiary.decorators = [...Secondary.decorators];

Tertiary.storyName = "Description Expanded";
