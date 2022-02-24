import type { ClientPortalProps } from "./ClientPortal";
import ClientPortal from "./ClientPortal";
import { DEFAULT_ClientPortal_TESTING_PROPS } from "./ClientPortal.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Utility Components/Client Portal/Main",
  component: ClientPortal,
  parameters: {
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<ClientPortalProps>;

const Template: Story<ClientPortalProps> = (props) => (
  <ClientPortal {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_ClientPortal_TESTING_PROPS,
};
