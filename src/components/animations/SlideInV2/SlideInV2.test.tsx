import { render } from "@testing-library/react";
import type { SlideInV2Props } from "./SlideInV2";
import { DEFAULT_SlideInV2_TESTING_PROPS } from "./SlideInV2.fixture";
import { SlideInV2 } from "./SlideInV2";

const setup = (props: SlideInV2Props = DEFAULT_SlideInV2_TESTING_PROPS) => {
  const result = render(<SlideInV2 {...props} />);

  return result;
};

describe("SlideInV2 component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
