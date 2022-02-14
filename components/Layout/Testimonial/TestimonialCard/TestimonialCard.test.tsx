import { render } from "@testing-library/react";
import { DEFAULT_TESTIMONIAL_CARD_TESTING_PROPS } from "./constants";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

const setup = (
  props: TestimonialCardProps = DEFAULT_TESTIMONIAL_CARD_TESTING_PROPS
) => {
  const result = render(<TestimonialCard {...props} />);

  return result;
};

describe("Testimonial card component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
