import { Meta, Story } from "@storybook/react";
import BlogSection, { BlogSectionProps } from "./BlogSection";
import { DEFAULT_BLOG_SECTION_TESTING_PROPS } from "./constants";

export default {
  component: BlogSection,
  title: "Landing/Blog Section/Main",
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<BlogSectionProps>;

const Template: Story<BlogSectionProps> = (props) => <BlogSection {...props} />;

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_BLOG_SECTION_TESTING_PROPS,
};
