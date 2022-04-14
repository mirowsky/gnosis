import { render } from "@testing-library/react";
import type { FooterProps } from "./Footer";
import { DEFAULT_Footer_TESTING_PROPS } from "./Footer.fixture";
import { Footer } from "./Footer";

const setup = (props: FooterProps = DEFAULT_Footer_TESTING_PROPS) => {
  const result = render(<Footer {...props} />);

  return result;
};

describe("Footer component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
