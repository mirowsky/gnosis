import { render } from "@testing-library/react";
import type { SlideInOnScrollProps } from "./SlideInOnScroll";
import { DEFAULT_SlideInOnScroll_TESTING_PROPS } from "./SlideInOnScroll.fixture";
import { SlideInOnScroll } from "./SlideInOnScroll";

const setup = (
  props: SlideInOnScrollProps = DEFAULT_SlideInOnScroll_TESTING_PROPS
) => {
  const result = render(<SlideInOnScroll {...props} />);

  return result;
};

describe("SlideInOnScroll component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
