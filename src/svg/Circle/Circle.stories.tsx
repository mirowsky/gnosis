import type { CircleProps } from "./Circle";
import Circle from "./Circle";
import { DEFAULT_Circle_TESTING_PROPS } from "./Circle.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "SVG/Circle",
  component: Circle,
} as Meta<CircleProps>;

const Template: Story<CircleProps> = (props) => <Circle {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_Circle_TESTING_PROPS,
};
