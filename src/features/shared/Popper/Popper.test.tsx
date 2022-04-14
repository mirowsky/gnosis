import { render } from "@testing-library/react";
import type { PopperProps } from "./Popper";
import { DEFAULT_Popper_TESTING_PROPS } from "./Popper.fixture";
import { Popper } from "./Popper";

const setup = (props: PopperProps = DEFAULT_Popper_TESTING_PROPS) => {
  const result = render(<Popper {...props} />);

  return result;
};

describe("Popper component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
