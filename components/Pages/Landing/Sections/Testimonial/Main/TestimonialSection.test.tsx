import { render } from "@testing-library/react";
import type { TestimonialSectionProps } from "./TestimonialSection";
import { DEFAULT_TestimonialSection_TESTING_PROPS } from "./TestimonialSection.fixture";
import { TestimonialSection } from "./TestimonialSection";

const setup = (
  props: TestimonialSectionProps = DEFAULT_TestimonialSection_TESTING_PROPS
) => {
  const result = render(<TestimonialSection {...props} />);

  return result;
};

describe("TestimonialSection component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
