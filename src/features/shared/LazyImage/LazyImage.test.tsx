import { render } from "@testing-library/react";
import type { LazyImageProps } from "./LazyImage";
import { DEFAULT_LazyImage_TESTING_PROPS } from "./LazyImage.fixture";
import { LazyImage } from "./LazyImage";

const setup = (props: LazyImageProps = DEFAULT_LazyImage_TESTING_PROPS) => {
  const result = render(<LazyImage {...props} />);

  return result;
};

describe("LazyImage component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
