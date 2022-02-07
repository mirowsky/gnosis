import type { ContactSectionProps } from "./ContactSection";
import ContactSection from "./ContactSection";
import { DEFAULT_ContactSection_TESTING_PROPS } from "./ContactSection.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Container } from "@mui/material";

export default {
  title: "Landing/Contact Section/Main",
  component: ContactSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<ContactSectionProps>;

const Template: Story<ContactSectionProps> = (props) => (
  <ContactSection {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactSection_TESTING_PROPS,
};

Primary.decorators = [
  (Story) => (
    <Container maxWidth="lg">
      <Story />
    </Container>
  ),
];
