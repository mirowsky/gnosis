import { render } from "@testing-library/react";
import { DEFAULT_COURSE_NAVIGATION_TEST_PROPS } from "./constants";
import CourseNavigation, { CourseNavigationProps } from "./CourseNavigation";

const setup = (
  props: CourseNavigationProps = DEFAULT_COURSE_NAVIGATION_TEST_PROPS
) => {
  const result = render(<CourseNavigation {...props} />);

  return result;
};

describe("Course navigation buttons component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
