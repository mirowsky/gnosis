import { render } from "@testing-library/react";
import type { ClientPortalProps } from "./ClientPortal";
import { DEFAULT_ClientPortal_TESTING_PROPS } from "./ClientPortal.fixture";
import { ClientPortal } from "./ClientPortal";

const setup = (
  props: ClientPortalProps = DEFAULT_ClientPortal_TESTING_PROPS
) => {
  const result = render(<ClientPortal {...props} />);

  return result;
};

describe("ClientPortal component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
