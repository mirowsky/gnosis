import { render } from "@testing-library/react";
import type { SyllabusTabsProps } from "./SyllabusTabs";
import { DEFAULT_SyllabusTabs_TESTING_PROPS } from "./SyllabusTabs.fixture";
import { SyllabusTabs } from "./SyllabusTabs";

const setup = (
  props: SyllabusTabsProps = DEFAULT_SyllabusTabs_TESTING_PROPS
) => {
  const result = render(<SyllabusTabs {...props} />);

  return result;
};

describe("SyllabusTabs component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
