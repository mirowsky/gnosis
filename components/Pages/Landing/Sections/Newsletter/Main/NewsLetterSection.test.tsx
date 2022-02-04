import { render } from "@testing-library/react";
import { DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS } from "./constants";
import NewsLetterSection, { NewsLetterSectionProps } from "./NewsLetterSection";

const setup = (
  props: NewsLetterSectionProps = DEFAULT_NEWSLETTER_SECTION_TESTING_PROPS
) => {
  const result = render(<NewsLetterSection />);

  return result;
};

describe("newsletter section", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
