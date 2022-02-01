import { render } from "@testing-library/react";
import { DEFAULT_COURSE_CARD_TEST_PROPS } from "./constants";
import CourseCard, { CourseCardProps } from "./CourseCard";

const setup = (props: CourseCardProps = DEFAULT_COURSE_CARD_TEST_PROPS) => {
  const result = render(<CourseCard {...props} />);

  return result;
};

describe("Course card component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
