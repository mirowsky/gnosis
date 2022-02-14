import type { SocialMediaShareTrayProps } from "./SocialMediaShareTray";
import SocialMediaShareTray from "./SocialMediaShareTray";
import { DEFAULT_SocialMediaShareTray_TESTING_PROPS } from "./SocialMediaShareTray.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Blog/Page/Social Media Share Tray",
  component: SocialMediaShareTray,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<SocialMediaShareTrayProps>;

const Template: Story<SocialMediaShareTrayProps> = (props) => (
  <SocialMediaShareTray {...props} />
);
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_SocialMediaShareTray_TESTING_PROPS,
};
