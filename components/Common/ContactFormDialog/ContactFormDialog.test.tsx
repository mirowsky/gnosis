import { render } from "@testing-library/react";
import type { ContactFormDialogProps } from "./ContactFormDialog";
import { DEFAULT_ContactFormDialog_TESTING_PROPS } from "./ContactFormDialog.fixture";
import { ContactFormDialog } from "./ContactFormDialog";

const setup = (
  props: ContactFormDialogProps = DEFAULT_ContactFormDialog_TESTING_PROPS
) => {
  const result = render(<ContactFormDialog {...props} />);

  return result;
};

describe("ContactFormDialog component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
