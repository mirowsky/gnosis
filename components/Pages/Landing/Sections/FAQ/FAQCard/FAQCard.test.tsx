import { render } from "@testing-library/react";
import type { FAQCardProps } from "./FAQCard";
import { DEFAULT_FAQCard_TESTING_PROPS } from "./FAQCard.fixture";
import { FAQCard } from "./FAQCard";

const setup = (props: FAQCardProps = DEFAULT_FAQCard_TESTING_PROPS) => {
  const result = render(<FAQCard {...props} />);

  return result;
};

describe("FAQCard component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
