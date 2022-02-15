import type { ContactDialProps } from "./ContactDial";
import ContactDial from "./ContactDial";
import { DEFAULT_ContactDial_TESTING_PROPS } from "./ContactDial.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Box } from "@mui/material";

export default {
  title: "Layout/Contact Dial/Main",
  component: ContactDial,
  parameters: {
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  argTypes: {
    open: {
      type: "boolean",
    },
  },
} as Meta<ContactDialProps & { open: boolean }>;

const Template: Story<ContactDialProps & { open: boolean }> = ({
  open,
  ...props
}) => <ContactDial {...props} ContactDialButtonProps={{ open: open }} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactDial_TESTING_PROPS,
};

Primary.decorators = [
  (Story) => (
    <Box sx={{ position: "fixed", bottom: 0, right: 0, p: 4 }}>
      <Story />
    </Box>
  ),
];
