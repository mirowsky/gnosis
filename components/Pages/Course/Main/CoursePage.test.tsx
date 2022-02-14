import { render } from "@testing-library/react";
import type { CoursePageProps } from "./CoursePage";
import { DEFAULT_CoursePage_TESTING_PROPS } from "./CoursePage.fixture";
import { CoursePage } from "./CoursePage";

const setup = (props: CoursePageProps = DEFAULT_CoursePage_TESTING_PROPS) => {
  const result = render(<CoursePage {...props} />);

  return result;
};

describe("CoursePage component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
