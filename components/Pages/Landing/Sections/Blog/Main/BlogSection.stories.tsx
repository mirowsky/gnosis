import { Meta, Story } from "@storybook/react";
import BlogSection, { BlogSectionProps } from "./BlogSection";

export default {
  component: BlogSection,
  title: "Landing/Blog Section/Main",
} as Meta<BlogSectionProps>;

const Template: Story<BlogSectionProps> = (props) => <BlogSection {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
