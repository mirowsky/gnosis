import { render } from "@testing-library/react";
import type { AboutImagesProps } from "./AboutImages";
import { DEFAULT_AboutImages_TESTING_PROPS } from "./AboutImages.fixture";
import { AboutImages } from "./AboutImages";

const setup = (props: AboutImagesProps = DEFAULT_AboutImages_TESTING_PROPS) => {
  const result = render(<AboutImages {...props} />);

  return result;
};

describe("AboutImages component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
