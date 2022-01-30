import { render } from "@testing-library/react";
import { DEFENSE_CARD_TEST_ID } from "../DefenseCard/constants";
import {
  DEFAULT_DEFENSE_SECTION_TEST_PROPS,
  DEFENSE_SECTION_TEST_ID,
} from "./constants";
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

  it("should have display all the defense cards received via props", () => {
    const { getByTestId } = setup();

    const containerElement = getByTestId(
      DEFENSE_SECTION_TEST_ID.GRID_CONTAINER
    );

    const cards = containerElement.childNodes;

    cards.forEach((node, index) => {
      expect(node).toBeInTheDocument();
    });
  });
});
