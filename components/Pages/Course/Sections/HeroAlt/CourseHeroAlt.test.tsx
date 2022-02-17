import { render } from "@testing-library/react";
import type { CourseHeroAltProps } from "./CourseHeroAlt";
import { DEFAULT_CourseHeroAlt_TESTING_PROPS } from "./CourseHeroAlt.fixture";
import { CourseHeroAlt } from "./CourseHeroAlt";

const setup = (
  props: CourseHeroAltProps = DEFAULT_CourseHeroAlt_TESTING_PROPS
) => {
  const result = render(<CourseHeroAlt {...props} />);

  return result;
};

describe("CourseHeroAlt component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
