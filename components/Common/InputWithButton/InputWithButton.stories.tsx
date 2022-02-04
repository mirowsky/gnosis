import { Meta, Story } from "@storybook/react";
import { DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS } from "./constants";
import InputWithButton, { InputWithButtonProps } from "./InputWithButton";
import { Box } from "@mui/material";

export default {
  title: "General Components/Input With Button",
  component: InputWithButton,
  decorators: [
    (Story) => {
      return (
        <Box sx={{ p: 5, width: "500px" }}>
          <Story />
        </Box>
      );
    },
  ],
} as Meta<InputWithButtonProps>;

const Template: Story<InputWithButtonProps> = (args) => (
  <InputWithButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  ...DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS,
};
