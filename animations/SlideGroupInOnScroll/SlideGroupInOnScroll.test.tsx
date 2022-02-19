import { render } from "@testing-library/react";
import type { SlideGroupInOnScrollProps } from "./SlideGroupInOnScroll";
import { DEFAULT_SlideGroupInOnScroll_TESTING_PROPS } from "./SlideGroupInOnScroll.fixture";
import { SlideGroupInOnScroll } from "./SlideGroupInOnScroll";

const setup = (
  props: SlideGroupInOnScrollProps = DEFAULT_SlideGroupInOnScroll_TESTING_PROPS
) => {
  const result = render(<SlideGroupInOnScroll {...props} />);

  return result;
};

describe("SlideGroupInOnScroll component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
