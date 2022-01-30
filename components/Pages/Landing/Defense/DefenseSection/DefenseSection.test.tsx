import { render } from "@testing-library/react";
import { DEFAULT_DEFENSE_SECTION_TEST_PROPS } from "./constants";
import DefenseSection, { DefenseSectionProps } from "./DefenseSection";

const setup = (
  props: DefenseSectionProps = DEFAULT_DEFENSE_SECTION_TEST_PROPS
) => {
  const result = render(<DefenseSection {...props} />);

  return result;
};

describe("Defense section", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
