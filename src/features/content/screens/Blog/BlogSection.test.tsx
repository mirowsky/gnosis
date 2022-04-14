import { render } from "@testing-library/react";
import { BlogSectionProps, BlogSection } from "./BlogSection";
import { DEFAULT_BLOG_SECTION_TESTING_PROPS } from "./constants";

const setup = (
  props: BlogSectionProps = DEFAULT_BLOG_SECTION_TESTING_PROPS
) => {
  const result = render(<BlogSection {...props} />);

  return result;
};

describe("Blog section component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
