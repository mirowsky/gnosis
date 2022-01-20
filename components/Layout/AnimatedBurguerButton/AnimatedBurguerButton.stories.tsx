import { Story, Meta } from "@storybook/react";
import {
  AnimatedBurguerMenu,
  AnimatedBurguerButtonProps,
} from "./AnimatedBurguerButton";

export default {
  component: AnimatedBurguerMenu,
  title: "Layout/Menu/Burguer Button",
  parameters: {
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta;

const Template: Story<AnimatedBurguerButtonProps> = (args) => (
  <AnimatedBurguerMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
