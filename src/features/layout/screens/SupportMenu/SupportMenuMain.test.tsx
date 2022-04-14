import { render } from "@testing-library/react";
import type { SupportMenuMainProps } from "./SupportMenuMain";
import { DEFAULT_SupportMenuMain_TESTING_PROPS } from "./SupportMenuMain.fixture";
import { SupportMenuMain } from "./SupportMenuMain";

const setup = (
  props: SupportMenuMainProps = DEFAULT_SupportMenuMain_TESTING_PROPS
) => {
  const result = render(<SupportMenuMain {...props} />);

  return result;
};

describe("SupportMenuMain component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
