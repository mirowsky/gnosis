import { render } from "@testing-library/react";
import type { CourseHeroSectionProps } from "./CourseHeroSection";
import { DEFAULT_CourseHeroSection_TESTING_PROPS } from "./CourseHeroSection.fixture";
import { CourseHeroSection } from "./CourseHeroSection";

const setup = (
  props: CourseHeroSectionProps = DEFAULT_CourseHeroSection_TESTING_PROPS
) => {
  const result = render(<CourseHeroSection {...props} />);

  return result;
};

describe("CourseHeroSection component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
