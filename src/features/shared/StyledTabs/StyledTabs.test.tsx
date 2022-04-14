import { render } from "@testing-library/react";
import type { StyledTabsProps } from "./StyledTabs";
import { DEFAULT_StyledTabs_TESTING_PROPS } from "./StyledTabs.fixture";
import { StyledTabs } from "./StyledTabs";

const setup = (props: StyledTabsProps = DEFAULT_StyledTabs_TESTING_PROPS) => {
  const result = render(<StyledTabs {...props} />);

  return result;
};

describe("StyledTabs component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
