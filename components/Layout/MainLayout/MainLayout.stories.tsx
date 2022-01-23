import { Meta, Story } from "@storybook/react";
import MainLayout from "./MainLayout";
import type { MainLayoutProps } from "./MainLayout";

export default {
  title: "Layout/Main Layout",
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Primary = Template.bind({});
