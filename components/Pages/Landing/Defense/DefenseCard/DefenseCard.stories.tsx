import { Story, Meta } from "@storybook/react";
import { DEFAULT_DEFENSE_CARD_TEST_PROPS } from "./constants";
import DefenseCard, { DefenseCardProps } from "./DefenseCard";

export default {
  title: "Landing Page/Defense/Defense Card",
  component: DefenseCard,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<DefenseCardProps>;

const Template: Story<DefenseCardProps> = (args) => <DefenseCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_DEFENSE_CARD_TEST_PROPS,
};
