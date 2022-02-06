import type { ContactFormProps } from "./ContactForm";
import ContactForm from "./ContactForm";
import { DEFAULT_ContactForm_TESTING_PROPS } from "./ContactForm.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/Contact Section/Contact Form",
  component: ContactForm,
} as Meta<ContactFormProps>;

const Template: Story<ContactFormProps> = (props) => <ContactForm {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactForm_TESTING_PROPS,
};
