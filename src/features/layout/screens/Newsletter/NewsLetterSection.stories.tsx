import { Story, Meta } from "@storybook/react";
import { DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS } from "./constants";
import NewsLetterSection, { NewsLetterSectionProps } from "./NewsLetterSection";
import { Box } from "@mui/material";

export default {
  title: "Landing/Newsletter/Main",
  component: NewsLetterSection,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box sx={{ mt: 15 }}>
          <Story />
        </Box>
      );
    },
  ],
} as Meta<NewsLetterSectionProps>;

const Template: Story<NewsLetterSectionProps> = (props) => (
  <NewsLetterSection {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS,
};
