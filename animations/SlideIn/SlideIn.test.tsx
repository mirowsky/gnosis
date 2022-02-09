import { render } from "@testing-library/react";
import type { SlideInProps } from "./SlideIn";
import { DEFAULT_SlideIn_TESTING_PROPS } from "./SlideIn.fixture";
import { SlideIn } from "./SlideIn";

const setup = (props: SlideInProps = DEFAULT_SlideIn_TESTING_PROPS) => {
  const result = render(<SlideIn {...props} />);

  return result;
};

describe("SlideIn component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
