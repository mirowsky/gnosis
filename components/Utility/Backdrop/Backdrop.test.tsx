import { render } from "@testing-library/react";
import type { BackdropProps } from "./Backdrop";
import { DEFAULT_Backdrop_TESTING_PROPS } from "./Backdrop.fixture";
import { Backdrop } from "./Backdrop";

const setup = (props: BackdropProps = DEFAULT_Backdrop_TESTING_PROPS) => {
  const result = render(<Backdrop {...props} />);

  return result;
};

describe("Backdrop component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
