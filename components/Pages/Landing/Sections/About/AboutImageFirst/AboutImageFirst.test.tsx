import { render } from "@testing-library/react";
import type { AboutImageFirstProps } from "./AboutImageFirst";
import { DEFAULT_AboutImageFirst_TESTING_PROPS } from "./AboutImageFirst.fixture";
import { AboutImageFirst } from "./AboutImageFirst";

const setup = (
  props: AboutImageFirstProps = DEFAULT_AboutImageFirst_TESTING_PROPS
) => {
  const result = render(<AboutImageFirst {...props} />);

  return result;
};

describe("AboutImageFirst component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
