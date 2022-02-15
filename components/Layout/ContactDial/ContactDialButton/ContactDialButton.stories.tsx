import type { ContactDialButtonProps } from "./ContactDialButton";
import ContactDialButton from "./ContactDialButton";
import { DEFAULT_ContactDialButton_TESTING_PROPS } from "./ContactDialButton.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/Contact Dial/Contact Dial Button",
  component: ContactDialButton,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<ContactDialButtonProps>;

const Template: Story<ContactDialButtonProps> = (props) => (
  <ContactDialButton {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactDialButton_TESTING_PROPS,
};
