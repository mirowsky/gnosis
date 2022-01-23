import { render } from "@testing-library/react";
import { DEFAULT_HERO_TESTING_PROPS } from "./contants";
import Hero, { HeroProps } from "./Hero";

const setup = (props: HeroProps = DEFAULT_HERO_TESTING_PROPS) => {
  const result = render(<Hero {...props} />);

  return result;
};

describe("Hero screen component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
