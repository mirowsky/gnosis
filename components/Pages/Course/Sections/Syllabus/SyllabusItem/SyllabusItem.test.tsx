import { render } from "@testing-library/react";
import type { SyllabusItemProps } from "./SyllabusItem";
import { DEFAULT_SyllabusItem_TESTING_PROPS } from "./SyllabusItem.fixture";
import { SyllabusItem } from "./SyllabusItem";

const setup = (
  props: SyllabusItemProps = DEFAULT_SyllabusItem_TESTING_PROPS
) => {
  const result = render(<SyllabusItem {...props} />);

  return result;
};

describe("SyllabusItem component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
