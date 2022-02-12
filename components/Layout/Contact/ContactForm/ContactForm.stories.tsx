import type { ContactFormProps } from "./ContactForm";
import ContactForm from "./ContactForm";
import { DEFAULT_ContactForm_TESTING_PROPS } from "./ContactForm.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Layout/Contact Section/Contact Form",
  component: ContactForm,
  parameters: {
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<ContactFormProps>;

const Template: Story<ContactFormProps> = (props) => <ContactForm {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactForm_TESTING_PROPS,
};

Primary.decorators = [
  (Story) => (
    <Box sx={{ maxWidth: "750px" }}>
      <Story />
    </Box>
  ),
];
