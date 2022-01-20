import { Meta, Story } from "@storybook/react";
import CustomTheme from "../../../theme/CustomTheme";
import { DEFAULT_TESTING_PROPS } from "./constants";
import { HeaderProps, Header } from "./Header";

export default {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "brazilDesktop1",
    },
  },
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_TESTING_PROPS,
  cta: { ...DEFAULT_TESTING_PROPS.cta, label: "Fale conosco" },
  burguerOpen: false,
};
