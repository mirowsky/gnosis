import { Meta, Story } from "@storybook/react";
import { DEFAULT_Footer_TESTING_PROPS } from "./Footer.fixture";
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<FooterProps>;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = { ...DEFAULT_Footer_TESTING_PROPS };
