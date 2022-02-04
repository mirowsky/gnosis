import { Story, Meta } from "@storybook/react";
import { DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS } from "./constants";
import NewsLetterSection, { NewsLetterSectionProps } from "./NewsLetterSection";

export default {
  title: "Landing/Newsletter/Main",
  component: NewsLetterSection,
} as Meta<NewsLetterSectionProps>;

const Template: Story<NewsLetterSectionProps> = (props) => (
  <NewsLetterSection {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS,
};
