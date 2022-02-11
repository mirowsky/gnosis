import type { LandingPageProps } from "./LandingPage";
import LandingPage from "./LandingPage";
import { DEFAULT_LandingPage_TESTING_PROPS } from "./LandingPage.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing/Page",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<LandingPageProps>;

const Template: Story<LandingPageProps> = (props) => <LandingPage {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_LandingPage_TESTING_PROPS,
};
