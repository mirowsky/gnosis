import type { SyllabusSectionProps } from "./SyllabusSection";
import SyllabusSection from "./SyllabusSection";
import { DEFAULT_SyllabusSection_TESTING_PROPS } from "./SyllabusSection.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Course/Syllabus Section/Main",
  component: SyllabusSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={{
          m: 3,
          mx: "auto",
          maxWidth: (theme) => theme.breakpoints.values.lg,
        }}
      >
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    activeIndex: {
      table: {
        disable: true,
      },
    },
    courseType: {
      table: {
        disable: true,
      },
    },
    handleChange: {
      table: {
        disable: true,
      },
    },
    syllabusItems: {
      table: {
        disable: true,
      },
    },
    emec: {
      table: {
        disable: true,
      },
    },
    prerequisites: {
      table: {
        disable: true,
      },
    },
    active: {
      control: {
        options: [0, 1, 2, 3],
        mapping: [0, 1, 2, 3],
        type: "select",
        labels: ["First Item", "Second Item", "Third Item", "Fourth Item"],
      },
    },
  },
} as Meta<SyllabusSectionProps & { active: number }>;

const Template: Story<SyllabusSectionProps & { active: number }> = ({
  active,
  ...props
}) => <SyllabusSection {...{ ...props, activeIndex: active }} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SyllabusSection_TESTING_PROPS,
};
