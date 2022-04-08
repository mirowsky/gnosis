import { render } from "@testing-library/react";
import type { SupportMenuItemProps } from "./SupportMenuItem";
import { DEFAULT_SupportMenuItem_TESTING_PROPS } from "./SupportMenuItem.fixture";
import { SupportMenuItem } from "./SupportMenuItem";

const setup = (
  props: SupportMenuItemProps = DEFAULT_SupportMenuItem_TESTING_PROPS
) => {
  const result = render(<SupportMenuItem {...props} />);

  return result;
};

describe("SupportMenuItem component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
