import { render } from "@testing-library/react";
import type { SyllabusSectionProps } from "./SyllabusSection";
import { DEFAULT_SyllabusSection_TESTING_PROPS } from "./SyllabusSection.fixture";
import { SyllabusSection } from "./SyllabusSection";

const setup = (
  props: SyllabusSectionProps = DEFAULT_SyllabusSection_TESTING_PROPS
) => {
  const result = render(<SyllabusSection {...props} />);

  return result;
};

describe("SyllabusSection component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
