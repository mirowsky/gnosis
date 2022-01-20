import { Meta, Story } from "@storybook/react";
import Footer, { FooterProps } from "./Footer";

export default {
  title: "Layout/Footer",
  component: Footer,
} as Meta<FooterProps>;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
