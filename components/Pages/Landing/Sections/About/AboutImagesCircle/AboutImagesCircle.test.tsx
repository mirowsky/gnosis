import { render } from "@testing-library/react";
import type { AboutImagesCircleProps } from "./AboutImagesCircle";
import { DEFAULT_AboutImagesCircle_TESTING_PROPS } from "./AboutImagesCircle.fixture";
import { AboutImagesCircle } from "./AboutImagesCircle";

const setup = (
  props: AboutImagesCircleProps = DEFAULT_AboutImagesCircle_TESTING_PROPS
) => {
  const result = render(<AboutImagesCircle {...props} />);

  return result;
};

describe("AboutImagesCircle component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
