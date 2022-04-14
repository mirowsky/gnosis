import { render } from "@testing-library/react";
import type { FAQSectionProps } from "./FAQSection";
import { DEFAULT_FAQSection_TESTING_PROPS } from "./FAQSection.fixture";
import { FAQSection } from "./FAQSection";

const setup = (props: FAQSectionProps = DEFAULT_FAQSection_TESTING_PROPS) => {
  const result = render(<FAQSection {...props} />);

  return result;
};

describe("FAQSection component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
