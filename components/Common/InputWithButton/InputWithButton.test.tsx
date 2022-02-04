import { cleanup, fireEvent, render } from "@testing-library/react";
import {
  DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS,
  INPUT_WITH_BUTTON_TEST_ID,
} from "./constants";
import InputWithButton, { InputWithButtonProps } from "./InputWithButton";

const setup = (
  props: InputWithButtonProps = DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS
) => {
  const result = render(<InputWithButton {...props} />);

  return { ...result };
};

afterEach(() => {
  cleanup();
});

describe("Input with button component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });

  it("should have a button", () => {
    const { getByRole } = setup();

    const elem = getByRole("button");

    expect(elem).toBeInTheDocument();
  });

  it("should fire a callback when the button is clicked", () => {
    const callback = jest.fn(() => {});

    const { getByRole } = setup({
      ...DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS,
      ButtonProps: {
        ...DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS.ButtonProps,
        onClick: callback,
      },
    });

    const elem = getByRole("button");

    fireEvent.click(elem);

    expect(callback).toHaveBeenCalled();
  });

  it("should have an input element", () => {
    const { getByLabelText } = setup();

    const elem = getByLabelText(
      DEFAULT_INPUT_WITH_BUTTON_TEST_PROPS.TextFieldProps.label as string
    );

    expect(elem).toBeInTheDocument();
  });

  //Debug this
  //   it("should change when an user fires the event", () => {
  //     const { getByRole, debug } = setup();

  //     const elem = getByRole("textbox");

  //     fireEvent.change(elem as HTMLInputElement, { target: { value: "abc" } });

  //     expect((elem as HTMLInputElement).value).toBe("abc");
  //   });
});
