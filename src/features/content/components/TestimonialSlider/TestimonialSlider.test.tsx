import { render } from "@testing-library/react";
import { DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS } from "./constants";
import TestimonialSlider, { TestimonialSliderProps } from "./TestimonialSlider";

const setup = (
  props: TestimonialSliderProps = DEFAULT_TESTIMONIAL_SLIDER_TESTING_PROPS
) => {
  const result = render(<TestimonialSlider {...props} />);

  return result;
};

describe("Testimonial slider component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
