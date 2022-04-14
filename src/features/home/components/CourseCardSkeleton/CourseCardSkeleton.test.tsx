import { render } from "@testing-library/react";
import type { CourseCardSkeletonProps } from "./CourseCardSkeleton";
import { DEFAULT_CourseCardSkeleton_TESTING_PROPS } from "./CourseCardSkeleton.fixture";
import { CourseCardSkeleton } from "./CourseCardSkeleton";

const setup = (
  props: CourseCardSkeletonProps = DEFAULT_CourseCardSkeleton_TESTING_PROPS
) => {
  const result = render(<CourseCardSkeleton {...props} />);

  return result;
};

describe("CourseCardSkeleton component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
