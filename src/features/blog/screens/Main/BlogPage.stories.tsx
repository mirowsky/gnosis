import type { BlogPageProps } from "./BlogPage";
import BlogPage from "./BlogPage";
import { DEFAULT_BlogPage_TESTING_PROPS } from "./BlogPage.fixture";
import React from "react";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Blog/Page/Main",
  component: BlogPage,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<BlogPageProps>;

const Template: Story<BlogPageProps> = (props) => <BlogPage {...props} />;
export const Primary = Template.bind({});
Primary.args = {
  ...DEFAULT_BlogPage_TESTING_PROPS,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
};

Secondary.storyName = "With Layout";
Secondary.decorators = [(Story) => <Story />];
