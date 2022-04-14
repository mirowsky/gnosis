import { render } from "@testing-library/react";
import type { LoaderAnimationProps } from "./LoaderAnimation";
import { DEFAULT_LoaderAnimation_TESTING_PROPS } from "./LoaderAnimation.fixture";
import { LoaderAnimation } from "./LoaderAnimation";

const setup = (
  props: LoaderAnimationProps = DEFAULT_LoaderAnimation_TESTING_PROPS
) => {
  const result = render(<LoaderAnimation {...props} />);

  return result;
};

describe("LoaderAnimation component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
