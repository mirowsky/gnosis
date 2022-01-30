import { render } from "@testing-library/react";
import { DEFAULT_DEFENSE_CARD_TEST_PROPS } from "./constants";
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
});
