import { render } from "@testing-library/react";
import type { CoursePageAltProps } from "./CoursePageAlt";
import { DEFAULT_CoursePageAlt_TESTING_PROPS } from "./CoursePageAlt.fixture";
import { CoursePageAlt } from "./CoursePageAlt";

const setup = (
  props: CoursePageAltProps = DEFAULT_CoursePageAlt_TESTING_PROPS
) => {
  const result = render(<CoursePageAlt {...props} />);

  return result;
};

describe("CoursePageAlt component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
