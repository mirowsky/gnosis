import { render } from "@testing-library/react";
import type { OverviewSectionProps } from "./OverviewSection";
import { DEFAULT_OverviewSection_TESTING_PROPS } from "./OverviewSection.fixture";
import { OverviewSection } from "./OverviewSection";

const setup = (
  props: OverviewSectionProps = DEFAULT_OverviewSection_TESTING_PROPS
) => {
  const result = render(<OverviewSection {...props} />);

  return result;
};

describe("OverviewSection component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
