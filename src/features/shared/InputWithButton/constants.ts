import { noop } from "src/utility";
import { InputWithButtonProps } from "./InputWithButton";

export const DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS: InputWithButtonProps = {
  ButtonProps: {
    onClick: noop,
    children: "Click me",
  },
  InputProps: {
    onChange: noop,
    "aria-label": "Label placeholder",
  },
};

export const INPUT_WITH_BUTTON_TEST_ID = {
  INPUT: "button-with-input-testid",
} as const;
