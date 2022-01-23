import Hero, { HeroProps } from "./Hero";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Hero/Main",
  component: Hero,
} as Meta<HeroProps>;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
