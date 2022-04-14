import { render } from "@testing-library/react";
import type { ContactDialButtonProps } from "./ContactDialButton";
import { DEFAULT_ContactDialButton_TESTING_PROPS } from "./ContactDialButton.fixture";
import { ContactDialButton } from "./ContactDialButton";

const setup = (
  props: ContactDialButtonProps = DEFAULT_ContactDialButton_TESTING_PROPS
) => {
  const result = render(<ContactDialButton {...props} />);

  return result;
};

describe("ContactDialButton component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
