import { render } from "@testing-library/react";
import type { ContactFormDialogV2Props } from "./ContactFormDialogV2";
import { DEFAULT_ContactFormDialogV2_TESTING_PROPS } from "./ContactFormDialogV2.fixture";
import { ContactFormDialogV2 } from "./ContactFormDialogV2";

const setup = (
  props: ContactFormDialogV2Props = DEFAULT_ContactFormDialogV2_TESTING_PROPS
) => {
  const result = render(<ContactFormDialogV2 {...props} />);

  return result;
};

describe("ContactFormDialogV2 component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
