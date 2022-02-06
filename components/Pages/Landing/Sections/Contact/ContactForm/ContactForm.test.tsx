import { render } from "@testing-library/react";
import type { ContactFormProps } from "./ContactForm";
import { DEFAULT_ContactForm_TESTING_PROPS } from "./ContactForm.fixture";
import { ContactForm } from "./ContactForm";

const setup = (props: ContactFormProps = DEFAULT_ContactForm_TESTING_PROPS) => {
  const result = render(<ContactForm {...props} />);

  return result;
};

describe("ContactForm component", () => {
  it("should render", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeInTheDocument();
  });
});
