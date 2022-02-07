import { render } from "@testing-library/react";
import type { ScrollIconAnimationProps } from "./ScrollIconAnimation";
import { DEFAULT_ScrollIconAnimation_TESTING_PROPS } from "./ScrollIconAnimation.fixture";
import { ScrollIconAnimation } from "./ScrollIconAnimation";

const setup = (
  props: ScrollIconAnimationProps = DEFAULT_ScrollIconAnimation_TESTING_PROPS
) => {
  const result = render(<ScrollIconAnimation {...props} />);

  return result;
};

describe("ScrollIconAnimation component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
