import Hero, { HeroProps } from "./Hero";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Landing Page/Hero/Main",
  component: Hero,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<HeroProps>;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
