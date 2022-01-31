import Hero, { HeroProps } from "./Hero";
import { Story, Meta } from "@storybook/react";
import { DEFAULT_HERO_TESTING_PROPS } from "./contants";
import imageFile from "@workspace/images/hero-doc-cut-opt.webp";

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

Primary.args = {
  ...DEFAULT_HERO_TESTING_PROPS,
  img: {
    alt: "alt text",
    src: imageFile as unknown as string,
  },
};
