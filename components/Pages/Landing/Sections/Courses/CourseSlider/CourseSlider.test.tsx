import { render } from "@testing-library/react";
import { DEFAULT_COURSE_SLIDER_TEST_PROPS } from "./constants";
import CourseSlider, { CourseSliderProps } from "./CourseSlider";

const setup = (props: CourseSliderProps = DEFAULT_COURSE_SLIDER_TEST_PROPS) => {
  const result = render(<CourseSlider {...props} />);

  return result;
};

describe("Course section slider", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
