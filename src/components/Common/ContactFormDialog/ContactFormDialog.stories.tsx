import type { ContactFormDialogProps } from "./ContactFormDialog";
import ContactFormDialog from "./ContactFormDialog";
import { DEFAULT_ContactFormDialog_TESTING_PROPS } from "./ContactFormDialog.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "General Components/Contact Form Dialog",
  component: ContactFormDialog,
} as Meta<ContactFormDialogProps>;

const Template: Story<ContactFormDialogProps> = (props) => (
  <ContactFormDialog {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactFormDialog_TESTING_PROPS,
};
