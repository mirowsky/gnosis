import { render } from "@testing-library/react";
import type { FAQCardButtonProps } from "./FAQCardButton";
import { DEFAULT_FAQCardButton_TESTING_PROPS } from "./FAQCardButton.fixture";
import { FAQCardButton } from "./FAQCardButton";

const setup = (
  props: FAQCardButtonProps = DEFAULT_FAQCardButton_TESTING_PROPS
) => {
  const result = render(<FAQCardButton {...props} />);

  return result;
};

describe("FAQCardButton component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
