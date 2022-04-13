import { render } from "@testing-library/react";

import BlogPreviewCard, { BlogPreviewCardProps } from "./BlogPreviewCard";
import { DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS } from "./constants";

const setup = (
  props: BlogPreviewCardProps = DEFAULT_BLOG_PREVIEW_CARDS_TEST_PROPS
) => {
  const result = render(<BlogPreviewCard {...props} />);

  return result;
};

describe("Blog preview card component", () => {
  it("should render", () => {
    const { baseElement } = setup();

    expect(baseElement).toBeInTheDocument();
  });
});
