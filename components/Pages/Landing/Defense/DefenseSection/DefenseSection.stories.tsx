import { Story, Meta } from "@storybook/react";
import DefenseSection, { DefenseSectionProps } from "./DefenseSection";
import { DEFAULT_DEFENSE_SECTION_TEST_PROPS } from "./constants";

export default {
  title: "Defense/Defense Section",
  component: DefenseSection,
} as Meta<DefenseSectionProps>;

const Template: Story<DefenseSectionProps> = (props) => (
  <DefenseSection {...props} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_DEFENSE_SECTION_TEST_PROPS,
};
