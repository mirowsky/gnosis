import { render } from "@testing-library/react";
import type { ContactDialItemProps } from "./ContactDialItem";
import { DEFAULT_ContactDialItem_TESTING_PROPS } from "./ContactDialItem.fixture";
import { ContactDialItem } from "./ContactDialItem";

const setup = (
  props: ContactDialItemProps = DEFAULT_ContactDialItem_TESTING_PROPS
) => {
  const result = render(<ContactDialItem {...props} />);

  return result;
};

describe("ContactDialItem component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
