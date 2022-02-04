import { render } from "@testing-library/react";
import { DEFAULT_COURSES_SECTION_TESTING_PROPS } from "./constants";
import CourseSection, { CourseSectionProps } from "./CoursesSection";

const setup = (
  props: CourseSectionProps = DEFAULT_COURSES_SECTION_TESTING_PROPS
) => {
  const result = render(<CourseSection {...props} />);

  return result;
};

describe("Landing page course section", () => {
  const { baseElement } = setup();

  expect(baseElement).toBeInTheDocument();
});
