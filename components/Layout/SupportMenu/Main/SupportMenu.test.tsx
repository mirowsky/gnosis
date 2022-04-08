import { render } from "@testing-library/react";
import type { SupportMenuProps } from "./SupportMenu";
import {
  DEFAULT_SupportMenu_TESTING_PROPS,
  SupportMenu_TEST_ID,
} from "./SupportMenu.fixture";
import { SupportMenu } from "./SupportMenu";

const setup = (props: SupportMenuProps = DEFAULT_SupportMenu_TESTING_PROPS) => {
  const result = render(<SupportMenu {...props} />);

  return result;
};

describe("SupportMenu component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});

describe("SupportMenu header", () => {
  it("should have a header title", () => {
    const { getByText } = setup();

    const elem = getByText(DEFAULT_SupportMenu_TESTING_PROPS.headerTitle);

    expect(elem).toHaveTextContent(
      DEFAULT_SupportMenu_TESTING_PROPS.headerTitle
    );

    expect(elem).toBeVisible();
  });

  it("should optionally have a header subtitle", () => {
    const { getByText, rerender } = setup();

    const subHeader = getByText(
      DEFAULT_SupportMenu_TESTING_PROPS.headerSubtitle!
    );

    expect(subHeader).toHaveTextContent(
      DEFAULT_SupportMenu_TESTING_PROPS.headerSubtitle!
    );

    rerender(
      <SupportMenu
        {...{ ...DEFAULT_SupportMenu_TESTING_PROPS, headerSubtitle: undefined }}
      />
    );

    expect(subHeader).not.toHaveTextContent(
      DEFAULT_SupportMenu_TESTING_PROPS.headerSubtitle!
    );
  });

  it("should have a button to close the component and it should be clickable", () => {
    const callback = jest.fn(() => "callback fired");

    const { getByTestId } = setup({
      ...DEFAULT_SupportMenu_TESTING_PROPS,
      onCloseButtonClick: callback,
    });

    const buttonElement = getByTestId(SupportMenu_TEST_ID.closeButton);

    expect(buttonElement).toBeEnabled();

    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls.length).toBe(1);
  });
});

describe("Support Menu content", () => {
  const { baseElement, getByTestId } = setup();

  const childNodes = baseElement.childNodes;

  let result = [...childNodes].filter((val, i) => {
    return (
      (val as HTMLElement).getAttribute("test-id") ===
      DEFAULT_SupportMenu_TESTING_PROPS.items[i]["test-id"]
    );
  });

  expect(result.length).toBe(3);
});
