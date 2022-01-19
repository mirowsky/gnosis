import { Meta, Story } from "@storybook/react";
import { HeaderProps, Header } from "./Header";

export default {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
