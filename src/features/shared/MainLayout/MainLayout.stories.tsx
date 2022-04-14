import { Meta, Story } from "@storybook/react";
import MainLayout from "./MainLayout";
import type { MainLayoutProps } from "./MainLayout";
import { DEFAULT_Footer_TESTING_PROPS } from "../../layout/screens/Footer/Footer.fixture";
import { DEFAULT_HEADER_TESTING_PROPS } from "../../layout/screens/Header/constants";
import { DEFAULT_MOBILE_DRAWER_TEST_PROPS } from "../../layout/screens/MobileDrawer/constants";
import { MobileMenuProps } from "../../layout/screens/MobileDrawer/MobileDrawer";
import { MAIN_LAYOUT_DEFAULT_PROPS } from "./constants";

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
  ...MAIN_LAYOUT_DEFAULT_PROPS,
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
