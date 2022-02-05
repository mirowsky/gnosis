import { Story, Meta } from "@storybook/react";
import BlogPreviewCard, { BlogPreviewCardProps } from "./BlogPreviewCard";

export default {
  title: "Landing/Blog Section/Blog Preview Card",
  component: BlogPreviewCard,
} as Meta<BlogPreviewCardProps>;

const Template: Story<BlogPreviewCardProps> = (props) => (
  <BlogPreviewCard {...props} />
);

export const Primary = Template.bind({});

Primary.args = {};
