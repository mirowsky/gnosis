import { render } from "@testing-library/react";
import type { TabbedContainerProps } from "./TabbedContainer";
import { DEFAULT_TabbedContainer_TESTING_PROPS } from "./TabbedContainer.fixture";
import { TabbedContainer } from "./TabbedContainer";

const setup = (
  props: TabbedContainerProps = DEFAULT_TabbedContainer_TESTING_PROPS
) => {
  const result = render(<TabbedContainer {...props} />);

  return result;
};

describe("TabbedContainer component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
