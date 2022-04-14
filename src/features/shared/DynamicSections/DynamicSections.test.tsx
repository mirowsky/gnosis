import { render } from "@testing-library/react";
import type { DynamicSectionsProps } from "./DynamicSections";
import { DEFAULT_DynamicSections_TESTING_PROPS } from "./DynamicSections.fixture";
import { DynamicSections } from "./DynamicSections";

const setup = (
  props: DynamicSectionsProps = DEFAULT_DynamicSections_TESTING_PROPS
) => {
  const result = render(<DynamicSections {...props} />);

  return result;
};

describe("DynamicSections component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
