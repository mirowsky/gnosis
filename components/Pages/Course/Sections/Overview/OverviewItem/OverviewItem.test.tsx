import { render } from "@testing-library/react";
import type { OverviewItemProps } from "./OverviewItem";
import { DEFAULT_OverviewItem_TESTING_PROPS } from "./OverviewItem.fixture";
import { OverviewItem } from "./OverviewItem";

const setup = (
  props: OverviewItemProps = DEFAULT_OverviewItem_TESTING_PROPS
) => {
  const result = render(<OverviewItem {...props} />);

  return result;
};

describe("OverviewItem component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
