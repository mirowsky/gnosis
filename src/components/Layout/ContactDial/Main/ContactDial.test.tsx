import { render } from "@testing-library/react";
import type { ContactDialProps } from "./ContactDial";
import { DEFAULT_ContactDial_TESTING_PROPS } from "./ContactDial.fixture";
import { ContactDial } from "./ContactDial";

const setup = (props: ContactDialProps = DEFAULT_ContactDial_TESTING_PROPS) => {
  const result = render(<ContactDial {...props} />);

  return result;
};

describe("ContactDial component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
