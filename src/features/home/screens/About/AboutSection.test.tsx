import { render } from "@testing-library/react";
import type { AboutSectionProps } from "./AboutSection";
import { DEFAULT_AboutSection_TESTING_PROPS } from "./AboutSection.fixture";
import { AboutSection } from "./AboutSection";

const setup = (
  props: AboutSectionProps = DEFAULT_AboutSection_TESTING_PROPS
) => {
  const result = render(<AboutSection {...props} />);

  return result;
};

describe("AboutSection component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
