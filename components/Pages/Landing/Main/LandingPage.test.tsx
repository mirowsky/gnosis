import { render } from "@testing-library/react";
import type { LandingPageProps } from "./LandingPage";
import { DEFAULT_LandingPage_TESTING_PROPS } from "./LandingPage.fixture";
import { LandingPage } from "./LandingPage";

const setup = (props: LandingPageProps = DEFAULT_LandingPage_TESTING_PROPS) => {
  const result = render(<LandingPage {...props} />);

  return result;
};

describe("LandingPage component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
