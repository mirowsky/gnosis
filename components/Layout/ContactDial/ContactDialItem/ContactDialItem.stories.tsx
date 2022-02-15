import type { ContactDialItemProps } from "./ContactDialItem";
import ContactDialItem from "./ContactDialItem";
import { DEFAULT_ContactDialItem_TESTING_PROPS } from "./ContactDialItem.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/Contact Dial/Contact Dial Item",
  component: ContactDialItem,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<ContactDialItemProps>;

const Template: Story<ContactDialItemProps> = (props) => (
  <ContactDialItem {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactDialItem_TESTING_PROPS,
};
