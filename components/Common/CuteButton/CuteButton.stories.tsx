import { Meta, Story } from "@storybook/react";

import { CuteButtonProps, default as CuteButton } from "./CuteButton";

export default {
  title: "Buttons/CuteButton",
  component: CuteButton,
} as Meta<CuteButtonProps>;

const Template: Story<CuteButtonProps> = (args) => <CuteButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
