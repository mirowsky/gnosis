import type { ContactFormDialogV2Props } from "./ContactFormDialogV2";
import ContactFormDialogV2 from "./ContactFormDialogV2";
import { DEFAULT_ContactFormDialogV2_TESTING_PROPS } from "./ContactFormDialogV2.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "General Components/Contact Form Dialog V2/Main",
  component: ContactFormDialogV2,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<ContactFormDialogV2Props>;

const Template: Story<ContactFormDialogV2Props> = (props) => (
  <ContactFormDialogV2 {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ContactFormDialogV2_TESTING_PROPS,
};
