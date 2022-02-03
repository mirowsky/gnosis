import { render } from "@testing-library/react";
import { DEFAULT_COURSE_TABS_TESTING_PROPS } from "./constants";
import CourseTabs, { CourseTabsProps } from "./CourseTabs";

const setup = (props: CourseTabsProps = DEFAULT_COURSE_TABS_TESTING_PROPS) => {
  const result = render(<CourseTabs {...props} />);

  return result;
};

describe("course tab component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
