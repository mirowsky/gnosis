import { Story, Meta } from "@storybook/react";
import BlogPreviewCard, { BlogPreviewCardProps } from "./BlogPreviewCard";
import { DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS } from "./constants";

export default {
  title: "Landing/Blog Section/Blog Preview Card",
  component: BlogPreviewCard,
} as Meta<BlogPreviewCardProps>;

const Template: Story<BlogPreviewCardProps> = (props) => (
  <BlogPreviewCard {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS,
};

export const Secondary = Template.bind({});

Secondary.args = {
  ...Primary.args,
  tags: [
    ...(Primary.args.tags as string[]),
    "#Marketing digital",
    "#Desenvolvimento",
    "#Tecnologia",
  ],
};

Secondary.storyName = "Multiple rows of tags";

export const Tertiary = Template.bind({});

Tertiary.args = {
  ...Primary.args,
  title:
    "A really long title just to show you that when a certain threshold is reached it will actually truncate the title text with an ellipsis and you can even specify the number of lines you want this behavior to be triggered",
};

Tertiary.storyName = "Truncated title text";
