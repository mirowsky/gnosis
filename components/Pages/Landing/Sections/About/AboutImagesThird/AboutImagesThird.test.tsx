import { render } from "@testing-library/react";
import type { AboutImagesThirdProps } from "./AboutImagesThird";
import { DEFAULT_AboutImagesThird_TESTING_PROPS } from "./AboutImagesThird.fixture";
import { AboutImagesThird } from "./AboutImagesThird";

const setup = (
  props: AboutImagesThirdProps = DEFAULT_AboutImagesThird_TESTING_PROPS
) => {
  const result = render(<AboutImagesThird {...props} />);

  return result;
};

describe("AboutImagesThird component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
