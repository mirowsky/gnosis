import { render } from "@testing-library/react";
import {
  DEFAULT_DEFENSE_CARD_TEST_PROPS,
  DEFENSE_CARD_TEST_ID,
} from "./constants";
import DefenseCard, { DefenseCardProps } from "./DefenseCard";

const setup = (props: DefenseCardProps = DEFAULT_DEFENSE_CARD_TEST_PROPS) => {
  const result = render(<DefenseCard {...props} />);

  return result;
};

describe("Defense card component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });

  it("should display a label with the appropriate text", () => {
    const { getByLabelText } = setup();

    const labelElement = getByLabelText(DEFAULT_DEFENSE_CARD_TEST_PROPS.label);

    expect(labelElement).toHaveTextContent(
      DEFAULT_DEFENSE_CARD_TEST_PROPS.label
    );
  });

  it("should display a SVG", () => {
    const { getByTestId } = setup();

    const svgContainer = getByTestId(DEFENSE_CARD_TEST_ID.ICON);

    expect(svgContainer).toBeInTheDocument();
  });
});
