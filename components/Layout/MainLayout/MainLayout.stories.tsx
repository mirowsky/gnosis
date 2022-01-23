import { Meta, Story } from "@storybook/react";
import MainLayout from "./MainLayout";
import type { MainLayoutProps } from "./MainLayout";
import { DEFAULT_FOOTER_TEST_PROPS } from "../Footer/constants";
import { DEFAULT_HEADER_TESTING_PROPS } from "../Header/constants";
import { DEFAULT_MOBILE_DRAWER_TEST_PROPS } from "../MobileDrawer/constants";
import { MobileMenuProps } from "../MobileDrawer/MobileDrawer";

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
  FooterProps: DEFAULT_FOOTER_TEST_PROPS,
  HeaderProps: DEFAULT_HEADER_TESTING_PROPS,
  MobileMenuProps: DEFAULT_MOBILE_DRAWER_TEST_PROPS,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  MobileMenuProps: {
    ...(Primary.args.MobileMenuProps as MobileMenuProps),
    open: true,
  },
};
Secondary.storyName = "Mobile menu open";
Secondary.parameters = {
  layout: "fullscreen",
  viewport: {
    defaultViewport: "brazilPhone1",
  },
};
