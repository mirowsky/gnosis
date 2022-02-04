import { noop } from "@workspace/utility";
import { InputWithButtonProps } from "./InputWithButton";

export const DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS: InputWithButtonProps = {
  ButtonProps: {
    onClick: noop,
    children: "Click me",
  },
  TextFieldProps: {
    onChange: noop,
    value: "I have a value",
    label: "Label placeholder",
  },
};

export const INPUT_WITH_BUTTON_TEST_ID = {
  INPUT: "button-with-input-testid",
} as const;
