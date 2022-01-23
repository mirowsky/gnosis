import { Meta, Story } from "@storybook/react";
import MainLayout from "./MainLayout";
import type { MainLayoutProps } from "./MainLayout";
import { DEFAULT_FOOTER_TEST_PROPS } from "../Footer/constants";
import { DEFAULT_HEADER_TESTING_PROPS } from "../Header/constants";

export default {
  title: "Layout/Main Layout",
  component: MainLayout,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  footerProps: DEFAULT_FOOTER_TEST_PROPS,
  headerProps: DEFAULT_HEADER_TESTING_PROPS,
};
