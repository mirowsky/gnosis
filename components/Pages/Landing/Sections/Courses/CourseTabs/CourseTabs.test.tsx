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

  it("should render all the tabs when props are available", () => {
    const { getByText } = setup();

    DEFAULT_COURSE_TABS_TESTING_PROPS.items.forEach((item, _index) => {
      const elem = getByText(item);

      expect(elem).toBeInTheDocument();
    });
  });

  it("should have no children if no props are available", () => {
    const { container } = render(<CourseTabs items={[]} />);

    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
