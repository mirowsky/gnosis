import { render } from "@testing-library/react";
import type { ContactSectionProps } from "./ContactSection";
import { DEFAULT_ContactSection_TESTING_PROPS } from "./ContactSection.fixture";
import { ContactSection } from "./ContactSection";

const setup = (
  props: ContactSectionProps = DEFAULT_ContactSection_TESTING_PROPS
) => {
  const result = render(<ContactSection {...props} />);

  return result;
};

describe("ContactSection component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
