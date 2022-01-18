import { Meta, Story } from "@storybook/react";
import { HeaderProps, Header } from "./Header";

export default {
  title: "Layout/Header",
  component: Header,
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
