import type { ContactDialProps } from "./ContactDial";
import ContactDial from "./ContactDial";
import { DEFAULT_ContactDial_TESTING_PROPS } from "./ContactDial.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/Contact Dial/Main",
  component: ContactDial,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<ContactDialProps>;

const Template: Story<ContactDialProps> = (props) => <ContactDial {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactDial_TESTING_PROPS,
};
