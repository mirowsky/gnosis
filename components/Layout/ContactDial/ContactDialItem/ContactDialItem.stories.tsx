import type { ContactDialItemProps } from "./ContactDialItem";
import ContactDialItem from "./ContactDialItem";
import { DEFAULT_ContactDialItem_TESTING_PROPS } from "./ContactDialItem.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Layout/Contact Dial/Contact Dial Item",
  component: ContactDialItem,
  parameters: {
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

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  label:
    "This is a really long label used to visual text what happens when a longer sentence is passed down as props to this component",
};

Secondary.storyName = "Long label";
